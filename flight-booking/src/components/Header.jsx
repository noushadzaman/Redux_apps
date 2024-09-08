
const Header = () => {
    return (
        <header id="header">
            <div className="container">
                <p className="text-2xl text-white font-bold">Flight Booking</p>
                <div className="flex items-center">
                    <a className="text-white min-w-[50px] font-medium" href="#">Home</a>
                    <button className="log-btn btn">Login</button>
                </div>
            </div>
        </header>
    );
};

export default Header;