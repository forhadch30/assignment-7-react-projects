/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-key */
import { RiDeleteBin6Line } from "react-icons/ri";
const Selected = ({ selectedPlayer, handleDeletedBtn }) => {
    // eslint-disable-next-line no-unused-vars
    const { name, batting_style, player_img } = selectedPlayer;
    return (
        <div className="space-y-5">
            {
                selectedPlayer.map((player) =>
                    <div className="bg-slate-100 p-3 rounded-md">
                        <div className="flex items-center gap-3 justify-between">
                            <div className="flex items-center gap-4">
                                <img className="w-16 h-16 object-cover rounded-lg" src={player.player_img} alt="" />
                                <div>
                                    <h2 className="text-xl font-bold">{player.name}</h2>
                                    <p className="text-[#969696]">{player.batting_style}</p>
                                </div>
                            </div>
                            <button onClick={() =>
                                handleDeletedBtn(player.id)
                            }><RiDeleteBin6Line className="text-2xl text-red-600" /></button>
                    </div>
                    </div>)
}
<button
    className="bg-[#c9dd26] py-2 px-3 ring-1 ring-offset-4 ring-black rounded-md text-black font-semibold mt-4">Add More Player</button>
        </div >
    );
};

export default Selected;