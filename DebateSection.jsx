import React, { useState } from 'react';
import api from '../api';

export default function DebateSection({ onNewEntry }){
  const [text, setText] = useState('');
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e){
    e.preventDefault();
    setLoading(true);
    try{
      const created = await api.submitDebate({ text });
      onNewEntry(created);
      setText('');
    }catch(err){
      console.error(err);
      alert('Failed to submit debate');
    }finally{
      setLoading(false);
    }
  }

  return (
    <section className="debate-section">
      <form onSubmit={handleSubmit}>
        <textarea value={text} onChange={e=>setText(e.target.value)} placeholder="Enter debate text" />
        <button type="submit" disabled={loading}>{loading? 'Sending...' : 'Send'}</button>
      </form>
    </section>
  );
}