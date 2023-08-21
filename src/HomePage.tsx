// import { useEffect } from "react";
import NavBar from "./NavBar";
import { Carousel } from "react-responsive-carousel";
import parts from "./assets/parts.png";
import biotti_logo from "./assets/biotti_logo.png";
import asteks_logo from "./assets/asteks_logo.webp";
import tike_logo from "./assets/tike_logo.png";
import perfect_logo from "./assets/perfect_logo.png";
import bonino1913_logo from "./assets/bonino1913_logo.png";
import nestling_logo from "./assets/nestling_logo.svg";
import naren_logo from "./assets/naren_logo.jpg";
import alanayat_logo from "./assets/alanayat_logo.png";
import perfect_prod from "./assets/perfect_prods.jpg";
import tike_prod from "./assets/twist_machines.png";
import asteks_prod from "./assets/asteks_products.jpg";
import bonino1913_prod from "./assets/bonino1913_prod.jpg";
import nestling_prod from "./assets/nestling_prod.png";
import naren_prod from "./assets/naren_prod.png";
import alanayat_prod from "./assets/alanayat_prod.png";
import metallic_card from "./assets/metellic_card_clothing.jpg";
import git_logo from "./assets/github_logo.png";
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
        <div id="productHeading">
          <p id="productHeadingText">WHO WE REPRESENT</p>
        </div>
        <Carousel
          infiniteLoop
          showArrows
          showIndicators
          showThumbs
          showStatus
          autoPlay
          useKeyboardArrows
          swipeable={false}
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
          <div>
            <CarouselProduct
              logolink={bonino1913_logo}
              productlink={bonino1913_prod}
              productDesc="Bonino1913 offers Italian recycling lines and blending machines that epitomize innovation in textile sustainability. Elevate your production with state-of-the-art solutions, seamlessly merging eco-consciousness with performance."
            />
          </div>
          <div>
            <CarouselProduct
              logolink={nestling_logo}
              productlink={nestling_prod}
              productDesc="Nestling pioneers efficiency with contamination sorters, spindle monitors, and AI-based cop sorting. Seamlessly maintain peak machine performance while effortlessly achieving superior contamination elimination across all categories"
            />
          </div>
          <div>
            <CarouselProduct
              logolink={naren_logo}
              productlink={naren_prod}
              productDesc="Naren specializes in premium mechanical and electronic spare parts, covering the entire textile process from blow room to winding. Unleash optimal performance across your machinery with their precision-engineered solutions."
            />
          </div>
          <div>
            <CarouselProduct
              logolink={alanayat_logo}
              productlink={alanayat_prod}
              productDesc="Al Anayat: Pakistan's foremost provider of high-end energy-saving air conditioning and advanced waste collection systems. Transforming comfort and sustainability through innovative solutions"
            />
          </div>
        </Carousel>
      </div>
      <div id="footer">
        <p id="footerCopyright">Copyright© 2023</p>
        <img
          src={git_logo}
          id="githubLogo"
          onClick={() => {
            window.open(
              "https://github.com/MuhammadSaad0/TextileVanguard",
              "_blank"
            );
          }}
        />
      </div>
    </>
  );
}

export default HomePage;
