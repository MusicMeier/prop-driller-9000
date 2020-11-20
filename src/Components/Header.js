import React from 'react';

function Header(props) {

  return (
    <header>
      <img
        src = {props.logo}
        alt = "logo"
        onClick={props.toggleDisplay}
      />
    </header>
  );
}

export default Header;
