import { useState, useEffect } from 'react'
import NavBar from "./NavBar";
import "./HomePage.css";
function HomePage() {
  
    const [currentImage, setCurrentImage] = useState(1);
  
    useEffect(() => {
      const interval = setInterval(() => {
        setCurrentImage(prevImage => (prevImage === 1 ? 2 : 1));
      }, 7000);
  
      return () => clearInterval(interval);
    }, []);
  

  return (
       <>
      <div id="navBarDiv">
        <NavBar />
      </div>
      <div>
        <img
          src= "src/assets/background1.jpg"
          id={currentImage === 1 ? "active" : "background1"}
          alt="Background"
        />
        <img
          src= "src/assets/background2.jpg" 
          id={currentImage === 2 ? "active" : "background2"}
          alt="Background"
        />
        <p id="introTextH1">Anchored with Excellence</p>
        <p id="introTextH2">Textile Engineering</p>
        <p id="introTextPara">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Sed
          viverra ipsum nunc aliquet. Ultricies mi quis hendrerit dolor magna
          eget. Scelerisque eleifend donec pretium vulputate sapien nec.
          Faucibus scelerisque eleifend donec pretium vulputate sapien nec
          sagittis.
        </p>
      </div>
    </>
  );
}


export default HomePage;
