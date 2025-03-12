import React, { useState } from 'react';
import MiddleSection from '../components/MiddleSection';
import BoxContainer from '../components/BoxContainer';
import CategoryContainer from '../components/CategoryContainer';
import stationeryImage from '../Assets/stationery.webp'

function Stationery() {
    return (
        <div>
            <div className="app-container">
                <MiddleSection>
                    <CategoryContainer 
                        image={stationeryImage}
                        category='Stationery' 
                        description='Notebooks, pens, and all your writing essentials'
                    />
                    <div className='grid-container'>
                        <BoxContainer />
                    </div>

                </MiddleSection>
            </div>
        </div>
    );
}

export default Stationery;