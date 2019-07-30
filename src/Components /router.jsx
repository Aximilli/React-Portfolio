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
		<Route exact path="/me" component={Me} />
		<Route exact path="/projects" component={Assignments} />
		<Route exact path="/resume" component={Job} />
		<Route exact path="/contacts" component={CallMe} />
	</Switch>
);

export default Router;
