import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
	return (
		<footer className="bg-dark text-light pt-4">
			<div className="container">
				<div className="row">
					{/* Brand / About */}
					<div className="col-md-4 mb-3">
						<h5 className="text-success">Mitahara</h5>
						<p className="small">
							Wholesome meals inspired by ancient food wisdom.  
							Clean, balanced, and naturally nourishing for modern lifestyles.
						</p>
					</div>
					{/* Quick Links */}
					<div className="col-md-4 mb-3">
						<h6 className="text-uppercase">Quick Links</h6>
						<ul className="list-unstyled">
							<li><Link to="/food-bowls" className="text-light text-decoration-none">Fruit Bowls</Link></li>
							<li><Link to="/salads" className="text-light text-decoration-none">Salads</Link></li>
							<li><Link to="/oatmeal" className="text-light text-decoration-none">Oat Meals</Link></li>
							<li><Link to="/Millets" className="text-light text-decoration-none">Millet Based Meals</Link></li>
						</ul>
					</div>
					{/* Health Promise */}
					<div className="col-md-4 mb-3">
						<h6 className="text-uppercase">Our Promise</h6>
						<ul className="list-unstyled small">
							<li>✔ No Refined Oils</li>
							<li>✔ No Preservatives</li>
							<li>✔ No Artificial Additives</li>
							<li>✔ Ancient Grain Nutrition</li>
						</ul>
					</div>
				</div>
			</div>
			<div className="text-center py-3 small">
				&copy; {new Date().getFullYear()} Mitahara. All rights reserved.
			</div>
		</footer>
	);
};

export default Footer;