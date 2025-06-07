// src/components/Header.jsx
import { Bell, ChevronDown, Settings } from 'lucide-react';
import { useState } from 'react';
import './Header.css';

const Header = ({ page }) => {
  const [activeTab, setActiveTab] = useState('inventory');

  return (
    <header className="header">
      <div className="header-left">
        <span className="page-title">{page}</span>

        {page === 'Inventory' && (
          <div className="tab-group">
            <button
              className={`tab-button ${activeTab === 'inventory' ? 'active' : ''}`}
              onClick={() => setActiveTab('inventory')}
            >
              Inventory Items
            </button>
            <button
              className={`tab-button ${activeTab === 'po' ? 'active' : ''}`}
              onClick={() => setActiveTab('po')}
            >
              PO Items
            </button>
          </div>
        )}
      </div>

      <div className="header-right">
        <Bell size={18} className="icon" />
        <div className="avatar-dropdown">
          <img
            src="https://i.pravatar.cc/300"
            alt="User"
            className="avatar"
          />
          <ChevronDown size={16} className="dropdown-icon" />
        </div>
        <a href="/settings" className="settings-button">
          <Settings size={16} />
          <span>Setting</span>
        </a>

      </div>
    </header>
  );
};

export default Header;
