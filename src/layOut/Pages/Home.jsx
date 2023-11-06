// import Banner from "../../components/header/Banner";
import { Helmet } from "react-helmet";
import TopSection from "../../components/TopSection";
// import Footer from "../../components/Footer";
// import Extraone from "../../components/Extra/Extraone";
// import Extratwo from "../../components/Extra/Extratwo";



const Home = () => {
          
    return (
        <div>
            <Helmet>
                <meta charSet="utf-8" />
                <title>SL Bakery | Home </title>
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>
      {/* <Banner></Banner> */}
      {/* <Extraone></Extraone> */}
      <TopSection></TopSection>
      {/* <Extratwo></Extratwo> */}
      {/* <Footer></Footer> */}
      

        </div>
    );
};

export default Home;