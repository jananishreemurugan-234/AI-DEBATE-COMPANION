import React, { useState, useEffect } from "react";
import {
  getRandomTopic,
  getRandomOpponent,
  generateOpponent,
  judgeDebate,
  getDebateHistory,
} from "./api/index";
import "./styles/App.css";

function App() {
  const [topic, setTopic] = useState("");
  const [yourArgument, setYourArgument] = useState("");
  const [opponentArgument, setOpponentArgument] = useState("");
  const [result, setResult] = useState("");
  const [userScore, setUserScore] = useState(null);
  const [opponentScore, setOpponentScore] = useState(null);
  const [history, setHistory] = useState([]);
  const [loadingOpponent, setLoadingOpponent] = useState(false);
  const [loadingJudge, setLoadingJudge] = useState(false);

  // Microphone states
  const [isRecording, setIsRecording] = useState(false);
  const [mediaRecorder, setMediaRecorder] = useState(null);

  useEffect(() => loadHistory(), []);

  const loadHistory = async () => {
    try {
      const res = await getDebateHistory();
      setHistory(res.data);
    } catch {
      console.log("Failed to fetch history");
    }
  };

  const handleTopic = async () => {
    try {
      const res = await getRandomTopic();
      setTopic(res.data.topic);
    } catch {
      setTopic("⚠️ Failed to fetch topic");
    }
  };

  const handleOpponent = async () => {
    try {
      const res = await getRandomOpponent();
      alert(`Your opponent: ${res.data.opponent}`);
    } catch {
      alert("⚠️ Failed to fetch opponent");
    }
  };

  const handleGenerateOpponent = async () => {
    if (!topic || !yourArgument) return alert("Enter topic & argument first!");
    setLoadingOpponent(true);
    try {
      const res = await generateOpponent({ topic, yourArgument });
      setOpponentArgument(res.data.opponentArgument);
    } catch {
      setOpponentArgument("⚠️ Failed to generate opponent argument.");
    } finally {
      setLoadingOpponent(false);
    }
  };

  const handleJudgeDebate = async () => {
    if (!topic || !yourArgument || !opponentArgument) return alert("Complete the debate first!");
    setLoadingJudge(true);
    try {
      const res = await judgeDebate({ topic, yourArgument, opponentArgument });
      setResult(res.data.result);
      setUserScore(res.data.userScore);
      setOpponentScore(res.data.opponentScore);
      loadHistory();
    } catch {
      setResult("⚠️ Failed to judge debate.");
      setUserScore(null);
      setOpponentScore(null);
    } finally {
      setLoadingJudge(false);
    }
  };

  // Microphone toggle
  const handleRecord = async () => {
    try {
      if (!isRecording) {
        const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
        const recorder = new MediaRecorder(stream);
        const audioChunks = [];
        recorder.ondataavailable = (e) => e.data.size > 0 && audioChunks.push(e.data);
        recorder.onstop = () => {
          const audioBlob = new Blob(audioChunks, { type: "audio/wav" });
          new Audio(URL.createObjectURL(audioBlob)).play();
          stream.getTracks().forEach((track) => track.stop());
        };
        recorder.start();
        setMediaRecorder(recorder);
        setIsRecording(true);
      } else {
        mediaRecorder.stop();
        setIsRecording(false);
      }
    } catch {
      alert("Microphone unavailable.");
    }
  };

  return (
    <div className="app">
      <h1>🎤 AI Debate Companion</h1>

      <div className="controls">
        <button onClick={handleTopic}>🎯 Get Random Topic</button>
        <button onClick={handleOpponent}>🧠 Get Random Opponent</button>
      </div>

      <div className="debate-area">
        <p><strong>Topic:</strong> {topic || "Click 'Get Random Topic'"}</p>

        <textarea
          placeholder="💬 Your argument..."
          value={yourArgument}
          onChange={(e) => setYourArgument(e.target.value)}
        />

        <button onClick={handleRecord}>
          {isRecording ? "⏹️ Stop Recording 🔴" : "🎤 Record Argument"}
        </button>

        <textarea
          placeholder="🤖 Opponent argument..."
          value={opponentArgument}
          readOnly
        />

        <div className="buttons">
          <button onClick={handleGenerateOpponent} disabled={loadingOpponent}>
            {loadingOpponent ? "⏳ Generating..." : "⚙️ Auto-generate Opponent"}
          </button>
          <button onClick={handleJudgeDebate} disabled={loadingJudge}>
            {loadingJudge ? "⏳ Judging..." : "⚖️ Judge Debate"}
          </button>
        </div>

        {result && (
          <div className="result-section">
            <p className="result">Result: {result}</p>
            <p className="score">
              Your Score: {userScore} | Opponent Score: {opponentScore}
            </p>
          </div>
        )}
      </div>

      <div className="history">
        <h2>📜 Debate History</h2>
        {history.length === 0 ? <p>No debates yet.</p> : (
          <ul>
            {history.map((item) => (
              <li key={item._id || item.id}>
                <strong>{item.topic}</strong> — {item.result} | 
                Your Score: {item.userScore} | Opponent Score: {item.opponentScore}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export default App;