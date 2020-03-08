import React, {Component} from 'react';
import '../../../css/ProstheticClassChoice.css';

class ProstheticClassChoice extends Component {
    render() {
        return <div className="choice-container">
            <div className="card choice-frame">
                <div className="card choice" onClick={()=>this.props.choose('Stifle')}>
                    <img src="img/pegleg-logo.svg" className="choice-icon" />
                    <br/>
                    <span>STIFLE</span>
                </div>
                <div className="card choice" onClick={()=>this.props.choose('Full')}>
                    <img src="img/fullleg-logo.svg" className="choice-icon" />
                    <br/>
                    <span>FULL</span>
                </div>
            </div>
        </div>
    }
}
export default ProstheticClassChoice;