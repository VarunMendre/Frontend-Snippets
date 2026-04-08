import React, { useState } from "react";
import Products from "./Products";

function App() {
  let [a, b] = useState(0);
  return (
    <div className="w-full h-screen bg-zinc-900 text-white p-5">
      <Products name="Varun" data={{age: 25} } />
    </div>
  );
}

export default App;
