import React, { useEffect } from 'react';
import { useParams } from '@tanstack/react-router';

const RedirectPage = () => {
  const { shortCode } = useParams();

  useEffect(() => {
    // Redirect to backend URL for actual redirection
    const backendUrl = import.meta.env.VITE_API_BASE_URL || 'http://localhost:3000';
    window.location.href = `${backendUrl}/${shortCode}`;
  }, [shortCode]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="text-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500 mx-auto"></div>
        <p className="mt-4 text-gray-600">Redirecting...</p>
      </div>
    </div>
  );
};

export default RedirectPage;
