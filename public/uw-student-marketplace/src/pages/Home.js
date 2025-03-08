import React from 'react';
import MiddleSection from '../components/MiddleSection';
import BoxContainer from '../components/BoxContainer';

function Home() {
  return (
    <div>
      <div className="app-container">
        <MiddleSection>
            <div className='grid-container'>
                <BoxContainer />
                <BoxContainer />
                <BoxContainer />
                <BoxContainer />
                <BoxContainer />
                <BoxContainer />
            </div>
        </MiddleSection>
      </div>
    </div>
  );
}

export default Home;