// src/components/SellItem.jsx

import React, { useState, useRef } from 'react';
import './SellItem.css';

function SellItem() {
  const [selectedFile, setSelectedFile] = useState(null);
  const [selectedCondition, setSelectedCondition] = useState(null);
  const fileInputRef = useRef(null);

  const handleButtonClick = () => {
    fileInputRef.current.click();
  };

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleConditionClick = (condition) => {
    setSelectedCondition(condition);
  };

  const conditionButtons = [
    {
      label: 'Excellent',
      description: 'Unopened Packaging, unused, as good as new',
    },
    {
      label: 'Very Good',
      description: 'Packaging opened, without tags but lightly used',
    },
    {
      label: 'Good',
      description: 'Gently used. One/Few minor flaws. Fully functional.',
    },
    {
      label: 'Fair',
      description: 'Heavily user. Functional with multiple flaws/defects',
    },
    {
      label: 'Poor',
      description: 'Major flaws. Maybe with some functional issues',
    },
  ];

  return (
    <div className="sell-item-form">
      <div className="photos-section">
        <h2>Photo</h2>
        <div className="upload-box">
          {selectedFile ? (
            <img
              src={URL.createObjectURL(selectedFile)}
              alt="Uploaded Preview"
              className="preview-image"
            />
          ) : (
            <>
              <button className="upload-button" onClick={handleButtonClick}>
                Upload Picture
              </button>
              <input
                type="file"
                ref={fileInputRef}
                id="photo-upload"
                accept="image/*"
                onChange={handleFileChange}
                style={{ display: 'none' }}
              />
              <p className="upload-text">or drag and drop picture</p>
            </>
          )}
        </div>
      </div>

      <div className="product-info-section">
        <h2>Product Info</h2>
        <div className="form-group">
          <label htmlFor="title">Title</label>
          <input type="text" id="title" placeholder="What are you selling?" />
        </div>
        <div className="form-group">
          <label htmlFor="description">Description</label>
          <textarea
            id="description"
            placeholder="Describe your product/service"
          ></textarea>
        </div>
        <div className="form-group">
          <label htmlFor="date">Date of Purchase</label>
          <div className="date-inputs">
            <input type="text" placeholder="dd" maxLength="2" />
            <input type="text" placeholder="mm" maxLength="2" />
            <input type="text" placeholder="yyyy" maxLength="4" />
          </div>
        </div>
        <div className="form-group">
          <label>Condition</label>
          <div className="condition-buttons">
            {conditionButtons.map((condition, index) => (
              <button
                key={index}
                className={`condition-button ${
                  selectedCondition === condition.label ? 'selected' : ''
                }`}
                onClick={() => handleConditionClick(condition.label)}
              >
                <span>{condition.label}</span>
                <p>{condition.description}</p>
              </button>
            ))}
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="price">Set a price</label>
          <input
            type="text"
            id="price"
            placeholder="Set a price for your product/service"
          />
        </div>
        <div className="form-group">
          <label htmlFor="location">Location</label>
          <input
            type="text"
            id="location"
            placeholder="Enter a locality in the city selected"
          />
        </div>
      </div>

      <div className="confirm-details-section">
        <h2>Confirm your details</h2>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <div className="detail-row">
            <span>John McCarthy</span>
            <button>Edit</button>
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="email">Email Address</label>
          <div className="detail-row">
            <span>xxxx@uw.edu</span>
            <button>Edit</button>
          </div>
        </div>
      </div>

      <button type="submit" className="submit-button">
        SUBMIT
      </button>
    </div>
  );
}

export default SellItem;