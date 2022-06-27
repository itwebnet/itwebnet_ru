import { Component } from 'react'
import '../Footer/FooterStyle.css'

export class Footer extends Component {
	render() {
		return (
			<div className='container'>
				<div className='footer'>
					&copy; 2000 - {new Date().getFullYear()}, ITWebNet <br />
					Политика конфиденциальности
				</div>
			</div>
		)
	}
}
