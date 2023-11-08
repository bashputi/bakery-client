import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
  } from "@material-tailwind/react";
  import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const AllFoodsCard = ({ bakery }) => {
    const {_id, name, image, category, quantity, price} = bakery || {};
    return (
      <div data-aos="fade-up"
      data-aos-duration="2600">
        <Card className="max-w-[24rem] overflow-hidden">
          <CardHeader
            floated={false}
            shadow={false}
            color="transparent"
            className="m-0 rounded-none"
          >
            <img className="w-[24rem] h-[18rem]"
            src={image}
              alt="ui/ux review check"
            />
          </CardHeader>
          <CardBody>
            <Typography variant="h4" color="blue-gray">
              {name}
            </Typography>
            <Typography variant="h6" className="-mb-10 mt-3">
              {category}
            </Typography>
          </CardBody>
          <CardFooter className="flex items-center justify-between">
             <div><span className="font-bold text-xl text-amber-700">${price}</span> / <span>{quantity} pcs</span></div>
            <Typography className="font-normal">
              
           <Link to={`details/${_id}`}>
           <motion.button whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.9 }} className="btn btn-outline btn-secondary flex items-center gap-2">
        Details{" "}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="currentColor"
          className="h-5 w-5"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
          />
        </svg>
      </motion.button>
           </Link>

            </Typography>
          </CardFooter>
        </Card>
        </div>
      );
};

export default AllFoodsCard;