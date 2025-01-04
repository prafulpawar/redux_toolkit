import React, { useState } from 'react';
import { MdDelete, MdDriveFileRenameOutline } from "react-icons/md";
import { useSelector, useDispatch } from 'react-redux'; 
import { deleteOne, updateOne } from '../store/reducers/MainReducer.jsx';

function Section() {
    const dispatch = useDispatch(); 
    const products = useSelector((state) => state.data.data); 
    const [editIndex, setEditIndex] = useState(null); 
    const [editValue, setEditValue] = useState(''); 

    const handleEdit = (index, item) => {
        setEditIndex(index);
        setEditValue(item); 
    };

    const handleSave = () => {
        if (editIndex !== null && editValue.trim()) {
            dispatch(updateOne({ index: editIndex, updatedData: editValue }));
            setEditIndex(null);
            setEditValue('');
        }
    };

    return (
        <div>
            {
                products.map((item, index) => (
                    <div key={index} className='flex p-2 mt-2 gap-20 border-2 bg-zinc-200 justify-between items-center'>
                        <div>
                            {editIndex === index ? (
                                <input 
                                    type="text" 
                                    value={editValue} 
                                    onChange={(e) => setEditValue(e.target.value)} 
                                    className="p-2 border"
                                />
                            ) : (
                                <h1 className='text-3xl'>{item}</h1>
                            )}
                        </div>

                        <button onClick={() => dispatch(deleteOne(index))}>
                            <div className='p-2 rounded-md bg-red-400'>
                                <MdDelete size={35} color='white' />
                            </div>
                        </button>

                        <button onClick={() => handleEdit(index, item)}>
                            <div className='p-2 rounded-md bg-yellow-400'>
                                <MdDriveFileRenameOutline size={35} color='white' />
                            </div>
                        </button>

                    </div>
                ))
            }

            {editIndex !== null && (
                <button onClick={handleSave} className='mt-4 p-2 bg-green-400 text-white'>
                    Save
                </button>
            )}
        </div>
    );
}

export default Section;
