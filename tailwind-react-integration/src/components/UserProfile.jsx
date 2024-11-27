import React from 'react';

const UserProfile = () => {
  return (
    <div className="bg-white shadow-lg rounded-lg mx-auto p-4 sm:p-4 md:p-8 max-w-xs sm:max-w-sm md:max-w-md">
      {/* Profile Image */}
      <div className="flex justify-center mb-4">
        <img
          src="https://via.placeholder.com/150"
          alt="Profile"
          className="rounded-full w-24 h-24 sm:w-36 sm:h-36 object-cover"
        />
      </div>
      
      {/* User Info */}
      <h1 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-800 text-center mb-2">
        John Doe
      </h1>
      <p className="text-sm sm:text-base text-gray-600 text-center">
        A passionate web developer with a love for creating responsive and dynamic applications.
      </p>
    </div>
  );
};

export default UserProfile;
