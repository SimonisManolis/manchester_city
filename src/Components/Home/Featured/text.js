import React, {Component} from 'react';
import { Animate } from 'react-move';
import {easePolyOut} from 'd3-ease';
import FeaturedPlayer from '../../../Resources/images/featured_player.png';

class Text extends Component {

    state={
        rows:[
            
            {
                startx:260,
                starty:170,
                x:260,
                y:170,
                rotate:360,
                duration:1000,
                delay:0,
                className:"featured_number",
                text: "3",
                
            },
            {
                startx:1503,
                starty:450,
                x:273,
                y:450,
                rotate:0,
                duration:500,
                delay:0,
                className:"featured_first",
                text:"League",
                
            },
            {
                startx:1503,
                starty:586,
                x:273,
                y:586,
                rotate:0,
                duration:500,
                delay:300,
                className:"featured_second",
                text:"Championships",
                
            }

        ]
    }
    
    animateNumber = () =>{
        return(
            this.state.rows.map((row,i)=>(
                <Animate 
                    key={i}
                    show={true}
                    start={{
                        x:row.startx,
                        y:row.starty,
                        opacity:0,
                        rotate:0
                    }}

                    enter={{
                        opacity:row.opacity,
                        x:[row.x],
                        y:[row.y],
                        rotate:[row.rotate],
                        timing:{delay: row.delay , duration: row.duration, ease: easePolyOut}
                    }}
                >
                    {({opacity , rotate,x , y })=>{
                        return(
                            <div className={row.className}
                                style={{
                                    opacity,
                                    transform: `translate(${x}px,${y}px) rotateY(${rotate}deg)`
                                }}
                            >
                                
                                {row.text}
                            </div>
                        )
                    }}

                </Animate>
            ))
            
        )
        
    }

    animatePlayer=() =>(
        <Animate 
                    
                    show={true}
                    start={{
                       
                        opacity:0,
                        rotate:0
                    }}

                    enter={{
                        opacity:[1],
                        timing:{delay: 800 , duration: 500, ease: easePolyOut}
                    }}
                >
                    {({opacity })=>{
                        return(
                            <div className="featured_player"
                                style={{
                                    opacity,
                                    background:`url(${FeaturedPlayer})`,
                                    transform: `translate(550px,201px)`
                                }}
                            >
                                
                                
                            </div>
                        )
                    }}

                </Animate>
    )
    
    render(){
        return(
            <div>
                {this.animatePlayer()}
                {this.animateNumber()}
            </div>
        )
    }
}

export default Text;
