import '../css_Styles/about.css';
import Images from '../components/images'
//this is a comment to test git from ayo :)
function AboutPage() {
  return (
    <>
    <Images />
    <div className="about-container">
      <h1 className="about-header">About HealthHub</h1>
      <p className="about-text">
        Welcome to HealthHub (The app that will help you get hospitalised ;D ), your one-stop solution for managing healthcare needs. 
        HealthHub is designed to make medical appointments and prescription management 
        seamless and hassle-free. Our app allows users to book appointments with 
        qualified doctors, view available slots, and receive up-to-date prescription 
        information. For healthcare professionals, HealthHub provides a comprehensive 
        overview of patient histories, ensuring informed and efficient patient care. 
        Our mission is to improve healthcare experiences through technology, providing 
        reliable and efficient healthcare information for both patients and doctors.
      </p>
      <p className="about-text">
        At HealthHub, we are committed to enhancing the quality of healthcare services. 
        We believe in empowering patients with the knowledge and tools necessary for 
        proactive health management. Join us in revolutionizing healthcare accessibility 
        and efficiency.
      </p>
    </div>
    <Images style={{ maxWidth: '50px', maxHeight: '250px' }}/>
    </>
  );
}

export default AboutPage;
