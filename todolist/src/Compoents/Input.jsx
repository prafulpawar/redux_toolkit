import React, { useState } from 'react';
import { useDispatch } from 'react-redux'; // Named import
import { FaPlus } from "react-icons/fa";
import {add} from '../store/reducers/MainReducer.jsx'

function Input() {
  const [inputdata, setInputData] = useState('');
  const dispatch = useDispatch(); 

  function handleClick(e) {
    e.preventDefault();
    dispatch(add(inputdata)); 
    setInputData('');
  }

  return (
    <>
      <form className='w-full' onSubmit={handleClick}>
        <div className='flex w-full justify-between items-center pt-2 pr-2 gap-1 border-b-4 pb-2'>
          <div className='border-2'>
            <input
              className='w-80 h-11'
              type="text"
              value={inputdata}
              onChange={(e) => setInputData(e.target.value)}
            />
          </div>
          <button type="submit">
            <div className='p-4 rounded-md bg-purple-500'>
              <FaPlus color='white' />
            </div>
          </button>
        </div>
      </form>
    </>
  );
}

export default Input;
