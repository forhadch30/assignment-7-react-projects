/* eslint-disable react/prop-types */
import logo from '../../assets/logo.png'
import { BsCoin } from "react-icons/bs";
const Navbar = ({ count }) => {
    return (
        <div>
            <div className='md:flex items-center md:justify-between p-2'>
                {/* image div */}
                <div>
                    <img className='lg:mx-0 mx-auto' src={logo} alt="" />
                </div>
                {/* menu list items */}
                <div className='flex md:gap-6 gap-5 items-center'>
                    <a className='text-[rgba(131,131,131,0.79)]' href="">Home</a>
                    <a className='text-[rgba(131,131,131,0.79)]' href="">Fixture</a>
                    <a className='text-[rgba(131,131,131,0.79)]' href="">Team</a>
                    <a className='text-[rgba(131,131,131,0.79)]' href="">Schedules</a>
                    <button className='border border-[rgb(221,221,221)] rounded-md py-1.5 px-2 font-semibold flex items-center gap-1'>
                        <span>{count}</span> Coin
                        <BsCoin className='text-yellow-500' />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Navbar;