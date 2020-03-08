import React, {Component} from 'react';
import '../../../css/Hero.css';
import {scrollScreenNext} from "../../helpers";

class Hero extends Component {
    render() {
        return <div className="hero-container">
                <div className="card hero-card">
                    <div className="hero-title">DOGMATIC</div>
                </div>
            <img className="chevron" src="img/chevron.svg" onClick={()=>{scrollScreenNext()}}/>
        </div>
    }
}
export default Hero;