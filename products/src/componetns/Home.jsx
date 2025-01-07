import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '../store/reducers/productReducer'; // Import the fetchProducts async action

function Home() {
  const dispatch = useDispatch();
  const { data, loading, error } = useSelector((state) => state.product); // Access Redux state

  useEffect(() => {
    dispatch(fetchProducts()); // Dispatch the fetchProducts action to fetch data from API
  }, [dispatch]);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold text-center mb-6">Product List</h1>
      
      {loading && <p className="text-center">Loading...</p>} {/* Show loading text while data is being fetched */}
      {error && <p className="text-center text-red-500">{error}</p>} {/* Show error message if API call fails */}
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {data.length > 0 ? (
          data.map((product) => (
            <div className="product-card bg-white shadow-lg rounded-lg overflow-hidden p-4 flex flex-col items-center" key={product.id}>
              <img
                src={product.image}
                alt={product.title}
                className="product-image w-full h-48 object-cover rounded-md mb-4"
              />
              <div className="product-info text-center">
                <h3 className="text-lg font-semibold text-gray-700">{product.title}</h3>
                <p className="text-sm text-gray-500 mb-4">{product.description}</p>
                <p className="text-xl font-bold text-green-600 mb-4">${product.price}</p>
                <button className="buy-button bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600">
                  Buy Now
                </button>
              </div>
            </div>
          ))
        ) : (
          <p className="col-span-full text-center">No products found.</p>
        )}
      </div>
    </div>
  );
}

export default Home;
