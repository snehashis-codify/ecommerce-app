import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Rating,
  Typography,
} from "@material-tailwind/react";
import { FaRupeeSign } from "react-icons/fa";

function Product({ product }) {
  function truncate(title, n) {
    return title.length > n ? title.slice(0, n) + "..." : title;
  }
  function handlePrice(price) {
    return price * 83.55;
  }
  return (
    <Card className="m-5" key={product.id}>
      <CardHeader className="!m-0 rounded-b-none">
        <img
          src={product.image}
          alt="card-image"
          height="200"
          className="object-contain text-center w-full h-60"
        />
      </CardHeader>
      <CardBody>
        <Typography variant="paragraph" color="blue-gray" className="mb-2">
          {truncate(product.title, 35)}
        </Typography>
        <Typography
          variant="h5"
          color="blue-gray"
          className="mb-2 flex items-center"
        >
          <FaRupeeSign />
          {handlePrice(product.price).toFixed(2)}
        </Typography>
        <Rating value={Math.round(product.rating.rate)} readonly />
      </CardBody>
      <CardFooter className="">
        <Button className="!w-full !bg-buttonBackground">Add to cart</Button>
      </CardFooter>
    </Card>
  );
}

export default Product;
