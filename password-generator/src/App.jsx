import { useCallback, useEffect, useRef, useState } from "react";

export default function App() {
  const passRef = useRef()
  const [password, setPassword] = useState('');
  const [length, setLength] = useState(8);
  const [includeNumbers, setIncludeNumbers] = useState(false);
  const [includeSymbols, setIncludeSymbols] = useState(false);
  
  const generatePassword = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if(includeNumbers) str += "1234567890";
    if(includeSymbols) str += "!@#$%^&*(){}_-";

    for(let i = 0; i <= length; i++) {
      let char = Math.floor((Math.random() * str.length + 1));
      pass += str.charAt(char);
    }
    setPassword(pass)
  }, [length, includeNumbers, includeSymbols, setPassword]);

  const copyToClipBoard = () => {
    passRef.current.select();
    window.navigator.clipboard.writeText(password);
  };

  useEffect(() => {
    generatePassword()
  }, [length, includeNumbers, includeSymbols])

  return (
    <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800 text-orange-500">
      <h1 className='text-white text-center my-3'>Password generator</h1>
      <div className="flex shadow rounded-lg overflow-hidden mb-4">
        <input
            type="text"
            className="border-2 border-amber-50 outline-2 outline-amber-50 w-full py-1 px-3"
            placeholder="Password"
            readOnly
            ref={passRef}
            value={password}
        />
        <button 
        onClick={copyToClipBoard}
        className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'>
          copy
        </button>
      </div>
      <div className='flex text-sm gap-x-2'>
        <div className='flex items-center gap-x-1'>
          <input 
          type="range"
          min={6}
          max={20}
          value={length}
          className='cursor-pointer'
          onChange={(e) => (
            setLength(e.target.value)
          )} />
          <label>Length: {length}</label>
        </div>
        <div className="flex items-center gap-x-1">
        <input
            type="checkbox"
            id="numberInput"
            onClick={() => setIncludeNumbers(prev => !prev)}
        />
        <label htmlFor="numberInput">Numbers</label>
        </div>
        <div className="flex items-center gap-x-1">
            <input
                type="checkbox"
                id="characterInput"
                onClick={() => setIncludeSymbols(prev => !prev)}
            />
            <label htmlFor="characterInput">Characters</label>
        </div>
      </div>
    </div>
  );
};
