import { Link } from 'react-router-dom';
import { FaMusic } from 'react-icons/fa';

const Navbar = () => {
    return (
        <nav className="bg-gray-800 text-white py-4">
            <div className="container max-w-screen-md mx-auto flex justify-between items-center">
                <Link to="/" className="text-lg font-bold flex items-center ml-2">
                    <FaMusic className="mr-2" />
                    Song App
                </Link>
                <div>
                    <Link to="/" className="mr-4">Home</Link>
                    <Link to="/add" className="mr-4">Add</Link>
                    <Link to="/status" className="mr-4">Status</Link>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
