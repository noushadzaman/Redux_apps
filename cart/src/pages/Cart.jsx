import { useSelector } from "react-redux";
import BillDetails from "../components/BillDetails";
import CartCard from "../components/CartCard";
import Navbar from "../components/Navbar";

const Cart = () => {
    const products = useSelector(state => state.cart.cart)

    return (
        <>
            <Navbar />
            <main className="py-16">
                <div className="container 2xl:px-8 px-2 mx-auto">
                    <h2 className="mb-8 text-xl font-bold">Shopping Cart</h2>
                    <div className="cartListContainer">
                        <div className="space-y-6">
                            {
                                products.map(p => <CartCard key={p.id} p={p} />)
                            }
                        </div>
                        <BillDetails />
                    </div>
                </div>
            </main>
        </>
    );
};

export default Cart;