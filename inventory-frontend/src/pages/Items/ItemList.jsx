import { useEffect, useState } from 'react';
import { FaEdit, FaTrash } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

import './Item.css';

const ItemList = () => {
  const [items, setItems] = useState([]);
  const [selectedItem, setSelectedItem] = useState(null);

  useEffect(() => {
    const fetchDummyItems = () => {
      const generatedItems = Array.from({ length: 7 }, (_, i) => ({
        id: `FIG-${100 + i}`,
        name: `Item ${i + 1}`,
        barcode: Math.floor(Math.random() * 1e15).toString(),
        expirationDate: 'Dec 5',
        alertDate: 'Dec 5',
        addedBy: 'https://i.pravatar.cc/40?img=' + (i + 10),
      }));
      setItems(generatedItems);
    };

    fetchDummyItems();
  }, []);

  const handleEditClick = (item) => {
    setSelectedItem({ ...item }); // clone to allow editing
  };

  const handleModalClose = () => {
    setSelectedItem(null);
  };

  const handleInputChange = (e) => {
    setSelectedItem({
      ...selectedItem,
      [e.target.name]: e.target.value,
    });
  };

  const handleSave = () => {
    const updated = items.map((item) =>
      item.id === selectedItem.id ? selectedItem : item
    );
    setItems(updated);
    setSelectedItem(null);
  };

  const navigate = useNavigate();

  return (
    <div className="item-list-container">
      <div className="item-list-header">
        <input className="search-input" type="text" placeholder="Search Items" />
        <button className="add-button" onClick={() => navigate('/items/add')}>+ Add</button>
      </div>
      <div className="table-wrapper">
        <table className="item-table">
          <thead>
            <tr>
              <th>Item ID</th>
              <th>Item Name</th>
              <th>Barcode</th>
              <th>Expiration Date</th>
              <th>Alert Date</th>
              <th>Added By</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {items.map((item) => (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>
                  <button
                    className="item-link"
                    onClick={() => navigate(`/items/${item.id}/products`)}
                  >
                    <strong>{item.name}</strong>
                  </button>
                </td>


                <td><span className="barcode">{item.barcode}</span></td>
                <td>{item.expirationDate}</td>
                <td>{item.alertDate}</td>
                <td><img src={item.addedBy} alt="avatar" className="avatar" /></td>
                <td>
                  <button className="icon-button" onClick={() => handleEditClick(item)}>
                    <FaEdit />
                  </button>
                  <button className="icon-button delete">
                    <FaTrash />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {selectedItem && (
        <div className="modal-overlay">
          <div className="modal">
            <button className="modal-close" onClick={handleModalClose}>×</button>
            <h3>Edit Item</h3> <br />
            <div className="modal-content">
              <label>
                Item Name:
                <input
                  type="text"
                  name="name"
                  value={selectedItem.name}
                  onChange={handleInputChange}
                />
              </label>
              <label>
                Barcode:
                <input
                  type="text"
                  name="barcode"
                  value={selectedItem.barcode}
                  onChange={handleInputChange}
                />
              </label>
              <label>
                Expiration Date:
                <input
                  type="date"
                  name="expirationDate"
                  value={selectedItem.expirationDate}
                  onChange={handleInputChange}
                />
              </label>
              <label>
                Alert Date:
                <input
                  type="date  "
                  name="alertDate"
                  value={selectedItem.alertDate}
                  onChange={handleInputChange}
                />
              </label>
              <button className="save-button" onClick={handleSave}>Save</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ItemList;
