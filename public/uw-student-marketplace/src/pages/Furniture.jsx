import React, { useState } from 'react';
import MiddleSection from '../components/MiddleSection';
import BoxContainer from '../components/BoxContainer';
import CategoryContainer from '../components/CategoryContainer';
import furnitureImage from '../Assets/Furniture.jpg';

function Furniture() {
    return (
        <div>
            <div className="app-container">
                <MiddleSection>
                    <CategoryContainer 
                        image={furnitureImage}
                        category='Furniture' 
                        description='Quality furniture for our dorm or apartment'
                    />
                    <div className='grid-container'>
                        <BoxContainer />
                    </div>

                </MiddleSection>
            </div>
        </div>
    );
}

export default Furniture;