import React, { useState } from 'react';
import MiddleSection from '../components/MiddleSection';
import BoxContainer from '../components/BoxContainer';
import CategoryContainer from '../components/CategoryContainer';
import libImage from '../Assets/books.jpg'

function Books() {
    return (
        <div>
            <div className="app-container">
                <MiddleSection>
                    <CategoryContainer 
                        image={libImage}
                        category='Books' 
                        description='Textbooks, study guides, and leisure reading'
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

export default Books;