import React, {Component} from 'react';
import classes from './Shortinfo.css';
import Cardsinfo from '../Cardsinfo/Cardsinfo';
import axios from 'axios';
import Individualday from '../Individualday/Individualday';
var dayreport = null;
class Shortinfo extends Component {
    state = {
        data : null,
        selectDay : null
    }
    loadData = () => {
        console.log(this.props.coordinates);
        return axios.get('http://api.openweathermap.org/data/2.5/forecast', {
            params: {
              lat: this.props.coordinates.lat,
              lon : this.props.coordinates.lon,
              APPID : '7e39e65a186118c7b1aca6c70080cb7d'
            }
          })
          .then((response) => {
           
              console.log(response.data);
            this.setState({
                // max : (response.data.list[0].main.temp - 273).toFixed(2),
                // min : (response.data.list[0].main.temp_min - 273).toFixed(2),
                data : response.data
            })
            
          })
          .catch(function (error) {
            console.log(error);
          });
    }

    componentDidMount() {
        if(this.props.coordinates.lat || this.props.coordinates.lon)
        {this.loadData();
          // this.setmaxHandler();
      }
      
    }

    selectDayHandler = (id) => {
        this.setState({
            selectDay : id + 1
        })
        console.log("clicked " + id);
    }


    render()
    {    
        dayreport = !this.state.selectDay ? null : <Individualday day = {this.state.selectDay - 1} data = {this.state.data} />
        return(
            !this.state.data ? <div>Error</div> :
            <div>
                <strong>Your Location : </strong>{this.state.data.city.name}
            <div className = {classes.List}>
            <Cardsinfo data = {this.state.data} id = {0} clicked = {()=> this.selectDayHandler(0)}/>
            <Cardsinfo data = {this.state.data} id = {1} clicked = {()=> this.selectDayHandler(1)}/>
            <Cardsinfo data = {this.state.data} id = {2} clicked = {()=> this.selectDayHandler(2)}/>
            <Cardsinfo data = {this.state.data} id = {3} clicked = {()=> this.selectDayHandler(3)}/>
            </div>
            {dayreport}
            </div>
        )
    }
}


export default Shortinfo;

