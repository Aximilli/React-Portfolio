import React from 'react';
import react, { Component } from 'react';
import { Tabs, Tab, Grid, Cell, Card, CardActions, CardMenu, CardTitle, CardText, Button, IconButton } from 'react-mdl';

class Projects extends Component {
	constructor(props) {
		super(props);
		this.state = { activeTab: 0 };
	}
	toggleCategories() {
		if (this.state.activeTab === 0) {
			return (
				<div className="project-grid">
					{/*This is project 1 */}
					<Card shadow={5} style={{ Width: 450, margin: 'auto' }}>
						<CardTitle
							style={{
								color: '#fff',
								height: '176px',
								background:
									'url(https://dab1nmslvvntp.cloudfront.net/wp-content/uploads/2017/04/1493235373large_react_apps_A-01.png) center/cover'
							}}
						>
							React Projects
						</CardTitle>
						<CardText>This is my portfolio on react application </CardText>
						<CardActions border>
							<Button colored>Github</Button>
							<Button colored>CodePen</Button>
							<Button colored>Live Demo</Button>
						</CardActions>
						<CardMenu style={{ color: '#fff' }}>
							<IconButton name="share" />
						</CardMenu>
					</Card>
					{/*This is project 2*/}
					<Card shadow={5} style={{ Width: 450, margin: 'auto' }}>
						<CardTitle
							style={{
								color: '#fff',
								height: '176px',
								background:
									'url(https://dab1nmslvvntp.cloudfront.net/wp-content/uploads/2017/04/1493235373large_react_apps_A-01.png) center/cover'
							}}
						>
							React Projects
						</CardTitle>
						<CardText>This is my portfolio on react application </CardText>
						<CardActions border>
							<Button colored>Github</Button>
							<Button colored>CodePen</Button>
							<Button colored>Live Demo</Button>
						</CardActions>
						<CardMenu style={{ color: '#fff' }}>
							<IconButton name="share" />
						</CardMenu>
					</Card>
					{/*This is project 3*/}
					<Card shadow={5} style={{ Width: 450, margin: 'auto' }}>
						<CardTitle
							style={{
								color: '#fff',
								height: '176px',
								background:
									'url(https://dab1nmslvvntp.cloudfront.net/wp-content/uploads/2017/04/1493235373large_react_apps_A-01.png) center/cover'
							}}
						>
							React Projects
						</CardTitle>
						<CardText>This is my portfolio on react application </CardText>
						<CardActions border>
							<Button colored>Github</Button>
							<Button colored>CodePen</Button>
							<Button colored>Live Demo</Button>
						</CardActions>
						<CardMenu style={{ color: '#fff' }}>
							<IconButton name="share" />
						</CardMenu>
					</Card>
				</div>
			);
		} else if (this.state.activeTab === 1) {
			return (
				<div>
					<h1>Thats angular</h1>
				</div>
			);
		} else if (this.state.activeTab === 2) {
			return (
				<div>
					<h1>Thats SQL</h1>
				</div>
			);
		} else if (this.state.activeTab === 3) {
			return (
				<div>
					<h1>Thats data Analysis</h1>
				</div>
			);
		}
	}

	render() {
		return (
			<div className="category-tabs">
				<Tabs activeTab={this.state.activeTab} onChange={(tabID) => this.setState({ activeTab: tabID })} ripple>
					<Tab>React</Tab>
					<Tab>Angular</Tab>
					<Tab>SQL Development</Tab>
					<Tab>Data Analysis</Tab>
				</Tabs>

				<Grid>
					<Cell col={12}>
						<div className="content">{this.toggleCategories()}</div>
					</Cell>
				</Grid>
			</div>
		);
	}
}

export default Projects;
