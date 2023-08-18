import ContactForm from "./ContactForm";
import NavBar from "./NavBar";
import './ContactPage.css'
import { Map, Marker } from "pigeon-maps";

function ContactPage() {
  return (
    <>
      <div id="navBarDiv">
        <NavBar />
      </div>
      <div id="mapDiv">
      <Map
        height={450}
        defaultCenter={[31.440219220578342, 74.40490332102814]}
        defaultZoom={15}
      >
        <Marker width={50} anchor={[31.440219220578342, 74.40490332102814]} />
      </Map>
      </div>
      <div>
        <ContactForm />
      </div>
    </>
  );
}

export default ContactPage;
