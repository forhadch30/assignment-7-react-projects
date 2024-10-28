/* eslint-disable react/prop-types */
import { FaUser } from "react-icons/fa";
import { IoFlagSharp } from "react-icons/io5";
const Available = ({ player, handleChoosePlayer }) => {
    const { name, player_img, batting_style, country, bowling_position, price, role, flag } = player
    return (
        <div>
            <div className="border rounded-lg py-3 px-4 lg:w-[370px] space-y-2">
                <div className="space-y-2">
                    <img className="rounded-xl" src={player_img} alt="" />
                    <h2 className="text-xl font-medium flex items-center gap-2">
                        <FaUser className="text-[#424242]"></FaUser>
                        {name}</h2>
                </div>
                <div className="flex items-center justify-between">
                    <h2 className="text-[#898989] flex items-center gap-2">
                        <IoFlagSharp className="mt-1 text-xl"></IoFlagSharp>
                        <span>{country}</span></h2>
                    <button className="bg-[#f3f3f3] py-1.5 px-3 rounded">{role}</button>
                </div>
                <hr className="my-4" />
                <div className="space-y-2">
                    <h2 className="text-2xl font-semibold">Rating</h2>
                    <div className="space-y-4">
                        <h1 className="flex justify-between font-semibold">{batting_style}
                            <span className="text-[#6b6b6b]">{bowling_position}</span></h1>
                    </div>
                    <div onClick={() => handleChoosePlayer(player)} className="flex items-center justify-between space-y-3">
                        <p className="text-xl font-semibold">Price: ${price}</p>
                        <button className="border border-[#e0e0e0] rounded-md py-1.5 px-3 text-[#696969]">Choose Player</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Available;