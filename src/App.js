import React from 'react';
import './App.css';
import { Layout, Header, Navigation, Drawer, Content } from 'react-mdl';
import Main from './Components /router.jsx';
import { Link } from 'react-router-dom';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { faCheckSquare, faCoffee } from '@fortawesome/free-solid-svg-icons';

function App() {
	library.add(fab, faCheckSquare, faCoffee);
	return (
		<div className="demo-big-content">
			<Layout>
				<Header class="header-color" title="Dashboard" scroll>
					<Navigation>
						<Link to="/">Home</Link>
						<Link to="/resume">Resume</Link>
						<Link to="/me">About</Link>
						<Link to="/projects">Projects</Link>
						<Link to="/contacts">Contacts</Link>
					</Navigation>
				</Header>
				<Drawer title="Menu">
					<Navigation>
						<Link to="/resume">Resume</Link>
						<Link to="/me">About</Link>
						<Link to="/projects">Projects</Link>
						<Link to="/contacts">Contacts</Link>
					</Navigation>
				</Drawer>
				<Content>
					<div className="page-content" />
					<Main />
				</Content>
			</Layout>
		</div>
	);
}

export default App;
