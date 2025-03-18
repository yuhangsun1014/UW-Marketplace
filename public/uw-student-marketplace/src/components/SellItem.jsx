/*
 * File: SellItem.jsx
 * Description: This component renders a form that allows users to sell an item. The form includes fields for
 *             the product title, description, category, date of purchase, condition, price, location, and an image.
 *             The user can submit the form to list the product for sale.
 *                                                                                           
 * States:
 * - selectedFile (File): The selected image file to upload.
 * - selectedCondition (string): The selected condition of the product.
 * - title (string): The title of the product.
 * - description (string): The description of the product.
 * - date (object): The date of purchase of the product.
 * - price (string): The price of the product.
 * - location (string): The location of the product.
 * - name (string): The name of the seller.
 * - email (string): The email of the seller.
 * - selectedCategory (string): The selected category of the product.
 * - categories (array): An array of product categories.
 * - fileInputRef (object): A reference to the file input element.
 * - navigate (function): A function that allows the user to navigate to a different page.
 * - titleError (string): The error message for the title field.
 * - descriptionError (string): The error message for the description field.
 * - priceError (string): The error message for the price field.
 * - locationError (string): The error message for the location field.
 * - conditionError (string): The error message for the condition field.
 * - categoryError (string): The error message for the category field.
 *         
 * Methods: 
 * - handleButtonClick(): Handles the click event on the upload button and triggers the file input.
 * - handleFileChange(event): Handles the file change event and sets the selected file.
 * - handleConditionClick(condition): Handles the click event on the condition button and sets the selected condition.
 *  - handleSubmit(event): Handles the form submission event and validates the form fields before listing the product.
 * - SellItem(): This function returns the sell item component.
 * - useEffect(): A hook that runs after the component output has been rendered to the DOM.
 * - useState(): A hook that allows you to have state variables in functional components.
 * - useRef(): A hook that returns a mutable ref object whose .current property is initialized to the passed argument.
 * - getAuth(): Gets the Auth service for the default app or a given app.
 * - onAuthStateChanged(): Listens for changes to the user's sign-in state.
 * - collection(): Returns a CollectionReference instance that can be used to add documents to the collection.
 * - serverTimestamp(): Returns a sentinel used with set() or update() to include a server-generated timestamp in the written data.
 * - addDoc(): Adds a new document to the specified collection with the provided data.
 * - doc(): Returns a DocumentReference with the provided path.
 * - getDoc(): Reads the document referenced by the provided DocumentReference.
 * - ref(): Returns a Reference to the object at the provided path.
 * - uploadBytesResumable(): Uploads a blob to the Cloud Storage bucket referenced by the provided Reference.
 * - getDownloadURL(): Asynchronously retrieves a long-lived download URL with a revocable token.
 * - useNavigate(): A hook that returns the navigate function.
     
 * @author Rinkal Faldu
 * @version 1.0
 * @since 2025-02-25
 */

import React, { useState, useRef, useEffect } from 'react';
import './SellItem.css';
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { db, storage } from "../Firebase-config"
import { collection, serverTimestamp, addDoc, doc, getDoc } from "firebase/firestore";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { useNavigate } from 'react-router-dom';

