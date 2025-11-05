import Product from "../../components/Product/Product";
import { productData } from "./data";
import "./styles.css";

function Homework05() {
    const productCards = productData.map(({ id, name, price }) => (
    <Product key={id} name={name} price={price} />
    )
);
    return <div className="homework05-wrapper">{productCards}</div>;
}

export default Homework05;