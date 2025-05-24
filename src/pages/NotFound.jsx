import React from 'react';

const NotFound = () => {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-gray-100 text-center">
      <h1 className="text-6xl font-bold text-red-500">404</h1>
      <p className="mt-4 text-lg text-gray-600">Oops! The page you are looking for does not exist.</p>
      <a href="/" className="mt-6 text-xl text-blue-500 hover:underline">Go back to Home</a>
    </div>
  );
};

export default NotFound;
