import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import ImageMobile from '../assets/img/Ztellalogo.png';
import ImageDesktop from '../assets/img/favicon.png';
import { Label, Input, Button } from '@windmill/react-ui';

function ForgotPassword() {
  const [isPopupVisible, setIsPopupVisible] = useState(false);

  const handlePasswordRecovery = () => {
    // Show the popup
    setIsPopupVisible(true);

    // // Optionally, you can hide the popup after a few seconds or on some other condition
    // setTimeout(() => setIsPopupVisible(false), 3000); // Hide after 3 seconds
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
              alt="Office"
            />
            <img
              aria-hidden="true"
              className="object-cover w-full h-full hidden md:block"
              src={ImageDesktop}
              alt="Office"
            />
          </div>
          <main className="flex items-center justify-center p-6 sm:p-12 md:w-1/2">
            <div className="w-full">
              <h1 className="mb-4 text-xl font-semibold text-gray-700 dark:text-gray-200">
                Forgot password
              </h1>

              <Label>
                <span>Email</span>
                <Input className="mt-1" placeholder="Jane Doe" />
              </Label>

              <Button
                type="button"
                block
                className="mt-4"
                style={{
                  backgroundColor: '#41aa5e', // Custom green color
                  transition: 'background-color 0.3s ease',
                }}
                onMouseEnter={(e) => e.target.style.backgroundColor = '#16a34a'} // Darker green on hover
                onMouseLeave={(e) => e.target.style.backgroundColor = '#41aa5e'} // Original green
                onClick={handlePasswordRecovery} // Handle button click
              >
                Recover password
              </Button>
            </div>
          </main>
        </div>
      </div>

      {/* Popup */}
      {isPopupVisible && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          
          <div className="bg-white p-4 rounded shadow-lg dark:bg-gray-800">
            <p className="text-gray-700 dark:text-gray-200">A password reset link has been sent to your email.</p>
            <Link 
            to="/login">
            <button  style={{
                  backgroundColor: '#41aa5e', // Custom green color
                  transition: 'background-color 0.3s ease',
                  color:'white',
                  padding:'10px',
                  borderRadius:'5px',
                  fontSize:'small',
                }}
                >Go to Login</button></Link>
          </div>
        </div>
      )}
    </div>
  );
}

export default ForgotPassword;
