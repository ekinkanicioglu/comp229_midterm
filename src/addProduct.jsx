import React, { useState } from "react";

export default function AddProduct() {
  const [product, setproduct] = useState({
    name: "",
    description: "",
    category: "",
    quantity: "",
    price: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setproduct((prevproduct) => ({ ...prevproduct, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(
      `Name: ${product.name}, Description: ${product.description}, 
      Category: ${product.category},Category: ${product.quantity}, Price ${product.price} `
    );
  };

  return (
    <form onSubmit={handleSubmit} className="multiple">
      
      <input
      placeholder="Name"
        type="text"
        id="name"
        className="multiple__input"
        name="name"
        value={product.name}
        onChange={handleChange}
      />

<input
      placeholder="Description"
        type="text"
        id="description"
        className="multiple__input"
        name="description"
        value={product.description}
        onChange={handleChange}
      />
      <input
      placeholder="Category"
        type="text"
        id="category"
        className="multiple__input"
        name="category"
        value={product.category}
        onChange={handleChange}
      />

<input
      placeholder="Quantity"
        type="text"
        id="quantity"
        className="multiple__input"
        name="quantity"
        value={product.quantity}
        onChange={handleChange}
      />

<input
      placeholder="Price"
        type="text"
        id="price"
        className="multiple__input"
        name="price"
        value={product.price}
        onChange={handleChange}
      />
      <button className="multiple__button" type="submit">
        Submit
      </button>
    </form>
  );
}
