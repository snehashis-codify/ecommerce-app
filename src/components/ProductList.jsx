import { useEffect, useState } from "react";
import { axiosCreate } from "../axios";
import Product from "./Product";
function ProductList() {
  const [productList, setProductList] = useState([]);
  useEffect(() => {
    async function fetchProductList() {
      await axiosCreate
        .get(`${import.meta.env.VITE_APP_AXIOS_BASE_URL}/products`)
        .then((res) => {
          if (res.status === 200) {
            setProductList(res.data);
            console.log(res);
          }
        })
        .catch((err) => {
          console.log(err);
        });
    }
    fetchProductList();
  }, []);
  console.log("pro", productList);
  return (
    <div className="grid grid-flow-row-dense md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {productList.length > 0 &&
        productList.map((product) => (
          <Product key={product.id} product={product} />
        ))}
    </div>
  );
}

export default ProductList;
