import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import './Item.css';

const AddReceivedItem = () => {
  const { itemId } = useParams();
  const navigate = useNavigate();

  const [items, setItems] = useState([]);
  const [categories, setCategories] = useState([]);
  const [locations, setLocations] = useState([]);
  const [suppliers, setSuppliers] = useState([]);

  const [formData, setFormData] = useState({
    itemName: '',
    barcode: '',
    category: '',
    location: '',
    quantity: '',
    supplier: '',
  });

  useEffect(() => {
    setItems(['Item 1', 'Item B', 'Item C']);
    setCategories(['Category A', 'Category B', 'Category C']);
    setLocations(['Warehouse A', 'Warehouse B', 'Warehouse C']);
    setSuppliers(['Techo Supplies', 'Global Source', 'LogiCo']);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Submitted:', formData);
    navigate(`/items/${itemId}/products`);
  };

  return (
    <div className="item-list-container">
      <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '2rem' }}>
        <button className="back-button" onClick={() => navigate(`/items/${itemId}/products`)}>←</button>
        <h2 style={{ margin: 0 }}>Item : {itemId}</h2>
      </div>

      <form className="modal-content" onSubmit={handleSubmit} style={{ maxWidth: '400px', margin: '0 auto' }}>
        <h3 style={{ textAlign: 'center', marginBottom: '1rem' }}>Add Received Item</h3>

        <label>
          Item Name
          <select name="itemName" value={formData.itemName} onChange={handleChange} className="search-input">
            <option value="">Select Item Name</option>
            {items.map((item, i) => (
              <option key={i} value={item}>{item}</option>
            ))}
          </select>
        </label>

        <label>
          Barcode
          <input
            name="barcode"
            type="text"
            placeholder="Enter Barcode"
            className="search-input"
            value={formData.barcode}
            onChange={handleChange}
          />
        </label>

        <label>
          Category
          <select name="category" value={formData.category} onChange={handleChange} className="search-input">
            <option value="">Select Category</option>
            {categories.map((cat, i) => (
              <option key={i} value={cat}>{cat}</option>
            ))}
          </select>
        </label>

        <label>
          Location
          <select name="location" value={formData.location} onChange={handleChange} className="search-input">
            <option value="">Select Location</option>
            {locations.map((loc, i) => (
              <option key={i} value={loc}>{loc}</option>
            ))}
          </select>
        </label>

        <label>
          Quantity
          <input
            name="quantity"
            type="number"
            placeholder="Enter Quantity"
            className="search-input"
            value={formData.quantity}
            onChange={handleChange}
          />
        </label>

        <label>
          Supplier
          <select name="supplier" value={formData.supplier} onChange={handleChange} className="search-input">
            <option value="">Select Supplier</option>
            {suppliers.map((sup, i) => (
              <option key={i} value={sup}>{sup}</option>
            ))}
          </select>
        </label>

        <button type="submit" className="add-button" style={{ width: '100%', marginTop: '1rem' }}>
          Add Now
        </button>
      </form>
    </div>
  );
};

export default AddReceivedItem;
