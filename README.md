# Introduction 
Welcome to UW Marketplace, a dynamic digital platform designed to connect the University of Washington community with local businesses and services. Our mission is to foster a thriving ecosystem where students, faculty, and local vendors can easily interact, trade goods, and share services in a secure and user-friendly environment.

UW Marketplace streamlines the process of buying, selling, and promoting local offerings. Whether you're a student searching for affordable textbooks, a local artist showcasing unique creations, or a business looking to engage with a vibrant community, our platform is built with your needs in mind. Through intuitive design and modern technology, we aim to provide a seamless experience that supports local commerce and enriches community connections.

Join us as we transform how the UW community engages with local resources, making every transaction not just a purchase, but a step towards a more connected and prosperous community.
- **User Authentication**: Secure login and registration using Firebase Authentication.
- **Product Listings**: Browse, search, and filter products by categories such as Books, Furniture, Electronics, and more.
- **Sell Items**: Post items for sale with images, descriptions, and pricing.
- **User Profiles**: Manage your profile, including updating profile pictures and viewing account details.
- **Responsive Design**: Optimized for both desktop and mobile devices.
- **Contact Sellers**: Easily contact sellers for inquiries about products.

---
## Getting Started

Follow these steps to set up the project on your local machine.

### Prerequisites

Ensure you have the following installed on your system:

1. **Node.js** (v16 or later) - [Download Node.js](https://nodejs.org/)
2. **npm** (comes with Node.js) or **yarn** (optional) - [Install Yarn](https://yarnpkg.com/)
3. **Firebase Account** - Set up a Firebase project for authentication and Firestore database.

---

## Steps to Build Project

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/yuhangsun1014/UW-Marketplace.git
   cd UW-Marketplace
   cd ../UW-Marketplace/public/uw-student-marketplace/
   ```

2. Create the **.env** file and **add given Firebase API keys** to it:
   ```bash
   touch .env
   ```
   Firebase configuration should now look like:
      - REACT_APP_FIREBASE_API_KEY=your-api-key
      - REACT_APP_FIREBASE_AUTH_DOMAIN=your-auth-domain
      - REACT_APP_FIREBASE_PROJECT_ID=your-project-id
      - REACT_APP_FIREBASE_STORAGE_BUCKET=your-storage-bucket
      - REACT_APP_FIREBASE_MESSAGING_SENDER_ID=your-messaging-sender-id
      - REACT_APP_FIREBASE_APP_ID=your-app-id
      - REACT_APP_FIREBASE_MEASUREMENT_ID=your-measurement-id

3. Install Dependencies: Run **npm install** to install all required dependencies:
   ```bash
   npm install
   ```

4. Start the Development Server: Run **npm start** to run the application locally:
   ```bash
   npm start
   ```

The application will be available at http://localhost:3000. 

# Build and Test

To create a production build of the project, run:
###        npm run build


