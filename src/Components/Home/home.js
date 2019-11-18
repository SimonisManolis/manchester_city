import React from 'react';
import Featured from './Featured/featured';
import MatchesHome from './Matches/matchesHome';

const Home =()=>{
    return(
        <div className="bck_blue">
            <Featured/>
            <MatchesHome/>
        </div>
    )
}

export default Home;