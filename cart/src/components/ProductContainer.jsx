import { useDispatch, useSelector } from "react-redux";
import { add } from "../redux/cart/actions";
import { reduceQuantity } from "../redux/product/action";

const ProductContainer = () => {
    const products = useSelector(state => state.products.products);
    const dispatch = useDispatch();

    function addToCart(p) {
        if (p.quantity === 0) {
            return;
        }
        const cartItem = {
            ...p,
            quantity: 1
        }
        dispatch(reduceQuantity(p));
        dispatch(add(cartItem));
    }

    return (
        <div className="productContainer" id="productContainer">
            {
                products.map(p => <div
                    key={p.id}
                    className="productCard">
                    <img className="productImage bg-contain" src={`${p.imgUrl}`} alt="product" />
                    <div className="p-4 space-y-2">
                        <h4 className="productName">{p.name}</h4>
                        <p className="productCategory">{p.category}</p>
                        <div className="flex items-center justify-between pb-2">
                            <p className="productPrice">BDT <span className="price">{p.price}</span></p>
                            <p className="productQuantity">QTY <span className="quantity">{p.quantity}</span></p>
                        </div>
                        <button
                            onClick={() => addToCart(p)}
                            className="btnAddToCart">Add To Cart</button>
                    </div>
                </div>)
            }
        </div>
    );
};

export default ProductContainer;