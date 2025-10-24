const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(bodyParser.json());

// MongoDB schema and model
const DebateSchema = new mongoose.Schema({
  topic: String,
  result: String,
  userScore: Number,
  opponentScore: Number,
  createdAt: { type: Date, default: Date.now },
});
const DebateHistory = mongoose.model("DebateHistory", DebateSchema);

// Connect to MongoDB
mongoose.connect("mongodb://localhost:27017/ai-debate", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Random topic endpoint
app.get("/api/random-topic", (req, res) => {
  const topics = ["AI in Education", "Climate Change", "Space Exploration"];
  const topic = topics[Math.floor(Math.random() * topics.length)];
  res.json({ topic });
});

// Random opponent endpoint
app.get("/api/random-opponent", (req, res) => {
  const opponents = ["Alice AI", "Bob AI", "Charlie AI"];
  const opponent = opponents[Math.floor(Math.random() * opponents.length)];
  res.json({ opponent });
});

// Generate opponent argument
app.post("/api/generate-opponent", (req, res) => {
  const { topic } = req.body;
  const opponentArgument = `Counter argument for "${topic}" by AI.`;
  res.json({ opponentArgument });
});

// Judge debate endpoint
app.post("/api/judge-debate", async (req, res) => {
  const { topic, yourArgument, opponentArgument } = req.body;

  // Generate numeric scores
  const userScore = Math.floor(Math.random() * 101);      // 0-100
  const opponentScore = Math.floor(Math.random() * 101);  // 0-100

  // Determine result
  let result = "";
  if (userScore > opponentScore) result = "You Win!";
  else if (userScore < opponentScore) result = "Opponent Wins!";
  else result = "Draw!";

  // Save to database
  await DebateHistory.create({ topic, result, userScore, opponentScore });

  // Return numeric scores
  res.json({ result, userScore, opponentScore });
});

// Fetch debate history
app.get("/api/history", async (req, res) => {
  const history = await DebateHistory.find().sort({ createdAt: -1 });
  res.json(history);
});

// Start server
app.listen(5000, () => console.log("Backend running on port 5000"));