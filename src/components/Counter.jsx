import { useState, useEffect } from 'react';

function Counter() {
  const [count, setCount] = useState(() => {
    const savedCount = localStorage.getItem('count');
    return savedCount ? JSON.parse(savedCount) : 0;
  });
  const [savedValues, setSavedValues] = useState(() => {
    const savedValues = localStorage.getItem('savedValues');
    return savedValues ? JSON.parse(savedValues) : 0;
  }, []);

  useEffect(() => {
    localStorage.setItem('count', JSON.stringify(count));
    localStorage.setItem('savedValues', JSON.stringify(savedValues));
  }, [count, savedValues]);

  const increment = () => {
    setCount(count + 1);
  };

  const saveValue = () => {
    setSavedValues([...savedValues, count]);
  };
  const reset = () => {
    setCount(0);
    setSavedValues([]);
    localStorage.removeItem('count');
    localStorage.removeItem('value');
  };
  return (
    <div>
      <div className=' container mx-auto bg-slate-300 min-h-screen flex justify-center items-center'>
        <div className=" max-w-xl w-full rounded-xl bg-white min-h-[300px] flex items-center justify-center flex-col ">
          <h1 className='text-black text-5xl font-sans font-normal text-center'>{count}</h1>
          <div className=' flex gap-5 mt-6'>
            <button onClick={increment} className='px-4 py-3 bg-green-500 rounded-full text-white text-lg font-sans font-medium w-40'>Add</button>
            <button onClick={saveValue} className='px-4 py-3 bg-green-500 rounded-full text-white text-lg font-sans font-medium w-40'>Save Value</button>
            <button onClick={reset} className='px-4 py-3 bg-green-500 rounded-full text-white text-lg font-sans font-medium w-40'>Reset</button>
          </div>
          <p className='text-black text-center pt-5'>{savedValues.join(',')}</p>
        </div>
      </div>
    </div>
  );
}

export default Counter;
