// import { useEffect } from "react";
import NavBar from "./NavBar";
import { Carousel } from "react-responsive-carousel";
import parts from "./assets/parts.png";
import biotti_logo from "./assets/biotti_logo.png";
import asteks_logo from "./assets/asteks_logo.webp";
import tike_logo from "./assets/tike_logo.png";
import perfect_logo from "./assets/perfect_logo.png";
import perfect_prod from "./assets/perfect_prods.jpg";
import tike_prod from "./assets/twist_machines.png";
import asteks_prod from "./assets/asteks_products.jpg";
import metallic_card from "./assets/metellic_card_clothing.jpg";
import "./HomePage.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import CarouselProduct from "./CarouselProduct";

function HomePage() {
  return (
    <>
      <div id="navBarDiv">
        <NavBar />
      </div>
      <div id="introDiv">
        <div id="introTextDiv">
          <p id="introHeading">WHO WE ARE</p>
          <p id="introText">
            Welcome to your one-stop destination for premium foreign textile
            products. From cutting-edge machinery and precision bobbins to
            essential spare parts, we connect you to top global companies. Our
            expertise goes beyond sales – we offer tailored advice to keep you
            ahead in the industry. Explore excellence in textiles with us today!
          </p>
        </div>
        <div>
          <img src={parts} id="partsImg" />
        </div>
      </div>
      <div id="bodyDiv">
      <div id="productHeading"><p id="productHeadingText">WHO WE REPRESENT</p></div>
      <Carousel
        infiniteLoop
        showArrows
        showIndicators
        showThumbs
        showStatus
        autoFocus
        autoPlay
        useKeyboardArrows
        width={"100%"}
      >
        <div>
          <CarouselProduct
            logolink={biotti_logo}
            productlink={metallic_card}
            productDesc="Biotti has over 140 years of experience in the textile manufacturing industry and produce the most high quality Italian metallic card clothing"
          />
        </div>
        <div>
          <CarouselProduct
            logolink={asteks_logo}
            productlink={asteks_prod}
            productDesc="Experience spinning perfection with Asteks' high-quality rubber spindles, meticulously crafted for precision and durability"
          />
        </div>
        <div>
          <CarouselProduct
            logolink={tike_logo}
            productlink={tike_prod}
            productDesc="Elevate your textile production with Tike's Turkish spinning machines and premium spare parts"
          />
        </div>
        <div>
          <CarouselProduct
            logolink={perfect_logo}
            productlink={perfect_prod}
            productDesc="Perfect Equipment presents cutting-edge rolling cover workshop machines, revolutionizing production efficiency along with advanced textile waste lines further enhance sustainability, making excellence a part of every process"
          />
        </div>
      </Carousel></div>
      <div id="footer"></div>
    </>
  );
}

export default HomePage;
