import './App.css';

function App() {
  return (
    <div>
      <h1>Mern Invoice Start</h1>
      <button onClick={callApi}>Call API</button>
    </div>
  );
}

function callApi() {
  fetch("http://localhost:3001/", { method: "GET" })
    .then(data => data.json())
    .then(json => console.log(JSON.stringify(json)))
}

export default App;