function SellItem() {
  // product info
  const [selectedFile, setSelectedFile] = useState(null);
  const [selectedCondition, setSelectedCondition] = useState(null);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState({ day: '', month: '', year: '' });
  const [price, setPrice] = useState("");
  const [location, setLocation] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const categories = ["Books", "Furniture", "Electronics", "Stationery", "Bags", "Lab Equipment"];
  const fileInputRef = useRef(null);
  const navigate = useNavigate();

  // error handling
  const [titleError, setTitleError] = useState("");
  const [descriptionError, setDescriptionError] = useState("");
  const [priceError, setPriceError] = useState("");
  const [locationError, setLocationError] = useState("");
  const [conditionError, setConditionError] = useState("");
  const [categoryError, setCategoryError] = useState("");

  const handleButtonClick = () => {
    fileInputRef.current.click();
  };

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleConditionClick = (condition) => {
    setSelectedCondition(condition);
    setConditionError("");
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
      description: 'Heavily used. Functional with multiple flaws/defects',
    },
    {
      label: 'Poor',
      description: 'Major flaws. Maybe with some functional issues',
    },
  ];

  // get user authentication, name, email
  useEffect(() => {
    const auth = getAuth();
    const userSignInState = onAuthStateChanged(auth, async (user) => {
      if (user) {
        const docRef = doc(db, 'users', user.uid)
        const userDoc = await getDoc(docRef);
        if (userDoc.exists()) {
          const data = userDoc.data();
          setName(data.name || user.email);
          setEmail(user.email);
        } else {
          setName('Guest');
        }
      }
    });
    return userSignInState;
  }, []);


  const handleSubmit = async (event) => {

    event.preventDefault();

    // form validation
    if (!selectedFile) {
      alert("Please upload a product image");
      return;
    }

    // Clear previous errors
    setTitleError("");
    setDescriptionError("");
    setPriceError("");
    setLocationError("");
    setConditionError("");
    setCategoryError("");

    let hasError = false;

    // Validate Title
    if (!title.trim()) {
      setTitleError("Title is required");
      hasError = true;
    }

    // Validate Description
    if (!description.trim()) {
      setDescriptionError("Description is required");
      hasError = true;
    }

    // Validate Price
    if (!price.trim() || !/^\d+(\.\d{1,2})?$/.test(price) || parseFloat(price) <= 0) {
      setPriceError("Enter a valid price (positive number, up to two decimals)");
      hasError = true;
    }

    // Validate Location
    if (!location.trim()) {
      setLocationError("Location is required");
      hasError = true;
    }

    // Validate condition 
    if (!selectedCondition) {
      setConditionError("Please select a condition for the product.");
      hasError = true;
    }

    // validate category
    if (!selectedCategory) {
      setCategoryError("Please select a category for the product.");
      hasError = true;
    }

    // stop form submission if there are errors
    if (hasError) {
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
            category: selectedCategory,
            dateOfPurchase: `${date.month}/${date.day}/${date.year}`,
            condition: selectedCondition,
            price: Number(price),
            location,
            isSold: false,
            imageUrl: downloadURL,
            createdAt: serverTimestamp(),
            sellerName: name,
            sellerEmail: email,
          });
          navigate('./ItemPostedPage');
          // alert("Listed product successfully!");

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
          <label htmlFor="title">Title <span className="error-required">*</span></label>
          <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} id="title" placeholder="What are you selling?" />
          {titleError && <span className="error-required">{titleError}</span>}
        </div>
        <div className="form-group">
          <label htmlFor="description">Description <span className="error-required">*</span></label>
          <textarea
            value={description}
            onChange={(e) => {
              setDescription(e.target.value);
              setDescriptionError("");
            }}
            id="description"
            placeholder="Describe your product"
          ></textarea>
          {descriptionError && <span className="error-required">{descriptionError}</span>}
        </div>
        <div className="form-group">
          <label htmlFor="category">Category <span className="error-required">*</span></label>
          <select
            id="category"
            value={selectedCategory}
            onChange={(e) => {
              setSelectedCategory(e.target.value)
              setCategoryError("");
            }}>
            <option value="">Select a category</option>
            {categories.map((category, index) => (
              <option key={index} value={category}>
                {category}
              </option>
            ))}
          </select>
          <p>{categoryError && <span className="error-required">{categoryError}</span>}</p>
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
          <label>Condition <span className="error-required">*</span></label>
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
          {conditionError && <span className="error-required">{conditionError}</span>}
        </div>
        <div className="form-group">
          <label htmlFor="price">Price <span className="error-required">*</span></label>
          <input
            value={price}
            onChange={(e) => {
              setPrice(e.target.value);
              setPriceError("");
            }}
            type="text"
            id="price"
            placeholder="Set a price for your product"
          />
          {priceError && <span className="error-required">{priceError}</span>}
        </div>
        <div className="form-group">
          <label htmlFor="location">Location <span className="error-required">*</span></label>
          <input
            value={location}
            onChange={(e) => {
              setLocation(e.target.value);
              setLocationError("");
            }}
            type="text"
            id="location"
            placeholder="Enter the location or neighborhood"
          />
          {locationError && <span className="error-required">{locationError}</span>}
        </div>
      </div>

      <div className="confirm-details-section">
        <h2>Confirm your details</h2>
        <div className="form-group">
          <label htmlFor="name">Name </label>
          <div className="detail-row">
            <span>{name}</span>
            <button>Edit</button>
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="email">Email Address</label>
          <div className="detail-row">
            <span>{email}</span>
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