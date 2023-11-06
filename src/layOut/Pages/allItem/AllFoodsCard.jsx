import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Button,
  } from "@material-tailwind/react";
import { Link } from "react-router-dom";

const AllFoodsCard = ({ bakery }) => {
    const {_id, name, image, category, quantity, price} = bakery || {};
    return (
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
           <Button variant="text" className="flex items-center gap-2">
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
      </Button>
           </Link>

            </Typography>
          </CardFooter>
        </Card>
      );
};

export default AllFoodsCard;