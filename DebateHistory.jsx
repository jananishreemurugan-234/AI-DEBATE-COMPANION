import React from 'react';

export default function DebateHistory({ items = [] }){
  return (
    <aside className="history">
      <h2>History</h2>
      <ul>
        {items.map(it => (
          <li key={it._id || it.id}>{it.text}</li>
        ))}
      </ul>
    </aside>
  );
}