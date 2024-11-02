import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateProduct } from '../store/productSlice';

const EditProduct = ({ productId }) => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products);
  const product = products.find((prod) => prod.id === productId);

  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [available, setAvailable] = useState(false);

  useEffect(() => {
    if (product) {
      setName(product.name);
      setDescription(product.description);
      setPrice(product.price);
      setAvailable(product.available);
    }
  }, [product]);

  const handleUpdateProduct = (e) => {
    e.preventDefault();
    dispatch(updateProduct({ id: productId, updatedProduct: { name, description, price: parseFloat(price), available } }));
  };

  if (!product) return null;

  return (
    <form onSubmit={handleUpdateProduct}>
      <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
      <input type="text" value={description} onChange={(e) => setDescription(e.target.value)} required />
      <input type="number" value={price} onChange={(e) => setPrice(e.target.value)} required />
      <label>
        Доступен
        <input type="checkbox" checked={available} onChange={(e) => setAvailable(e.target.checked)} />
      </label>
      <button type="submit">Обновить продукт</button>
    </form>
  );
};

export default EditProduct;