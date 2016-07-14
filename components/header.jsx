import React from 'react';
import { Grid, Row, Col } from 'react-bootstrap';

class Header extends React.Component {
  render() {
    return <header>
			<section className="hero">
				<div class="texture-overlay"></div>
				<Grid>
					<Row class="nav-wrapper">
						<Col md={6} sm={6} xs={6} className="text-left">
							<a href="#"><img src="img/logo-white.png" alt="Boxify Logo" /></a>
						</Col>
						<Col md={6} sm={6} xs={6} className="text-right navicon">
							<p>MENU</p><a id="trigger-overlay" className="nav_slide_button nav-toggle" href="#"><span></span></a>
						</Col>
					</Row>
					<Row className="hero-content">
						<Col md={12}>
							<h1 className="animated fadeInDown">An Exclusive, Premium HTML5 &amp; CSS3 Template by Peter Finlan, for Codrops.</h1>
							<a href="http://tympanus.net/codrops/?p=22554" className="use-btn animated fadeInUp">Use it for free</a> <a href="#about" className="learn-btn animated fadeInUp">Learn more <i className="fa fa-arrow-down"></i></a>
						</Col>
					</Row>
				</Grid>
			</section>
		</header>;
  }
}

export default Header;
