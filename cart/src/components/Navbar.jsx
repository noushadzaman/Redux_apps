import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Navbar = () => {
    const products = useSelector(state => state.cart.cart);
    const items = products.reduce((acc, curr) => acc + curr.quantity, 0)

    return (
        <nav className="bg-[#171C2A] py-4">
            <div className="navBar">
                <Link to="/" className="navHome" id="home"> Home </Link>

                <Link to="/cart" className="navCart" id="cart">
                    <div className="flex gap-4">
                        🛒
                        <span id="totalCart">{items}</span>
                    </div>
                </Link>
            </div>
        </nav>
    );
};

export default Navbar;