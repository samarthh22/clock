import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className='bg-black text-gray-300 flex items-center justify-center gap-6 text-2xl font-montserrat py-3'>
      <Link to='/' className='hover:text-white transition'>
        Clock
      </Link>

      <Link to='/stopwatch' className='hover:text-white transition'>
        Stopwatch
      </Link>

      {/* Add more links later if you build more tools */}
    </div>
  );
};

export default Header;
