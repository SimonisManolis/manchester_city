import React from 'react';
import { Tag } from '../../ui/misc';
import Blocks from './blocks';

const MatchesHome = () =>{
    return(
        <div className="home_matches_wrapper">
            <div className="container">
                <Tag
                    
                    bck="#0e1731"
                    size="50px"
                    color="#ffffff"
                    //additional props
                    //add={{
                      //  color:'red'
                    //}}
                >

                    Matches
                </Tag>

                <Blocks/>

                <Tag
                    link={true}
                    linkTo="/the_matches"
                    bck="#ffffff"
                    size="22px"
                    color="#0e1731"
                    //additional props
                    //add={{
                      //  color:'red'
                    //}}
                >

                    See more matches
                </Tag>

                
            </div>
           
           
        </div>
    )
}

export default MatchesHome;