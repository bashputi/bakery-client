import { GrCafeteria, GrDeliver } from "react-icons/gr";
import { HiChatBubbleLeftRight } from "react-icons/hi2";


const Extraone = () => {
    return (
        <div className="container mx-auto my-24">
            <p className="text-center my-20 font-bold text-2xl lg:text-5xl">Why Choose Us</p>
            <div className="lg:flex ml-5 md:ml-44 lg:ml-0 justify-center gap-12">
                <div className="text-center w-96">
                    <div className="flex justify-center"><GrCafeteria className="w-8 h-8"/></div>
                    
                    <p className="mt-5 mb-3 font-bold text-2xl">FRESH PRODUCTS</p>
                    <p>Our baker's try to cook cleanly and we buy fresh items for baking. We make quality products.</p>
                </div>
                <div className="text-center w-96">
                    <div className="flex justify-center"><GrDeliver className="w-8 h-8"/></div>
                    <p className="mt-5 mb-3 font-bold text-2xl">FAST DEVIVERY</p>
                    <p>Our delivery team always ready to deliver your desire food . So that you can enjoy your meal.</p>
                </div>
                <div className="text-center w-96">
                    <div className="flex justify-center"><HiChatBubbleLeftRight className="w-8 h-8"/></div>
                    <p className="mt-5 mb-3 font-bold text-2xl">CUSTOMERS SUPPORT</p>
                    <p>We provide 24/7 customer Support . They can ask any question about our products and services.</p>
                </div>
            </div>
            <div className="mt-12">
            <hr /><hr />
            </div>
        </div>
    );
};

export default Extraone;