import React from 'react';
import react, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';

class Contact extends Component {
	render() {
		return (
			<div className="contact-body">
				<Grid className="contact-grid">
					<Cell col={6}>
						<h2>Matthieu Thomas</h2>
						<img
							src="https://cdn4.iconfinder.com/data/icons/user-avatar-flat-icons/512/User_Avatar-31-512.png"
							alt="Matthieu Thomas"
							style={{ height: '240px' }}
						/>
						<p style={{ width: '75%', margin: 'auto', paddingTop: '1em' }}>Matthieu is ausome </p>
					</Cell>
					<Cell col={6}>
						<p>Second half</p>
					</Cell>
				</Grid>
			</div>
		);
	}
}

export default Contact;
