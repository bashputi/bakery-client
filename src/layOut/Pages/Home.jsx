import Banner from "../../components/header/Banner";
import { Helmet } from "react-helmet";
import TopSection from "../../components/TopSection";
import Extraone from "../../components/Extra/Extraone";
import Extratwo from "../../components/Extra/Extratwo";
// import API from "../../components/API";



const Home = () => {
          
    return (
        <div>
            <Helmet>
                <meta charSet="utf-8" />
                <title>SL Bakery | Home </title>
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>
        
      <Banner></Banner> 
      {/* <div>
        <API></API>
      </div> */}
       <Extraone></Extraone>
      <TopSection></TopSection>
      <Extratwo></Extratwo>
    
      

        </div>
    );
};

export default Home;