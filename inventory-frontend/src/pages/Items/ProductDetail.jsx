import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import './Item.css';

const mockProducts = [
  {
    id: '12345-A',
    name: 'FIG-100',
    supplier: 'Tech Supplies',
    quantity: 10,
    expirationDate: '5 Dec',
    alertDate: '1 Dec',
    price: '$100',
    barcode: '6526202326522',
    location: 'Zone A',
    image: 'https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    id: '12345-B',
    name: 'Moisturizer Plus',
    supplier: 'Global Source',
    quantity: 5,
    expirationDate: '10 Jan',
    alertDate: '5 Jan',
    price: '$80',
    barcode: '7826234786234',
    location: 'Zone B',
    image: 'https://images.pexels.com/photos/1004028/pexels-photo-1004028.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  // Add more dummy products if needed
];

const ProductDetail = () => {
  const { itemId, productId } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const foundProduct = mockProducts.find(p => p.id === productId);
    setProduct(foundProduct || null);
  }, [productId]);

  if (!product) {
    return (
      <div className="item-list-container">
        <button className="back-button" onClick={() => navigate(`/items/${itemId}/products`)}>←</button>
        <p>Product not found.</p>
      </div>
    );
  }

  return (
    <div className="item-list-container">
      <div style={{ marginBottom: '2rem' }}>
        <button className="back-button" onClick={() => navigate(`/items/${itemId}/products`)}>←</button>
      </div>

      <div style={{ display: 'flex', gap: '3rem', alignItems: 'flex-start' }}>
        <img
          src={product.image}
          alt={product.name}
          style={{ width: '300px', borderRadius: '8px', objectFit: 'contain' }}
        />

        <div>
          <h2 style={{ marginBottom: '0.5rem' }}>{product.name}</h2>
          <hr style={{ width: '50px', marginBottom: '1rem', borderColor: '#000' }} />
          <p><strong>Item ID:</strong> {product.id}</p>
          <p><strong>Supplier:</strong> {product.supplier}</p>
          <p><strong>Quantity:</strong> {product.quantity}</p>
          <p><strong>Expiration Date:</strong> {product.expirationDate}</p>
          <p><strong>Alert Date:</strong> {product.alertDate}</p>
          <p><strong>Price:</strong> {product.price}</p>
          <p><strong>Barcode:</strong> {product.barcode}</p>
          <p><strong>Location:</strong> {product.location}</p>

          <button className="add-button" style={{ marginTop: '1rem' }} onClick={() => navigate(`/items/${itemId}/products/${productId}/edit`)}>
            ✎ Edit
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
