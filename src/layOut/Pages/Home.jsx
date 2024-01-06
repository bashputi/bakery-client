import Banner from "../../components/header/Banner";
import { Helmet } from "react-helmet";
import TopSection from "../../components/TopSection";
import Extraone from "../../components/Extra/Extraone";
import Extratwo from "../../components/Extra/Extratwo";
import API from "../../components/API";
import Serper from "../../components/Serper";
import ReactWhatsapp from "react-whatsapp";



const Home = () => {
          
    return (
        <div>
            <Helmet>
                <meta charSet="utf-8" />
                <title>SL Bakery | Home </title>
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>
        
      <Banner></Banner> 
      {/* <Serper></Serper> */}
      {/* <div>
      
        <API></API>
      </div> */}
      <div>
      <ReactWhatsapp number="+8801718177859" message="Hello, Could you please help me?" ><img className="w-12 lg:w-16 fixed right-5 md:right-40 bottom-5 md:bottom-40" src="https://i.ibb.co/K9V5cGb/gratis-png-logo-de-llamada-mensaje-de-mensajeria-instantanea-del-logo-de-whatsapp-whatsapp-thumbnail.png" alt="whatsapp logo" /></ReactWhatsapp>
      </div>
       <Extraone></Extraone>
      <TopSection></TopSection>
      <Extratwo></Extratwo>
    
      

        </div>
    );
};

export default Home;