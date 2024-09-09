import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom'; 
import ImageMobile from '../assets/img/Ztellalogo.png';
import ImageDesktop from '../assets/img/favicon.png';
import { GoogleIcon, FacebookIcon } from '../icons';
import { Label, Input, Button } from '@windmill/react-ui';
import Modal from 'react-modal';  // Import Modal

// Custom modal styles 
const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    padding: '20px',
    backgroundColor: '#fff',
    borderRadius: '10px',
    boxShadow: '0px 4px 15px rgba(0,0,0,0.2)',
  },
};

function Login() {
  const [isHoveredForgotPassword, setIsHoveredForgotPassword] = useState(false);
  const [isHoveredCreateAccount, setIsHoveredCreateAccount] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isMobileView, setIsMobileView] = useState(false); // Mobile view state
  const [showModal, setShowModal] = useState(false); // Modal state

  const history = useHistory();

  // Detect if it's a mobile view
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        setIsMobileView(true);
        setShowModal(true);  // Show modal when in mobile view
      } else {
        setIsMobileView(false);
        setShowModal(false);
      }
    };

    // Check on load
    handleResize();

    // Listen to window resize
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const closeModal = () => {
    setShowModal(false);
  };

  const handleLogin = () => {
    if (!email || !password) {
      setError('Please fill in all fields.');
    } else {
      setError('');
      history.push('/app');
    }
  };

  return (
    <div className="flex items-center min-h-screen p-6 bg-gray-50 dark:bg-gray-900">
      <div className="flex-1 h-full max-w-4xl mx-auto overflow-hidden bg-white rounded-lg shadow-xl dark:bg-gray-800">
        <div className="flex flex-col overflow-y-auto md:flex-row">
          <div className="h-32 md:h-auto md:w-1/2">
            <img
              aria-hidden="true"
              className="object-cover w-full h-full md:hidden"
              src={ImageMobile}
              alt="Mobile logo"
            />
            <img
              aria-hidden="true"
              className="hidden object-cover w-full h-full md:block"
              src={ImageDesktop}
              alt="Desktop logo"
            />
          </div>
          <main className="flex items-center justify-center p-6 sm:p-12 md:w-1/2">
            <div className="w-full">
              <h1 className="mb-4 text-xl font-semibold text-gray-700 dark:text-gray-200">Login</h1>
              {error && <p className="mb-4 text-red-500">{error}</p>}
              <Label>
                <span>Email</span>
                <Input
                  className="mt-1"
                  type="email"
                  placeholder="nemo@zteller.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </Label>

              <Label className="mt-4">
                <span>Password</span>
                <Input
                  className="mt-1"
                  type="password"
                  placeholder="*"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </Label>

              <Button
                className="mt-4"
                style={{
                  backgroundColor: '#41aa5e',
                  transition: 'background-color 0.3s ease',
                }}
                onMouseEnter={(e) => e.target.style.backgroundColor = '#16a34a'}
                onMouseLeave={(e) => e.target.style.backgroundColor = '#41aa5e'}
                onClick={handleLogin}
                block
              >
                Log in
              </Button>

              <hr className="my-8" />

              <Button block layout="outline">
                <GoogleIcon className="w-4 h-4 mr-2" aria-hidden="true" />
                Google
              </Button>
              <Button className="mt-4" block layout="outline">
                <FacebookIcon className="w-4 h-4 mr-2" aria-hidden="true" />
                Facebook
              </Button>

              <p className="mt-4">
                <Link
                  to="/forgot-password"
                  className="text-sm font-medium hover:underline"
                  style={{
                    color: isHoveredForgotPassword ? '#16a34a' : '#16a34a',
                    textDecoration: isHoveredForgotPassword ? 'underline' : 'none',
                  }}
                  onMouseEnter={() => setIsHoveredForgotPassword(true)}
                  onMouseLeave={() => setIsHoveredForgotPassword(false)}
                >
                  Forgot your password?
                </Link>
              </p>
              <p className="mt-1">
                <Link
                  to="/create-account"
                  className="text-sm font-medium hover:underline"
                  style={{
                    color: isHoveredCreateAccount ? '#16a34a' : '#16a34a',
                    textDecoration: isHoveredCreateAccount ? 'underline' : 'none',
                  }}
                  onMouseEnter={() => setIsHoveredCreateAccount(true)}
                  onMouseLeave={() => setIsHoveredCreateAccount(false)}
                >
                  Create account
                </Link>
              </p>
            </div>
          </main>
        </div>
      </div>

      {/* Modal for mobile view */}
      {showModal && (
        <Modal
          isOpen={showModal}
          onRequestClose={closeModal}
          style={customStyles}
          contentLabel="Switch to Desktop Mode"
        >
          <h2 style={{
                 fontWeight:'bold',
                }}>Please Switch to Desktop Mode</h2>
          <p>This page is best viewed in desktop mode. Please switch your browser to desktop mode for a better experience.</p>
          <Button style={{
                  backgroundColor: '#41aa5e',
                  transition: 'background-color 0.3s ease',
                }}
                onClick={closeModal}>Close</Button>
        </Modal>
      )}
    </div>
  );
}

export default Login;