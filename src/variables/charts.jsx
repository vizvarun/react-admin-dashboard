import React, { Component } from 'react';

import {Doughnut} from 'react-chartjs-2';

const data = {
	labels: [
		'Red',
		'Green',
	],
	datasets: [{
		data: [70, 30],
		backgroundColor: [
		'#FF6384',
		'#36A2EB',
		],
		hoverBackgroundColor: [
		'#FF6384',
		'#36A2EB',
		]
	}]
};

class Donut extends Component {
	constructor(props) {
		super(props);
		this.state = {  }
	}
	render() { 
		return ( 
			<>
        		<Doughnut data={data} />
      		</>
		 );
	}
}
 
export default Donut;
