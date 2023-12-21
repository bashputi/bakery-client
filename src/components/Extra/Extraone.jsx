import { FcInTransit,FcGlobe, FcFaq } from "react-icons/fc";
import MessengerCustomerChat from 'react-messenger-customer-chat';


const Extraone = () => {
    return (
        <div className="container mx-auto my-24">
            <p data-aos="zoom-in" data-aos-duration="3000" className="text-center my-20 font-bold text-2xl lg:text-5xl">Why Choose Us</p>
            <div className="lg:flex ml-5 md:ml-44 lg:ml-0 justify-center gap-12">
                <div data-aos="flip-down" data-aos-duration="3000" className="text-center w-96"   >
                    <div className="flex justify-center"><FcGlobe className="w-8 h-8"/></div>
                    
                    <p className="mt-5 mb-3 font-bold text-2xl">FRESH PRODUCTS</p>
                    <p>Our baker's try to cook cleanly and we buy fresh items for baking. We make quality products.</p>
                </div>
                <div data-aos="flip-down" data-aos-duration="3000" className="text-center w-96">
                    <div className="flex justify-center"><FcInTransit className="w-8 h-8"/></div>
                    <p className="mt-5 mb-3 font-bold text-2xl">FAST DEVIVERY</p>
                    <p>Our delivery team always ready to deliver your desire food . So that you can enjoy your meal.</p>
                </div>
                <div data-aos="flip-down" data-aos-duration="3000" className="text-center w-96">
                    <div className="flex justify-center"><FcFaq className="w-8 h-8"/></div>
                    <p className="mt-5 mb-3 font-bold text-2xl">CUSTOMERS SUPPORT</p>
                    <p>We provide 24/7 customer Support . They can ask any question about our products and services.</p>
                </div>
            </div>
            <div className="mt-12">
            <hr /><hr />
            </div>
            <div>
            <MessengerCustomerChat
                pageId="<100016493281782>"
                appId="<322813700703150>"

            />,
                        </div>
        </div>
    );
};

export default Extraone;