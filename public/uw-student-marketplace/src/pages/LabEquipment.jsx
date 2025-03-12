import React, { useState } from 'react';
import MiddleSection from '../components/MiddleSection';
import BoxContainer from '../components/BoxContainer';
import CategoryContainer from '../components/CategoryContainer';
import labEquipmentImage from '../Assets/labEq.avif'

function LabEquipment() {
    return (
        <div>
            <div className="app-container">
                <MiddleSection>
                    <CategoryContainer 
                        image={labEquipmentImage}
                        category='LabEquipment' 
                        description='Scientific and laboratory equiment for your research'
                    />
                    <div className='grid-container'>
                        <BoxContainer />
                    </div>

                </MiddleSection>
            </div>
        </div>
    );
}
export default LabEquipment;
