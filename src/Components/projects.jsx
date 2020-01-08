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
						<CardText>This is my React portfolio</CardText>
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
						<CardText>This is my Real Estate website </CardText>
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
						<CardText>This is a react project for an online store </CardText>
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
				<div >
					<h1>Thats angular</h1>
				</div>
			);
		} else if (this.state.activeTab === 2) {
			return (
				<div className="project-grid">

					{/*This is SQL project 1*/}
					<Card shadow={5} style={{ Width: 450, margin: 'auto' }}>
						<CardTitle
							style={{
								color: '#fff',
								height: '176px',
								background:
								'url(https://codingsight.com/wp-content/uploads/2018/07/image1.png) center/cover'
							}}
						>
							
						</CardTitle>
						<CardText>This is my Real Estate website </CardText>
						<CardActions border>
							<Button colored>Github</Button>
							<Button colored>CodePen</Button>
							<Button colored>Live Demo</Button>
						</CardActions>
						<CardMenu style={{ color: '#fff' }}>
							<IconButton name="share" />
						</CardMenu>
					</Card>


					{/*This is SQL project 2*/}
					<Card shadow={5} style={{ Width: 450, margin: 'auto' }}>
						<CardTitle
							style={{
								color: '#fff',
								height: '176px',
								background:
									'url(https://codingsight.com/wp-content/uploads/2018/07/image1.png) center/cover'
							}}
						>
							
						</CardTitle>
						<CardText>This is my Real Estate website </CardText>
						<CardActions border>
							<Button colored>Github</Button>
							<Button colored>CodePen</Button>
							<Button colored>Live Demo</Button>
						</CardActions>
						<CardMenu style={{ color: '#fff' }}>
							<IconButton name="share" />
						</CardMenu>
					</Card>

					{/*This is SQL project 3*/}
					<Card shadow={5} style={{ Width: 450, margin: 'auto' }}>
						<CardTitle
							style={{
								color: '#fff',
								height: '176px',
								background:
									'url(https://codingsight.com/wp-content/uploads/2018/07/image1.png) center/cover'
							}}
						>
							
						</CardTitle>
						<CardText>This is my Real Estate website </CardText>
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
		} else if (this.state.activeTab === 3) {
			return (
				<div className="project-grid">
					{/*This is Data Analytics project 1*/}
					<Card shadow={5} style={{ Width: 450, margin: 'auto' }}>
						<CardTitle
							style={{
								color: '#fff',
								height: '176px',
								background:
									'url(https://qph.fs.quoracdn.net/main-qimg-3841943254682dd7e155598f820b181d.webp) center/cover'
							}}
						>
						
						</CardTitle>
						<CardText>This is my Real Estate website </CardText>
						<CardActions border>
							<Button colored>Github</Button>
							<Button colored>CodePen</Button>
							<Button colored>Live Demo</Button>
						</CardActions>
						<CardMenu style={{ color: '#fff' }}>
							<IconButton name="share" />
						</CardMenu>
					</Card>

                   	{/*This is Data Analytics project 2*/}
					<Card shadow={5} style={{ Width: 450, margin: 'auto' }}>
						<CardTitle
							style={{
								color: '#fff',
								height: '176px',
								background:
									'url(https://qph.fs.quoracdn.net/main-qimg-3841943254682dd7e155598f820b181d.webp) center/cover'
							}}
						>
						
						</CardTitle>
						<CardText>This is my Real Estate website </CardText>
						<CardActions border>
							<Button colored>Github</Button>
							<Button colored>CodePen</Button>
							<Button colored>Live Demo</Button>
						</CardActions>
						<CardMenu style={{ color: '#fff' }}>
							<IconButton name="share" />
						</CardMenu>
					</Card>

                   	{/*This is Data Analytics project 3*/}
					<Card shadow={5} style={{ Width: 450, margin: 'auto' }}>
						<CardTitle
							style={{
								color: '#fff',
								height: '176px',
								background:
									'url(https://qph.fs.quoracdn.net/main-qimg-3841943254682dd7e155598f820b181d.webp) center/cover'
							}}
						>
						
						</CardTitle>
						<CardText>This is my Real Estate website </CardText>
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
