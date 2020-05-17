import React from 'react';
import Emoji from 'a11y-react-emoji'
import './HeaderStyles.css';

const Header = () => (
	<div className="header-style">
		<h1>
			<Emoji symbol="🐢 " label="turtle" />
		  Turtle Traveling Map
		  <Emoji symbol=" 🐢" label="turtle" />
		 </h1>
	</div>
)

export default Header;
