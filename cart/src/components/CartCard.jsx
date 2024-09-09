/* eslint-disable react/prop-types */

const CartCard = ({ p }) => {
    console.log(p.price * p.quantity);

    return (
        <div className="cartCard">
            <div className="flex items-center col-span-6 space-x-6">

                <img className="cartImage" src={`${p.imgUrl}`} alt="product" />

                <div className="space-y-2">
                    <h4 className="cartName">{p.name}</h4>
                    <p className="cartCategory">{p.category}</p>
                    <p>BDT <span className="cartPrice">{p.price}</span></p>
                </div>
            </div>
            <div className="flex items-center justify-center col-span-4 mt-4 space-x-8 md:mt-0">

                <div className="flex items-center space-x-4">
                    <button className="incrementQuantity">
                        <i className="text-lg fa-solid fa-plus"></i>
                    </button>
                    <span className="cartQuantity">{p.quantity}</span>
                    <button className="decrementQuantity">
                        <i className="text-lg fa-solid fa-minus"></i>
                    </button>
                </div>

                <p className="text-lg font-bold">BDT <span className="calculatedPrice">{p.price * p.quantity}</span></p>
            </div>

            <div className="flex items-center justify-center col-span-2 mt-4 md:justify-end md:mt-0">
                <button className="removeFromCart">
                    <i className="text-lg text-red-400 fa-solid fa-trash"></i>
                </button>
            </div>
        </div>
    );
};

export default CartCard;