import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { add } from '../store/reducers/productSlice';
import { deleteProduct } from '../store/reducers/productSlice';
function Two() {

  function handleClick() {
    const newProduct = {
      id: '4',
      name: 'Product 4',
      price: '100.36',
    };
    dispatch(add(newProduct));
  }

    function deleteItem(){
     dispatch(deleteProduct());
   }


  const dispatch = useDispatch();
  const products = useSelector((state) => state.products)
  console.log(products)


  return (
    <>
       <div className='flex bg-zinc-200 flex-col h-screen justify-center  items-center border-2 p-10'>

           
       <div className='flex flex-col justify-center border-blue-400 items-center border-2 p-10 '>
       {
        products.products.map((items, index) => {
          return (
            <div key={index}>
              {items.name} - {items.price}
            </div>
          )
        })

      }
       </div>

      <div className='flex gap-5 mt-5  flex-col justify-center items-center   '>

        <div className='flex border-2 border-blue-400 bg-red-300 pr-10 pl-10 rounded-xl'>
          <button onClick={handleClick}>
            Add Product
          </button>
        </div>

        <div onClick={deleteItem} className='flex border-2 border-blue-400 bg-blue-500 pr-8 pl-8 rounded-xl  '>
          <button>
            Delete Products
          </button>
        </div>

      </div>
       </div>

    </>
  )


}

export default Two