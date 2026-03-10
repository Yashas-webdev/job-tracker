import { useAuth } from '../context/AuthContext';
import { useState, useRef, useEffect } from 'react';
import ConfirmModal from '../common/confirmModal'
import './Header.css';

export default function Header() {
  const { user, logout } = useAuth();
  const [showDropdown, setShowDropdown] = useState(false);
  const [showLogoutModal, setShowLogoutModal] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowDropdown(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleLogout = () => {
    setShowDropdown(false);
    setShowLogoutModal(true);
  };

  const getInitials = (name) => {
    return name
      .split(' ')
      .map(word => word[0])
      .join('')
      .toUpperCase()
      .slice(0, 2);
  };

  

  return (
    <header>
      <div className="header-content">
        <div className="header-left">
          <div className="header-logo">
            <span className="logo-icon">🎯</span>
            <h1>Job Tracker</h1>
          </div>
          <p className="subtitle">Manage your job applications with ease</p>
        </div>

        <div className="header-right">
          <div className="user-menu" ref={dropdownRef}>
            <button 
              className="user-button"
              onClick={() => setShowDropdown(!showDropdown)}
              aria-label="User menu"
            >
              <div className="user-avatar">
                {user.profilePicture ? (
                  <img src={user.profilePicture} alt={user.name} />
                ) : (
                  <span className="user-initials">{getInitials(user.name)}</span>
                )}
              </div>
            </button>

            {showDropdown && (
              <div className="dropdown-menu">
                <div className="dropdown-header">
                  <p className="dropdown-name">{user.name}</p>
                  <p className="dropdown-email">{user.email}</p>
                </div>

                <div className="dropdown-divider"></div>

                <button className="dropdown-item" onClick={() => alert('Profile page coming soon!')}>
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" />
                  </svg>
                  <span>Profile</span>
                </button>

                <button className="dropdown-item" onClick={() => alert('Settings page coming soon!')}>
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M5 4a1 1 0 00-2 0v7.268a2 2 0 000 3.464V16a1 1 0 102 0v-1.268a2 2 0 000-3.464V4zM11 4a1 1 0 10-2 0v1.268a2 2 0 000 3.464V16a1 1 0 102 0V8.732a2 2 0 000-3.464V4zM16 3a1 1 0 011 1v7.268a2 2 0 010 3.464V16a1 1 0 11-2 0v-1.268a2 2 0 010-3.464V4a1 1 0 011-1z" />
                  </svg>
                  <span>Settings</span>
                </button>

                <div className="dropdown-divider"></div>

                <button className="dropdown-item logout" onClick={handleLogout}>
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M3 3a1 1 0 00-1 1v12a1 1 0 102 0V4a1 1 0 00-1-1zm10.293 9.293a1 1 0 001.414 1.414l3-3a1 1 0 000-1.414l-3-3a1 1 0 10-1.414 1.414L14.586 9H7a1 1 0 100 2h7.586l-1.293 1.293z" clipRule="evenodd" />
                  </svg>
                  <span>Logout</span>
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      <ConfirmModal
       isOpen = {showLogoutModal}
       onClose={()=>setShowLogoutModal(false)}
       onConfirm={confirmLogout}
       title = 'Logout'
       message = 'Are you sure you want to logout? Your data is saved and will be here when you return.'
       confirmText = 'Logout'
       cancelText = 'Stay'
       type = 'warning'
      />
    </header>
  );
}