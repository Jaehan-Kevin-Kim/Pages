import React from "react";
import PropTypes from "prop-types";
import Link from "next/link";

const AppLayout = (props) => {
  console.log(props);
  return (
    <div>
      <Link href='/'>
        <a>Node Bird</a>
      </Link>
      <Link href='/profile'>
        <a>Profile</a>
      </Link>
      <Link href='/signup'>
        <a>Sign Up</a>
      </Link>
      <div>Common Menu</div>
      {props.children}
    </div>
  );
};

AppLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AppLayout;
