import React from "react";

const App = () => {
  const name = "Varun";
  const x = 10;
  const y = 20;
  const names = ["Sharry", "Varun", "Gaurav", "Abhishek"];
  const loggedIn = true;
  return (
    <>
      <div className="text-5xl">App</div>
      <p style={{color: 'red', fontSize: '24px'}}>Hello {name}</p>
      <p>
        Sum of {x} and {y} is {x + y}
      </p>
      <ul>
        {names.map((name, ind) => (
          <li key={ind}>{name}</li>
        ))}
      </ul>

      {loggedIn ? <h1>User LoggedIn</h1> : <h1>User Not LoggedIn</h1>}
    </>
  );
};

export default App;
