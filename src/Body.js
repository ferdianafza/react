import React, { Component } from 'react';
import Header from './Header.js';
import Footer from './Footer.js';
import Stepper from './Stepper.js';
import VerticalStepper from './VerticalStepper.js';
import Tabs from './Tabs.js';

class Body extends Component {
	constructor() {
		super()
	}

	render() {
		return (<div>
					<Tabs />
				</div>)
	}
}

export default Body;