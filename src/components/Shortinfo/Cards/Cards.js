import React, {Component} from 'react';
import classes from './Cards.css';
import weatherImage from '../../../assets/wx_65.png';
// import Individualday from '../../Individualday/Individualday';

class Cards extends Component {
    render(){
        return(
            <div className = {classes.Cards} onClick = {this.props.clicked}>
        <img src = {weatherImage} className = {classes.Image2} alt= "sunny"/><br /> 
        <div className={classes.container}>
        <strong>Max temp</strong> : {this.props.max}°C<br />
        <strong>Min temp </strong>: {this.props.min}°C
        {/* <button onClick = {this.selectDayHandler}>View Full Report</button> */}
        </div>
        </div>
        );
    }
}
export default Cards;