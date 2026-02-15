import React, { useState, useEffect } from "react";

const Admin = () => {
  const [product, setProduct] = useState({
    name: "",
    price: "",
    description: "",
    imageURL: "",
  });
  //currentProductId, setCurrentProductId state pentru delete button
  const [currentProductId, setCurrentProductId] = useState("");
  const [products, setProducts] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch(
        "https://652bdb8ed0d1df5273eecf98.mockapi.io/3dproducts",
      );
      const products = await response.json();
      setProducts(products);
    };

    fetchProducts();
  }, []);

  const addNewProduct = () => {
    const url = "https://652bdb8ed0d1df5273eecf98.mockapi.io/3dproducts";
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(product),
    };
    fetch(url, options);
  };

  const deleteProduct = async (id) => {
    const url = `https://652bdb8ed0d1df5273eecf98.mockapi.io/3dproducts/${id}`;
    const options = {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    };
    const response = await fetch(url, options);
    if (response.ok) {
      const updatedProducts = products.filter((product) => product.id != id);
      setProducts(updatedProducts);
    }
  };

  return (
    <div className="flex mt-10">
      <div className="w-[500px] flex flex-col gap-6 ">
        <div className="w-[500px] flex flex-col gap-2">
          <label htmlFor="name" className="text-left font-medium text-gray-900">
            Name
          </label>

          <input
            id="name"
            type="text"
            placeholder="Product name"
            value={product.name}
            onChange={(e) => setProduct({ ...product, name: e.target.value })}
            className="w-xl rounded-md bg-gray-300 px-3 py-2 text-gray-900 outline outline-1 outline-gray-300 focus:outline-2 focus:outline-orange-600"
          />
        </div>

        <div className="w-[500px] flex flex-col gap-2">
          <label
            htmlFor="imageURL"
            className="text-left font-medium text-gray-900"
          >
            Image URL
          </label>
          <input
            type="text"
            id="imageURL"
            value={product.imageURL}
            onChange={(e) => {
              const imageURL = e.target.value;
              setProduct({ ...product, imageURL: imageURL });
            }}
            className="block w-full min-w-0 rounded-md bg-gray-300 px-1 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-orange-600 sm:text-sm/6"
          />
        </div>
        <div className="w-[500px] flex flex-col gap-2">
          <label
            htmlFor="price"
            className="text-left font-medium text-gray-900"
          >
            Price
          </label>
          <input
            type="text"
            id="price"
            className="w-xl rounded-md bg-gray-300 px-3 py-2 text-gray-900 outline outline-1 outline-gray-300 focus:outline-2 focus:outline-orange-600"
            onChange={(e) => {
              const productPrice = e.target.value;
              setProduct({ ...product, price: productPrice });
            }}
          />
        </div>
        <div className="w-[500px] flex flex-col gap-2">
          <label
            htmlFor="description"
            className="text-left font-medium text-gray-900"
          >
            Description
          </label>
          <input
            type="text"
            id="description"
            className="w-xl rounded-md bg-gray-300 px-3 py-2 text-gray-900 outline outline-1 outline-gray-300 focus:outline-2 focus:outline-orange-600"
            value={product.description}
            onChange={(e) => {
              const productDescription = e.target.value;
              setProduct({ ...product, description: productDescription });
            }}
          />
        </div>
        <div className="flex justify-center items-center mt-6">
          <button
            onClick={addNewProduct}
            className="bg-green-800 px-7 py-2.5 text-sm font-medium text-white hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-green-300"
          >
            Add new product
          </button>
        </div>
      </div>
      <div className="flex justify-center mx-auto overflow-hidden shadow-lg max-w-screen-xxl mt-10">
        {products && (
          <table className="w-full">
            <thead>
              <tr className="hidden sm:table-row">
                <th>Name</th>
                <th>Image URL</th>
                <th>Price</th>
                <th className="w-[600px] pl-[10px]">Description</th>
                <th>Edit/Delete</th>
              </tr>
            </thead>
            <tbody>
              {products.map((product) => (
                <React.Fragment key={product.id}>
                  <tr className="border-b hidden sm:table-row">
                    <td className="p-2">{product.name}</td>
                    <td className="p-2 flex justify-center lg:mt-14">
                      <img
                        src={product.imageURL}
                        width={100}
                        alt={product.name}
                      />
                    </td>
                    <td className="px-2">{product.price}</td>
                    <td className="px-2">{product.description}</td>
                    <td className="px-2 flex flex-col items-center gap-2 mb-8">
                      <button
                        id={product.id}
                        onClick={(e) => {
                          const productId = e.target.id;
                          setCurrentProductId(productId);
                          const productToBeEdited = products.find(
                            (product) => product.id === productId,
                          );
                          setProduct(productToBeEdited);
                        }}
                        className="mb-2 bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 shadow"
                      >
                        Edit
                      </button>
                      <button
                        id={product.id}
                        onClick={(e) => deleteProduct(e.target.id)}
                        className="mb-2 bg-orange-700 hover:bg-[gray] text-gray-800 font-semibold py-2 px-4 border border-gray-400 shadow"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                  <tr className="sm:hidden flex flex-col mb-4 border-b">
                    <td className="p-2 text-center">
                      <div className="font-semibold">{product.name}</div>
                      <div className="flex justify-center mt-14">
                        <img
                          src={product.imageURL}
                          width={100}
                          alt={product.name}
                        />
                      </div>
                      <div>{product.price}</div>
                    </td>
                    <td className="p-2 text-center">
                      <div className="mb-2">{product.description}</div>
                      <div className="flex justify-around">
                        <button
                          id={product.id}
                          onClick={(e) => {
                            const productId = e.target.id;
                            setCurrentProductId(productId);
                            const productToBeEdited = products.find(
                              (product) => product.id === productId,
                            );
                            setProduct(productToBeEdited);
                          }}
                          className="mb-8 bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 shadow"
                        >
                          Edit
                        </button>
                        <button
                          id={product.id}
                          onClick={(e) => deleteProduct(e.target.id)}
                          className="mb-8 bg-orange-700 hover:bg-[gray] text-gray-800 font-semibold py-2 px-4 border border-gray-400 shadow"
                        >
                          Delete
                        </button>
                      </div>
                    </td>
                  </tr>
                </React.Fragment>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};

export default Admin;
