import React, { Component } from 'react'
import { Container } from 'reactstrap'
import { Footer } from './Footer/Footer'
import { NavMenu } from './NavMenu/NavMenu'

export class Layout extends Component {
	static displayName = Layout.name

	render() {
		return (
			<div className='wrapper'>
				<NavMenu />
				<div className='content'>{this.props.children}</div>
				<div className='footer'>
					<Footer />
				</div>
			</div>
		)
	}
}

/*
				<div className='content'>{this.props.children}</div>
				<div className='footer'>
					<Footer />
				</div>
				*/
