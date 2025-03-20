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


# Getting Started
TODO: Guide users through getting your code up and running on their own system. In this section you can talk about:
1.	Installation process
2.	Software dependencies
3.	Latest releases
4.	API references
---
## Getting Started

Follow these steps to set up the project on your local machine.

### Prerequisites

Ensure you have the following installed on your system:

1. **Node.js** (v16 or later) - [Download Node.js](https://nodejs.org/)
2. **npm** (comes with Node.js) or **yarn** (optional) - [Install Yarn](https://yarnpkg.com/)
3. **Firebase Account** - Set up a Firebase project for authentication and Firestore database.

---

## Installation

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/your-username/UW-Marketplace.git
   cd UW-Marketplace

2. Install Dependencies: Run the following command to install all required dependencies:
### npm install

3. Set Up Firebase:
      Create a Firebase project in the Firebase Console. Enable Authentication (Email/Password) and Firestore Database. Download the firebaseConfig object from 
      your Firebase project settings. Create a .env file in the root directory and add your Firebase configuration:
              REACT_APP_FIREBASE_API_KEY=your-api-key
              REACT_APP_FIREBASE_AUTH_DOMAIN=your-auth-domain
              REACT_APP_FIREBASE_PROJECT_ID=your-project-id
              REACT_APP_FIREBASE_STORAGE_BUCKET=your-storage-bucket
              REACT_APP_FIREBASE_MESSAGING_SENDER_ID=your-messaging-sender-id
              REACT_APP_FIREBASE_APP_ID=your-app-id
4. Start the Development Server: Start the development server to run the application locally:
### npm start

The application will be available at http://localhost:3000. 

# Build and Test

To create a production build of the project, run:
### npm run build

Running Tests
To run tests for the project, use:
### npm test


# Contribute
TODO: Explain how other users and developers can contribute to make your code better. 

If you want to learn more about creating good readme files then refer the following [guidelines](https://docs.microsoft.com/en-us/azure/devops/repos/git/create-a-readme?view=azure-devops). You can also seek inspiration from the below readme files:
- [ASP.NET Core](https://github.com/aspnet/Home)
- [Visual Studio Code](https://github.com/Microsoft/vscode)
- [Chakra Core](https://github.com/Microsoft/ChakraCore)
