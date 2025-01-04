//for all the sync actions or the actions not involded in API calls
export {add} from '../store/reducers/productSlice'


// for all the Async actions or the actions  involded in API calls
import {remove,getData} from '../store/reducers/productSlice'

// export const asyncmove = function  () {
//     // return async function (dispatch) {
//     //     setTimeout(() => {
//     //         dispatch(remove())
//     //     }, 2000);
//     // }
// }

export const asyncgetproducts = () => async  (dispatch, getState) => {

       try{
         const response = await fetch("https://fakestoreapi.com/products");
         const data = await response.json();
         dispatch(getData(data))
       }
       catch(error){
        console.error(error);
       }
}

export const asyncmove = () => async (dispatch,getState) => {
    const state = getState();
    console.log(state);
    setTimeout(() => {
        //Sync Action Will Be Going On........
        dispatch(remove())
    }, 2000);
}