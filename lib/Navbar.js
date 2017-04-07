// Navbar is a functional stateless component since it used for presentation only
// Navbar will require a userObj prop and display its' info in Navbar

import React from 'react'

const Navbar = ({userObj}) =>

      <div>
        <ul className="navbar">
          <li className="navbar__items navbar__items--appName">uMessage</li>
          <img className="navbar__avatar" src={userObj.pic}/>
          <li className="navbar__items">
            {userObj.userName}({userObj.notifications})
          </li>
          <li className="navbar__items">Respond</li>
          <li className="navbar__items">@Mentions({userObj.mentions})</li>
          <li className="navbar__items navbar__right">Dropdown Menu</li>
        </ul>
      </div>

Navbar.propTypes = {
  userObj: React.PropTypes.object.isRequired
}

export default Navbar;
