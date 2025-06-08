import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Item.css'; // Reusing styles

const AddItem = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    id: '',
    name: '',
    barcode: '',
    expirationDate: '',
    alertDate: '',
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Item added:', formData);
    navigate('/items');
  };

  return (
    <div className="item-list-container">
      <div className="item-list-header">
        <div>
            <button className="back-button" onClick={() => navigate(-1)}>
            ← Back
            </button>
        </div>
      </div> <br /> <br />


      <form className="modal-content" onSubmit={handleSubmit} style={{ maxWidth: '600px', margin: '0 auto' }}>
        <label>
          Item ID:
          <input
            type="text"
            name="id"
            placeholder="Enter Item ID"
            value={formData.id}
            onChange={handleChange}
            required
          />
        </label>

        <label>
          Item Name:
          <input
            type="text"
            name="name"
            placeholder="Enter Item Name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </label>

        <label>
          Barcode:
          <input
            type="text"
            name="barcode"
            placeholder="Enter Barcode"
            value={formData.barcode}
            onChange={handleChange}
            required
          />
        </label>

        <label>
          Expiration Date:
          <input
            type="date"
            name="expirationDate"
            value={formData.expirationDate}
            onChange={handleChange}
            required
          />
        </label>

        <label>
          Alert Date:
          <input
            type="date"
            name="alertDate"
            value={formData.alertDate}
            onChange={handleChange}
            required
          />
        </label>

        <button type="submit" className="save-button">Add Now</button>
      </form>
    </div>
  );
};

export default AddItem;
