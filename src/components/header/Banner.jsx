import { Carousel, Typography, Button } from "@material-tailwind/react";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";

const Banner = () => {
    return (
        <Carousel className="rounded-xl">
          <div className="relative h-full w-full">
            <img
              src="  https://i.ibb.co/m6KNF1c/food-macaron-sweets-wallpaper-preview.jpg"
              alt="image 2"
              className="h-[90vh] w-full "
            />
            <div className="absolute inset-0 grid h-full w-full items-center bg-black/75">
              <div className="w-3/4 pl-12 md:w-2/4 md:pl-20 lg:pl-32">
                <Typography
                  variant="h1"
                  color="white"
                  className="mb-4 text-2xl md:text-3xl lg:text-5xl"
                >
                 Come for the bakery, <br />Stay for the pastry.
                </Typography>
                <Typography
                  variant="lead"
                  color="white"
                  className="lg:mb-12 text-lg opacity-80"
                >
                 You’ll find dozens of muffin recipes here, from healthy and wholesome options like morning glory muffins and applesauce muffins.
                </Typography>
                <div className="flex gap-2">
                <motion.button whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.9 }} className="btn btn-active btn-accent"> <NavLink to="/allfoods">All Items</NavLink></motion.button>
                 
                </div>
              </div>
            </div>
          </div>
          <div className="relative h-full w-full">
            <img
              src="https://i.ibb.co/ckvfptj/istockphoto-931658626-612x612-720x.jpg"
              alt="image 2"
              className="h-[90vh] w-full "
            />
            <div className="absolute inset-0 grid h-full w-full items-center bg-black/75">
              <div className="w-3/4 pl-12 md:w-2/4 md:pl-20 lg:pl-32">
                <Typography
                  variant="h1"
                  color="white"
                  className="mb-4 text-2xl md:text-3xl lg:text-5xl"
                >
                Come for the bakery, <br />Stay for the pastry.
                </Typography>
                <Typography
                  variant="lead"
                  color="white"
                  className="lg:mb-12 text-lg opacity-80"
                >
                  You’ll find dozens of muffin recipes here, from healthy and wholesome options like morning glory muffins and applesauce muffins.
                </Typography>
                <div className="flex gap-2">
                  <motion.button whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.9 }} className="btn btn-active btn-accent"> <NavLink to="/allfoods">All Items</NavLink></motion.button>
                 
                </div>
              </div>
            </div>
          </div>
          <div className="relative h-full w-full">
            <img
              src=" https://i.ibb.co/x7yss1Y/chocolatecobwebcupca-93842-16x9.jpg"
              alt="image 3"
              className="h-[90vh] w-full "
            />
            <div className="absolute inset-0 grid h-full w-full items-end bg-black/75">
              <div className="w-3/4 pl-12 pb-12 md:w-2/4 md:pl-20 md:pb-20 lg:pl-32 lg:pb-32">
                <Typography
                  variant="h1"
                  color="white"
                  className="mb-2 lg:mb-4 text-2xl md:text-3xl lg:text-5xl"
                >
                  Come for the bakery, <br />Stay for the pastry.
                </Typography>
                <Typography
                  variant="lead"
                  color="white"
                  className="lg:mb-12 text-lg opacity-80"
                >
                 You’ll find dozens of muffin recipes here, from healthy and wholesome options like morning glory muffins and applesauce muffins.
                </Typography>
                <div className="flex gap-2">
                <motion.button whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.9 }} className="btn btn-active btn-accent"> <NavLink to="/allfoods">All Items</NavLink></motion.button>
                 
                </div>
              </div>
            </div>
          </div>
        </Carousel>
      );
    };
export default Banner;