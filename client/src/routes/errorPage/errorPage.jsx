import React from 'react';
import './errorPage.scss';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
  return (
    <div className="NotFound-container">
      <h2>404 - Page Not Found</h2>
      <img src="/Error-3.png" alt="Illustration of a page not found" />
      <p>Oops! The page you’re looking for doesn’t exist or has been moved.</p>
      <Link to="/" className="back-home-link">Go Back</Link>
    </div>
  );
};

export default ErrorPage;