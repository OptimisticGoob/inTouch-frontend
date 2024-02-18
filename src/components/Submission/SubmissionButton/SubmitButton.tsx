import React from 'react';
import './SubmitButton.css'
import { useNavigate } from 'react-router-dom';

const SubmitButton: React.FC = () => {

  const navigate = useNavigate();
  
  const handleButtonClick = () => {
    navigate('/submit')
  };

  return (
    <div className ="submit-container">
    <button className="submit-button" onClick={handleButtonClick}>
     +
    </button>
    </div>
  );
};

export default SubmitButton;