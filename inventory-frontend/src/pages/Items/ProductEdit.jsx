import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import './Item.css';

const mockProducts = [
  {
    id: '12345-A',
    itemName: 'CeraVe Foaming Cleanser',
    category: 'Skincare',
    supplier: 'Tech Supplies',
    quantity: 10,
    price: 100,
    barcode: '6526202326522',
    location: 'Zone A',
    image: 'https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
];

const itemNames = ['CeraVe Foaming Cleanser', 'Moisturizer Plus', 'Sunscreen SPF 50'];
const categories = ['Skincare', 'Haircare', 'Body Wash'];
const suppliers = ['Tech Supplies', 'Global Source', 'Local Vendor'];
const locations = ['Zone A', 'Zone B', 'Zone C'];

const ProductEdit = () => {
  const { itemId, productId } = useParams();
  const navigate = useNavigate();
  const [formData, setFormData] = useState(null);

  useEffect(() => {
    const product = mockProducts.find(p => p.id === productId);
    if (product) {
      setFormData(product);
    }
  }, [productId]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: name === 'price' || name === 'quantity' ? Number(value) : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Updated Product:', formData);
    navigate(`/items/${itemId}/products/${productId}`);
  };

  if (!formData) {
    return (
      <div className="item-list-container">
        <p>Loading product...</p>
      </div>
    );
  }

  return (
    <div className="item-list-container">
      <div style={{ marginBottom: '2rem' }}>
        <button className="back-button" onClick={() => navigate(-1)}>←</button>
      </div>

      <form onSubmit={handleSubmit} className="modal-content" style={{ maxWidth: '500px', margin: '0 auto' }}>
        <h3 style={{ textAlign: 'center', marginBottom: '1rem' }}>Edit Product</h3>

        <label>
          Item Name
          <select
            name="itemName"
            className="search-input"
            value={formData.itemName}
            onChange={handleChange}
          >
            {itemNames.map(name => (
              <option key={name} value={name}>{name}</option>
            ))}
          </select>
        </label>

        <label>
          Barcode
          <input
            name="barcode"
            type="text"
            className="search-input"
            value={formData.barcode}
            onChange={handleChange}
          />
        </label>

        <label>
          Category
          <select
            name="category"
            className="search-input"
            value={formData.category}
            onChange={handleChange}
          >
            {categories.map(cat => (
              <option key={cat} value={cat}>{cat}</option>
            ))}
          </select>
        </label>

        <label>
          Location
          <select
            name="location"
            className="search-input"
            value={formData.location}
            onChange={handleChange}
          >
            {locations.map(loc => (
              <option key={loc} value={loc}>{loc}</option>
            ))}
          </select>
        </label>

        <label>
          Quantity
          <input
            name="quantity"
            type="number"
            className="search-input"
            value={formData.quantity}
            onChange={handleChange}
            min={0}
          />
        </label>

        <label>
          Supplier
          <select
            name="supplier"
            className="search-input"
            value={formData.supplier}
            onChange={handleChange}
          >
            {suppliers.map(sup => (
              <option key={sup} value={sup}>{sup}</option>
            ))}
          </select>
        </label>

        <label>
          Price
          <input
            name="price"
            type="number"
            className="search-input"
            value={formData.price}
            onChange={handleChange}
            min={0}
          />
        </label>

        <button type="submit" className="add-button" style={{ width: '100%', marginTop: '1rem' }}>
          Save Changes
        </button>
      </form>
    </div>
  );
};

export default ProductEdit;
