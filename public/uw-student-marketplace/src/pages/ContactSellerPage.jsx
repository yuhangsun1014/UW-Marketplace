import React from 'react';
import MiddleSection from '../components/MiddleSection';
import ContactSeller from '../components/ContactSeller';

/* Removed the header and footer, since they are duplicated with App -Cora */
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