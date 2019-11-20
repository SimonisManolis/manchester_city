import React from 'react';
import Featured from './Featured/featured';
import MatchesHome from './Matches/matchesHome';
import MeetPlayers from './MeetPlayers/meetPlayers';
import Promotion from './promotion/promotion';


const Home =()=>{
    return(
        <div className="bck_blue">
            <Featured/>
            <MatchesHome/>
            <MeetPlayers/>
            <Promotion/>
        </div>
    )
}

export default Home;