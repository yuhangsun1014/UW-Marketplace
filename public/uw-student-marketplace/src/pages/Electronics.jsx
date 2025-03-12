import React, { useState } from 'react';
import MiddleSection from '../components/MiddleSection';
import BoxContainer from '../components/BoxContainer';
import CategoryContainer from '../components/CategoryContainer';
import electronicsImage from '../Assets/Electronic.webp';

function Electronics() {
    return (
        <div>
            <div className="app-container">
                <MiddleSection>
                    <CategoryContainer 
                        image={electronicsImage}
                        category='Electronics' 
                        description='Find the latest gadgets and tech accessories'
                    />
                    <div className='grid-container'>
                        <BoxContainer />
                    </div>

                </MiddleSection>
            </div>
        </div>
    );
}

export default Electronics;