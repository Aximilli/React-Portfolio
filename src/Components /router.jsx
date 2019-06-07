import React from 'react';
import Home from './landingPage';
import Me from './about';
import Assignments from './projects';
import Job from './resume';
import CallMe from './contact';
import { Switch, Route } from 'react-router-dom';

const Router = () => (
	<Switch>
		<Route exact path="/" component={Home} />
		<Route exact path="/" component={Me} />
		<Route exact path="/" component={Assignments} />
		<Route exact path="/" component={Job} />
		<Route exact path="/" component={CallMe} />
	</Switch>
);

export default Router;
