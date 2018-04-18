import React,{Component} from 'react';
import classes from './Individualday.css';
var LineChart = require("react-chartjs").Line;
var temp = [];
if(temp)
{var data = {
	labels: ["Now", "3 hrs Later", "6 hrs Later", "9 hrs Later", "12 hrs Later", "15 hrs Later", "18 hrs Later", "21 Hrs Later"],
	datasets: [
		{
			label: "My First dataset",
			fillColor: "rgba(151,187,205,0.2)",
			strokeColor: "rgba(151,187,205,1)",
			pointColor: "rgba(151,187,205,1)",
			pointStrokeColor: "#fff",
			pointHighlightFill: "#fff",
			pointHighlightStroke: "rgba(151,187,205,1)",
			data: temp
        }
    ],
    
};
}

var options = {

	///Boolean - Whether grid lines are shown across the chart
	scaleShowGridLines : true,

	//String - Colour of the grid lines
	scaleGridLineColor : "rgba(0,0,0,.05)",

	//Number - Width of the grid lines
	scaleGridLineWidth : 1,

	//Boolean - Whether to show horizontal lines (except X axis)
	scaleShowHorizontalLines: true,

	//Boolean - Whether to show vertical lines (except Y axis)
	scaleShowVerticalLines: true,

	//Boolean - Whether the line is curved between points
	bezierCurve : true,

	//Number - Tension of the bezier curve between points
	bezierCurveTension : 0.4,

	//Boolean - Whether to show a dot for each point
	pointDot : true,

	//Number - Radius of each point dot in pixels
	pointDotRadius : 4,

	//Number - Pixel width of point dot stroke
	pointDotStrokeWidth : 1,

	//Number - amount extra to add to the radius to cater for hit detection outside the drawn point
	pointHitDetectionRadius : 20,

	//Boolean - Whether to show a stroke for datasets
	datasetStroke : true,

	//Number - Pixel width of dataset stroke
	datasetStrokeWidth : 2,

	//Boolean - Whether to fill the dataset with a colour
	datasetFill : true,
    
	//String - A legend template
	legendTemplate : "<ul class=\"<%=name.toLowerCase()%>-legend\"><% for (var i=0; i<datasets.length; i++){%><li><span style=\"background-color:<%=datasets[i].strokeColor%>\"><%if(datasets[i].label){%><%=datasets[i].label%><%}%></span></li><%}%></ul>",
	

	//Boolean - Whether to horizontally center the label and point dot inside the grid
	offsetGridLines : false
};


class Individualday extends Component {
    state = {
        temperatures : []
    }

    storeTempHandler =() => {
        let i = this.props.day * 8, index = 0;
        
        while(index < 8)
        {
            
            temp.push((this.props.data.list[i].main.temp - 273).toFixed(2));
            index = index + 1
            i = i + 1
        }
        console.log(temp);
        if(this.state.temperatures)
        {this.setState({
            temperatures : temp
        })
        
            console.log(this.state.temperatures)}
    }
    componentDidMount(){
        this.storeTempHandler();
    }

    render(){
        return(
            <div className = {classes.Graph}>
            <center>
                <LineChart data={data} options={options} width="600" height="250"/>
                </center>
            </div>
        );
    }

}

export default Individualday;