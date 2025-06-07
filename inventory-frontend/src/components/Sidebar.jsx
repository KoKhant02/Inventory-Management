// src/components/Sidebar.jsx
import {
  Activity,
  Box,
  Building,
  Home,
  LayoutGrid,
  MapPin,
  Menu,
  PackageSearch,
  Share2,
  ShoppingCart,
  Users,
  X,
} from 'lucide-react';
import { useState } from 'react';
import './Sidebar.css';

const Sidebar = ({ page }) => {
  const [isOpen, setIsOpen] = useState(false);
  const isActive = (name) => page === name;

  return (
    <>
      {/* Mobile Menu Button */}
      {!isOpen && (
        <button className="sidebar__toggle-button sidebar__open-button" onClick={() => setIsOpen(true)}>
          <Menu size={24} />
        </button>
      )}

      <div className={`sidebar ${isOpen ? 'sidebar--open' : ''}`}>
        {/* Close Button inside sidebar */}
        {isOpen && (
          <button className="sidebar__toggle-button sidebar__close-button" onClick={() => setIsOpen(false)}>
            <X size={24} />
          </button>
        )}

        <h1 className="sidebar__title">Company Name</h1>

        <div className="sidebar__section">
          <p className="sidebar__label">Discover</p>
          <a href="/dashboard" className={`sidebar__link ${isActive('Dashboard') ? 'sidebar__link--active' : ''}`}>
            <Home size={16} />
            <span>Dashboard</span>
          </a>
          <a href="/items" className={`sidebar__link ${isActive('Items') ? 'sidebar__link--active' : ''}`}>
            <Box size={16} />
            <span>Items</span>
          </a>
          <a href="/inventory" className={`sidebar__link ${isActive('Inventory') ? 'sidebar__link--active' : ''}`}>
            <PackageSearch size={16} />
            <span>Inventory</span>
          </a>
          <a href="/orders" className={`sidebar__link ${isActive('Orders') ? 'sidebar__link--active' : ''}`}>
            <ShoppingCart size={16} />
            <span>Orders</span>
          </a>
        </div>

        <div className="sidebar__section">
          <p className="sidebar__label">Admin</p>
          <a href="/users" className={`sidebar__link ${isActive('Users') ? 'sidebar__link--active' : ''}`}>
            <Users size={16} />
            <span>Users</span>
          </a>
          <a href="abc-analysis" className={`sidebar__link ${isActive('ABC Analysis') ? 'sidebar__link--active' : ''}`}>
            <Activity size={16} />
            <span>ABC Analysis</span>
          </a>
          <a href="/supplier" className={`sidebar__link ${isActive('Suppliers') ? 'sidebar__link--active' : ''}`}>
            <Building size={16} />
            <span>Suppliers</span>
          </a>
          <a href="/categories" className={`sidebar__link ${isActive('Categories') ? 'sidebar__link--active' : ''}`}>
            <LayoutGrid size={16} />
            <span>Categories</span>
          </a>
          <a href="/departments" className={`sidebar__link ${isActive('Departments') ? 'sidebar__link--active' : ''}`}>
            <Share2 size={16} />
            <span>Departments</span>
          </a>
          <a href="/lcoations" className={`sidebar__link ${isActive('Locations') ? 'sidebar__link--active' : ''}`}>
            <MapPin size={16} />
            <span>Locations</span>
          </a>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
