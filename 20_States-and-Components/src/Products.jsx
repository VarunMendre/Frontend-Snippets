import React, { useState } from "react";

function Products({ name, data }) {
    const [a, b] = useState(false)
  return (
    <div className="text-white w-full h-60 bg-zinc-800">
          <h4 className={`${a ? "text-green-600" : "text-red-600"}`}>{ a ? "Hello" : "Good Bye"}</h4>
          <button onClick={() => b(!a)}>change</button>
    </div>
  );
}

export default Products;
