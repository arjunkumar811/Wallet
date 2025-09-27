import { generateMnemonic } from "bip39";
import { useState } from "react";


function App() {
  const [mnemonic, setMnemonic] = useState("");

  return (
    <>
      <button onClick={async function() {
  const mn = generateMnemonic();
  setMnemonic(mn)
}}>
  Create Seed Phrase
</button>
     <input type="text" value={mnemonic}></input>

    </>
  );
}

export default App;
