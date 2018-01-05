import * as React from 'react';
import { NavbarBrand, NavbarToggler } from 'reactstrap';

class Header extends React.Component {
  public render() {
    return (
      <header className="app-header navbar">
        <NavbarToggler className="d-lg-none" onClick={this.mobileSidebarToggle}>
          <span className="navbar-toggler-icon" />
        </NavbarToggler>
        <NavbarBrand href="#" />
        {/* <NavbarToggler className="d-md-down-none mr-auto" onClick={this.sidebarToggle}>
          <span className="navbar-toggler-icon" />
        </NavbarToggler>
        <NavbarToggler className="d-md-down-none" onClick={this.asideToggle}>
          <span className="navbar-toggler-icon" />
        </NavbarToggler> */}
      </header>
    );
  }

  // private sidebarToggle(e: React.MouseEvent<HTMLElement>) {
  //   e.preventDefault();
  //   document.body.classList.toggle('sidebar-hidden');
  // }

  // private sidebarMinimize(e: React.MouseEvent<HTMLElement>) {
  //   e.preventDefault();
  //   document.body.classList.toggle('sidebar-minimized');
  // }

  private mobileSidebarToggle(e: React.MouseEvent<HTMLElement>) {
    e.preventDefault();
    document.body.classList.toggle('sidebar-mobile-show');
  }

  // private asideToggle(e: React.MouseEvent<HTMLElement>) {
  //   e.preventDefault();
  //   document.body.classList.toggle('aside-menu-hidden');
  // }
}

export default Header;
