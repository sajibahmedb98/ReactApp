import { useState, useEffect } from "react";
import axios from "axios";

const Test = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get(`https://dummyjson.com/products`)
      .then((res) => {
        console.log(res);
        setProducts(res.data.products);
      })
      .catch(function (error) {});
  }, []); // <- add the count variable here
  console.log(products);

  return (
    <table>
      <tr>
        <th>Id</th>
        <th>Title</th>
        <th>Price</th>
        <th>Deescription</th>
      </tr>
      {products.map((product) => (
        <tr>
          <td>{product.id}</td>
          <td>{product.title}</td>
          <td>{product.price}</td>
          <td>{product.images}</td>
        </tr>
      ))}
    </table>
  );
};
export default Test;
