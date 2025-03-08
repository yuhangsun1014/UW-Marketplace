import React from 'react';
import './CategoryContainer.css';

function CategoryContainer(props) {
    return (
      <div className='category-container' style={{backgroundImage:`url(${props.image})`}}>
        <div className='category-text'>
            <h2 className='category-name'>{props.category}</h2>
            <p className='category-description'>{props.description}</p>
        </div>
      </div>
    );
  }
  
  export default CategoryContainer;