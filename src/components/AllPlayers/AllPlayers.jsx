/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import Available from "../Available/Available";

const AllPlayers = ({ handleChoosePlayer}) => {
    const [allPlayers, setAllPlayers] = useState([])
    useEffect(() => {
        fetch(`Players.json`)
            .then(res => res.json())
            .then(data => setAllPlayers(data))
    }, [])
    return (
        <div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-5">
                {
                    allPlayers.map(player => <Available handleChoosePlayer={handleChoosePlayer} key={player.id} player={player}></Available>)
                }
            </div>
        </div>
    );
};

export default AllPlayers;