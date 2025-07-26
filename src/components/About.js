import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import userImage from '../image/user.jpg'; // Adjust path as needed
import 'bootstrap/dist/js/bootstrap.bundle.min';

export default function About({ mode }) {
  const cardStyle = {
    backgroundColor: mode === 'dark' ? '#343a40' : '#f8f9fa',
    color: mode === 'dark' ? 'white' : '#212529',
    border: 'none',
    boxShadow: '0 4px 8px rgba(0,0,0,0.1)'
  };

  return (
    <div className={`container py-4 text-${mode === 'dark' ? 'light' : 'dark'}`}>
      <h1 className="text-center mb-4">About TextUtils</h1>
      
      <div className="card mb-4" style={cardStyle}>
        <div className="card-body">
          <h2 className="card-title">Welcome to TextUtils</h2>
          <p className="card-text">
            TextUtils is a powerful text manipulation tool designed to help you transform and analyze your text with ease.
          </p>
        </div>
      </div>

      <div className="card mb-4" style={cardStyle}>
        <div className="card-body">
          <h2 className="card-title">Features</h2>
          <ul className="list-group list-group-flush">
            <li className="list-group-item" style={cardStyle}>Text case conversion</li>
            <li className="list-group-item" style={cardStyle}>Word and character counting</li>
            <li className="list-group-item" style={cardStyle}>Document export</li>
          </ul>
        </div>
      </div>

      <div className="card" style={cardStyle}>
        <div className="card-body">
          <h2 className="card-title">About the Developer</h2>
          <div className="d-flex align-items-center mb-3">
            <div className="me-3">
              <img 
                src={userImage} 
                alt="Developer" 
                className="developer-image"
                style={{
                  width: '100px',
                  height: '100px',
                  borderRadius: '50%',
                  objectFit: 'cover',
                  border: `3px solid ${mode === 'dark' ? '#ffc107' : '#0d6efd'}`
                }}
              />
            </div>
            <div>
              <h5>Vivek Yadav</h5>
              <p className="mb-1">Full Stack Web Developer</p>
              <div className="text-muted">
                <FaEnvelope className="me-2" />
                mr.vivekyadav2004@gmail.com
              </div>
            </div>
          </div>
          <p>
            This application was built using React.js with Bootstrap 5.
          </p>
          <div className="d-flex gap-2">
            <a href="https://github.com/yourprofile" className="btn btn-outline-primary">
              <FaGithub className="me-1" /> GitHub
            </a>
            <a href="https://www.linkedin.com/in/vivek-yadav-69013136a/" className="btn btn-outline-primary">
              <FaLinkedin className="me-1" /> LinkedIn
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}