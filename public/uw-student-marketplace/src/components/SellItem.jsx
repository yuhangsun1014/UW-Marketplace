// src/components/SellItem.jsx

import React, { useState, useRef } from 'react';
import './SellItem.css';
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { db, storage } from "../Firebase-config"
import { collection, serverTimestamp, addDoc } from "firebase/firestore";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";

function SellItem() {
  // product info
  const [selectedFile, setSelectedFile] = useState(null);
  const [selectedCondition, setSelectedCondition] = useState(null);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState({ day: '', month: '', year: '' });
  const [condition, setCondition] = useState("");
  const [price, setPrice] = useState("");
  const [location, setLocation] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
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



  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!selectedFile) {
      alert("Please upload a product image");
      return;
    }

    const storageRef = ref(storage, `products/${Date.now()}-${selectedFile.name}`);

    try {
      // Upload image to Firebase Storage
      const uploadTask = uploadBytesResumable(storageRef, selectedFile);

      uploadTask.on(
        "state_changed",
        (snapshot) => {
        },
        (error) => {
          console.error("Upload error:", error);
          alert("Error uploading image");
        },
        async () => {
          // Get the download URL
          const downloadURL = await getDownloadURL(uploadTask.snapshot.ref);

          // store all product details
          await addDoc(collection(db, "products"), {
            title,
            description,
            dateOfPurchase: `${date.month}/${date.day}/${date.year}`,
            condition: selectedCondition,
            price: Number(price),
            location,
            isSold: false,
            imageUrl: downloadURL,
            createdAt: serverTimestamp(),
          });

          alert("Listed product successfully!");

          // clear all form details after submission
          setTitle('');
          setDescription('');
          setDate({ day: '', month: '', year: '' });
          setPrice('');
          setLocation('');
          setSelectedFile(null);
          setSelectedCondition(null);
        } /*catch (error) {
      console.log(error);
      alert("Error uploading product");*/
      );
    } catch (error) {
      console.error(error);
      alert("Error uploading product");
    }

  };

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
          <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} id="title" placeholder="What are you selling?" />
        </div>
        <div className="form-group">
          <label htmlFor="description">Description</label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
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
                className={`condition-button ${selectedCondition === condition.label ? 'selected' : ''
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
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            type="text"
            id="price"
            placeholder="Set a price for your product/service"
          />
        </div>
        <div className="form-group">
          <label htmlFor="location">Location</label>
          <input
            value={location}
            onChange={(e) => setLocation(e.target.value)}
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

      <button type="submit" onClick={handleSubmit} className="submit-button">
        SUBMIT
      </button>
    </div>
  );
}

export default SellItem;