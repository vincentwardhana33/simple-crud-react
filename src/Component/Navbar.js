import React, { Component } from 'react';

class Navbar extends Component {
  render() {
    return (
        <div className="head">
            <div className="top">
                <div className="left">
                <button id="on" className="btn btn-info"><i className="fa fa-bars" /></button>
                <button id="off" className="btn btn-info hide"><i className="fa fa-align-left" /></button>
                <button className="btn btn-info hidden-xs-down"><i className="fa fa-expand-arrows-alt" /></button>
                <button className="btn btn-info hidden-xs-down"><i className="fa fa-home" />Back Home</button>
                </div>
                <div className="right">
                <button className="btn btn-info hidden-xs-down"><i className="fa fa-bell" /></button>
                <button className="btn btn-info hidden-xs-down"><i className="fa fa-envelope" /></button>
                <div className="dropdown">
                    <button className="btn btn-info dropdown-toggle" id="userDropdown" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Vincent Keren</button>
                    <div className="dropdown-menu" aria-labelledby="userDropdown">
                    <a className="dropdown-item" href="#">profile</a>
                    <a className="dropdown-item" href="#">sitting</a>
                    <a className="dropdown-item" href="#">log out</a>
                    </div>
                </div>
                </div>
            </div>
            <div className="bottom">
                <div className="left">
                <h1>dashboard</h1>
                </div>
                <div className="right">
                <h1>dashboard /</h1>
                <a href="#">page name</a>
                </div>
            </div>
        </div>
      );
  }
}

export default Navbar;
