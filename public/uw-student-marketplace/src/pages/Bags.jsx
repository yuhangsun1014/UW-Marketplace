import React, { useState } from 'react';
import MiddleSection from '../components/MiddleSection';
import BoxContainer from '../components/BoxContainer';
import CategoryContainer from '../components/CategoryContainer';
import bagpackImage from '../Assets/bagpack.jpeg';

function Bags() {
    return (
        <div>
            <div className="app-container">
                <MiddleSection>
                    <CategoryContainer 
                        image={bagpackImage}
                        category='Bags' 
                        description='Bagpacks, laptop bags, and carrying essentials'
                    />
                    <div className='grid-container'>
                        <BoxContainer />
                        <BoxContainer />
                        <BoxContainer />
                    </div>

                </MiddleSection>
            </div>
        </div>
    );
}

export default Bags;