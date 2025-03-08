// src/components/SellItem.jsx

import React, { useState } from 'react';
import './SellItem.css';

function SellItem() {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleDrop = (event) => {
    event.preventDefault();
    const file = event.dataTransfer.files[0];
    setSelectedFile(file);
  };

  const handleDragOver = (event) => {
    event.preventDefault();
  };

  return (
    <div className="sell-item-form">
      <div className="photos-section">
        <h2>Photos</h2>
        <div
          className="upload-box"
          onDrop={handleDrop}
          onDragOver={handleDragOver}
        >
          {selectedFile ? (
            <img
              src={URL.createObjectURL(selectedFile)}
              alt="Uploaded Preview"
              className="preview-image"
            />
          ) : (
            <>
              <input
                type="file"
                id="photo-upload"
                accept="image/*"
                onChange={handleFileChange}
              />
              <label htmlFor="photo-upload" className="upload-button">
                Upload Photos
              </label>
              <p>or drag and drop up to 10 photos</p>
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
            <button>Excellent</button>
            <button>Very Good</button>
            <button>Good</button>
            <button>Fair</button>
            <button>Poor</button>
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
        SUBMIT 13
      </button>
    </div>
  );
}

export default SellItem;