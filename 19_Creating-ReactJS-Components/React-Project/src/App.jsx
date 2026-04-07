import React, { useState } from "react";

function App() {
  let [a, b] = useState(0);
  return (
    <div className="w-full h-screen bg-zinc-700 text-white p-5">
      <h1>{a}</h1>
      <button onClick={() => b(++a)} className="px-3 py-1 bg-amber-200 rounded-md text-xs ">click counter</button><br /><br />
      <button onClick={() => b(0)} className="px-3 py-1 bg-amber-200 rounded-md text-xs">reset counter</button>
    </div>
  );
}

export default App;
