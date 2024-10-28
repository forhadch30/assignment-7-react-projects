import footer from '../../assets/logo-footer.png'
const Footer = () => {
    return (
        <div>
            <div className="bg-black text-[#9b9da3] mt-[21%]">
                <div className='pt-52'>
                    <img className='mx-auto' src={footer} alt="" />
                </div>
                <div className="flex justify-between lg:w-[1070px] mx-auto py-24">
                    <div className="space-y-3">
                        <h2 className="text-xl font-bold text-white">About Us</h2>
                        <p className="w-[250px]">We are a passionate team dedicated to providing the best services to our customers.</p>
                    </div>
                    <div className="space-y-3">
                        <h2 className="text-xl font-bold text-white">Quick Links</h2>
                        <a href="">
                            <li>Home</li>
                        </a>
                        <a href="">
                            <li>Services</li>
                        </a>
                        <a href="">
                            <li>About</li>
                        </a>
                        <a href="">
                            <li>Contact</li>
                        </a>
                    </div>
                    <div className="max-w-xl">
                        <h1 className="text-3xl font-semibold text-white">Subscribe</h1>
                        <p className="py-6 text-[#5a5a5a] lg:w-[260px] font-semibold">Subscribe to our newsletter for the latest updates.</p>
                        <div>
                            <input type="text" className="border lg:w-[250px] h-10 px-3 rounded-xl rounded-r-none outline-none text-black font-semibold" placeholder="Enter your email" />
                            <button className="bg-gradient-to-r from-[#e78cab] to-[#eab666] py-2 px-4 rounded-xl rounded-l-none mt-3 text-black font-semibold
        ">Subscribe</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;