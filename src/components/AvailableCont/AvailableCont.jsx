/* eslint-disable no-undef */
/* eslint-disable react/prop-types */
import './AvailableCont.css'
import Selected from "../Selected/Selected";
import AllPlayers from '../AllPlayers/AllPlayers';
// import { toast } from 'react-toastify';
const AvailableCont = ({ handleAvailable, available, handleChoosePlayer, selectedPlayer, handleDeletedBtn }) => {
    return (
        <>
            <div className="my-5 flex justify-between">
                <h2 className='text-2xl font-bold'>{available.cart ? `Available All Players` : `Selected Player (${selectedPlayer.length}/6)`}</h2>
                <div>
                    <div>
                        <button onClick={() => handleAvailable('cart')} className={available.cart ? 'available active rounded-xl rounded-r-none font-semibold' : "available border rounded-xl rounded-r-none font-semibold"}>Available</button>
                        <button onClick={() => handleAvailable('selected')} className={available.cart ? 'available border rounded-xl rounded-l-none font-semibold text-[#767676]' : 'available active rounded-xl rounded-l-none font-semibold'}>Selected <span>({selectedPlayer.length})</span></button>
                    </div>
                </div>
            </div>
            <div>
                {available.cart ? <AllPlayers handleChoosePlayer={handleChoosePlayer}></AllPlayers> :
                    <Selected
                        selectedPlayer={selectedPlayer}
                        handleDeletedBtn={handleDeletedBtn}
                    ></Selected>}
            </div>
        </>

    );
};

export default AvailableCont;