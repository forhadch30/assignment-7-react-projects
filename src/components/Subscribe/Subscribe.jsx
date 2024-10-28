import bannerShadow from '../../assets/bg-shadow.png'
const Subscribe = () => {
    return (
        <div className='border-2 border-white bg-white/30 my-20 p-5 rounded-2xl absolute w-10/12'>
            <div
                className="hero min-h-[330px] bg-black rounded-2xl"
                style={{
                    backgroundImage: `url(${bannerShadow})`,
                }}>
                <div className="rounded-2xl"></div>
                <div className="hero-content text-neutral-content text-center">
                    <div className="max-w-xl text-white space-x-2">
                        <h1 className="mb-5 text-4xl font-bold ">Subscribe to our Newsletter</h1>
                        <p className="mb-5 font-semibold">
                            Get the latest updates and news right in your inbox!
                        </p>
                        <input type="text" className='py-2 px-3 lg:w-[300px] outline-none rounded-md text-green-900 font-semibold' placeholder='Enter your email' />
                        <button className="bg-gradient-to-r from-[#e78cab] to-[#eab666] py-2 px-4 rounded-md text-black font-semibold">Subscribe</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Subscribe;








































