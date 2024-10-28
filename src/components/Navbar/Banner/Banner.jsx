/* eslint-disable react/prop-types */
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import banner from '../../../assets/banner-main.png'
import bannerShadow from '../../../assets/bg-shadow.png'
const Banner = ({ handleCount}) => {
    const count = 600000000;
    const handleToAl = () => {
        toast.success('Credit Added to your Account', {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
        });
    }
    return (
        <div className='bg-[rgb(19,19,19)] rounded-2xl mt-5'>
            <div className="hero rounded-2xl h-[500px]" style={{ backgroundImage: `url(${bannerShadow})` }}>
                <div className="hero-content text-center text-white">
                    <div className="space-y-4">
                        <img className='mx-auto' src={banner} alt="" />
                        <h1 className="text-4xl font-bold">Assemble Your Ultimate Dream 11 Cricket Team</h1>
                        <p className="py-6 text-gray-500 text-xl font-semibold">Beyond Boundaries Beyond Limits</p>
                        <button onClick={() => {
                            handleToAl()
                            handleCount(count)
                        }}
                            className="bg-[#c9dd26] py-2 px-3 ring-1 ring-offset-4 ring-offset-[#161516] ring-[#c9dd26] rounded-md text-black font-semibold">Claim Free Credit</button>
                        <ToastContainer />
                    </div>
                </div>
            </div>
        </div >
    );
};

export default Banner;