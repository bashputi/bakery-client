import { useLoaderData } from "react-router-dom";


const Details = () => {
    const details = useLoaderData();
    const {_id, name, image, category, quantity, price} = details || {};
    return (
        <div>
            hhhhh
        </div>
    );
};

export default Details;