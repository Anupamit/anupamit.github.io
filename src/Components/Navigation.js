import React from 'react'
import { Link } from 'react-router-dom';
import '../Styles/Navigation.css'

function Navigation(props) {
	return (
		<div>
			{ props.showNav ? 
				<div className='navigationBar'>
					<p
						className='navLink navControl'>
						<i className="fa fa-times" id="closeNav" aria-hidden="true"></i>
					</p>
					<Link
						to='homeNav'
						activeClass='active'
						className='navLink'
						onClick={props.toggleNav}
						smooth={true}
						offset={-25}>Home
					</Link>
					<Link
						id='portfolioNavigationLink'
						to='projectsNav'
						activeClass='active'
						className='navLink'
						onClick={props.toggleNav}
						smooth={true}
						offset={-90}>Portfolio
					</Link>
					<Link
						to='contactNav'
						activeClass='active'
						className='navLink'
						onClick={props.toggleNav}
						smooth={true}
						offset={0}>Contact
					</Link>
				</div> :
				<div className='navControlBar'>
					<p className='navLink navControlLink'>
						<i className="fa fa-bars" id='navBars' aria-hidden="true"></i> Home
					</p>
				</div> 
				}
		</div>
	);
};

export default Navigation;