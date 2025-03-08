import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import MiddleSection from '../components/MiddleSection';
import ContactSeller from '../components/ContactSeller';

function ContactSellerPage() {
  return (
    <div>
      <div className="app-container">
        <MiddleSection>
          <ContactSeller />
        </MiddleSection>
      </div>
    </div>
  );
}

export default ContactSellerPage;