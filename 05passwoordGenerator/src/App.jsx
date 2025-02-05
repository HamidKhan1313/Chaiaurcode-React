import React, { useState, useCallback } from 'react';

function App() {
  const [length, setLength] = useState(12);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState('');

  const passwordGenerator = useCallback(() => {
    let pass = '';
    let str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    
    // Add numbers and special characters if allowed
    if (numberAllowed) str += '0123456789';
    if (charAllowed) str += '!@$%^&*~``()_+=?/<>|{}[]';

    // Generate password
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * str.length);  // Random index within string length
      pass += str.charAt(randomIndex);  // Append the random character to the password
    }

    setPassword(pass);
  }, [length, numberAllowed, charAllowed]);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(password);  // Copy password to clipboard
    alert('Password copied to clipboard!');
  };

  return (
    <>
      <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-3 my-8 bg-gray-800 text-orange-500'>
        <h1 className='text-white text-center'>Password Generator</h1>

        {/* Password Display */}
        <div className='flex shadow rounded-lg overflow-hidden mb-4'>
          <input
            type="text"
            value={password}
            className='outline-none w-full py-1 px-3'
            placeholder='Password'
            readOnly
          />
          <button
            onClick={copyToClipboard}
            className='bg-gray-600 text-white px-3 py-2'
          >
            Copy
          </button>
        </div>

        {/* Length Input */}
        <div className='mb-4'>
          <label className='text-white mr-2'>Password Length: {length}</label>
          <input
            type="range"
            min="4"
            max="20"
            value={length}
            onChange={(e) => setLength(Number(e.target.value))}
            className='w-full'
          />
        </div>

        {/* Allow Numbers */}
        <div className='flex items-center mb-4'>
          <input
            type="checkbox"
            checked={numberAllowed}
            onChange={() => setNumberAllowed((prev) => !prev)}
            className='mr-2'
          />
          <label className='text-white'>Include Numbers</label>
        </div>

        {/* Allow Special Characters */}
        <div className='flex items-center mb-4'>
          <input
            type="checkbox"
            checked={charAllowed}
            onChange={() => setCharAllowed((prev) => !prev)}
            className='mr-2'
          />
          <label className='text-white'>Include Special Characters</label>
        </div>

        {/* Generate Button */}
        <button
          onClick={passwordGenerator}
          className='w-full py-2 bg-orange-500 text-white rounded-lg'
        >
          Generate Password
        </button>
      </div>
    </>
  );
}

export default App;
