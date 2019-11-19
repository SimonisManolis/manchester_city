import React from 'react';
import Featured from './Featured/featured';
import MatchesHome from './Matches/matchesHome';
import MeetPlayers from './MeetPlayers/meetPlayers';


const Home =()=>{
    return(
        <div className="bck_blue">
            <Featured/>
            <MatchesHome/>
            <MeetPlayers/>
        </div>
    )
}

export default Home;