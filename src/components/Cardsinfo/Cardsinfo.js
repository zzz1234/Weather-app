import React, {Component} from 'react';
// import classes from './Cardsinfo.css';
import Cards from '../Shortinfo/Cards/Cards';
class Cardsinfo extends Component {
    state = {
        max : null,
        min : null,
        id : this.props.id
    }
    setmaxHandler = () => {
        let i = this.state.id * 8,maximum = (this.props.data.list[i].main.temp - 273).toFixed(2),minimum=this.props.data.list[i].main.temp_min;
        while((this.props.data.list[i].dt - this.props.data.list[this.state.id * 8].dt) < 86400){
            if(this.props.data.list[i].main.temp - 273 > maximum)
            {
                maximum = (this.props.data.list[i].main.temp - 273).toFixed(2);
            }
            if(this.props.data.list[i].main.temp_min - 273 < minimum)
            {
               minimum = (this.props.data.list[i].main.temp_min - 273).toFixed(2);
            }
            i = i + 1;
        }
        console.log("maximum : " + maximum + "  minimum : " + minimum);
        this.setState({
            max : maximum,
            min : minimum
        })
    }

    
      
      componentDidMount() {
            this.setmaxHandler();
      }
    render(){
        return (
                
                <Cards max = {this.state.max} min = {this.state.min} id = {this.state.id} clicked = {this.props.clicked}/>
                
        );
    }
}


export default Cardsinfo;