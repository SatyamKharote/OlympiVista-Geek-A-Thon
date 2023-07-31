import React from 'react';
import { MDBCol, MDBContainer, MDBRow, MDBCard, MDBCardTitle, MDBCardText, MDBCardBody, MDBCardImage, MDBBtn } from 'mdb-react-ui-kit';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import '../components/Developer/developer.css'; // Create this CSS file for styling

const Developer = () => {
  return (
    <>
      <Header />
      <div className="developer-container">
        <h2>Meet the Developer</h2>
        <div className="developer-info">
          <div className="developer-image">
            {/* Replace the image URL with the path to your developer's image */}
            <img src="./Satyam_Kharote.jpg" alt="Developer" />
          </div>
          <div className="developer-details">
            <h3>Satyam Kharote</h3> {/* Replace with your developer's name */}
            <p>
              Hi, I'm Satyam Kharote, a passionate web developer with a love for building amazing web applications. I have experience in front-end and back-end development using various technologies. I believe in creating user-friendly and responsive websites that leave a lasting impression. Connect with me on LinkedIn for more exciting projects!
            </p>
            <a href="https://www.linkedin.com/in/john-doe" target="_blank" rel="noopener noreferrer">LinkedIn Profile</a>
          </div>
        </div>
        <div className="developer-info">
          <div className="developer-image">
            {/* Replace the image URL with the path to your developer's image */}
            <img src="./Satyam_Kharote.jpg" alt="Developer" />
          </div>
          <div className="developer-details">
            <h3>Satyam Kharote</h3> {/* Replace with your developer's name */}
            <p>
              Hi, I'm Satyam Kharote, a passionate web developer with a love for building amazing web applications. I have experience in front-end and back-end development using various technologies. I believe in creating user-friendly and responsive websites that leave a lasting impression. Connect with me on LinkedIn for more exciting projects!
            </p>
            <a href="https://www.linkedin.com/in/john-doe" target="_blank" rel="noopener noreferrer">LinkedIn Profile</a>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Developer;
