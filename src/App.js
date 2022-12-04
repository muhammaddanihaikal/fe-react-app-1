import { useState } from "react";
import Header from "./components/Header";

function App() {
  const [nama, setNama] = useState('Muhammad Dani Haikal');
  const [umur, setUmur] = useState(20);


  const change = () => {
    setNama('Dani Aja');
    setUmur(100);
    console.log(nama);
    console.log(umur);
  }

  return (
    <div>
      <Header />
      <h1>{nama}</h1>
      <h2>{umur * 2}</h2>
      <button onClick={change}>Change</button>
    </div>
  );
}

export default App;