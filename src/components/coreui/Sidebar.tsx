import classNames from 'classnames';
import React from 'react';
import { RouteComponentProps } from 'react-router';
import { NavLink } from 'react-router-dom';
import { Badge, Nav, NavItem, NavLink as RsNavLink } from 'reactstrap';
import nav from '../../_navigation';
import * as NavTypes from '../../model/navigation';
import SidebarFooter from './Sidebar/SidebarFooter';
import SidebarForm from './Sidebar/SidebarForm';
import SidebarHeader from './Sidebar/SidebarHeader';
import SidebarMinimizer from './Sidebar/SidebarMinimizer';

type SidebarProps = RouteComponentProps<{}>;

class Sidebar extends React.Component<SidebarProps, {}> {
  constructor(props: SidebarProps, context: {}) {
    super(props, context);

    this.handleClick = this.handleClick.bind(this);
  }

  // todo Sidebar nav secondLevel
  // secondLevelActive(routeName) {
  //   return this.props.location.pathname.indexOf(routeName) > -1
  //      ? "nav nav-second-level collapse in" : "nav nav-second-level collapse";
  // }

  public render() {

    const props = this.props;
    const activeRoute = this.activeRoute;
    const handleClick = this.handleClick;

    // badge addon to NavItem
    const addBadge = (badge: NavTypes.NavBadge) => {
      if (badge) {
        const classes = classNames(badge.className);
        return (<Badge className={classes} color={badge.variant}>{badge.text}</Badge>);
      } else {
        return null;
      }
    };

    // simple wrapper for nav-title item
    // tslint:disable-next-line:no-any
    const wrapper = (item: NavTypes.NavItem): React.ReactNode => {
       return (
         item.wrapper && item.wrapper.element
          ? (React.createElement(item.wrapper.element, item.wrapper.attributes, item.name))
          : item.name
        );
      };

    // nav list section title
    const title =  (t: NavTypes.NavItem, key: number): React.ReactNode => {
      const classes = classNames('nav-title', t.class);
      return (<li key={key} className={classes}>{wrapper(t)} </li>);
    };

    // nav list divider
    const divider = (d: NavTypes.NavItem, key: number) => {
      const classes = classNames('divider', d.class);
      return (<li key={key} className={classes} />);
    };

    // nav item with nav link
    const navItem = (item: NavTypes.NavItem, key: number) => {
      const classes = {
        item: classNames(item.class) ,
        link: classNames('nav-link', item.variant ? `nav-link-${item.variant}` : ''),
        icon: classNames(item.icon)
      };
      return (
        navLink(item, key, classes)
      );
    };

    // nav link
    const navLink = (item: NavTypes.NavItem, key: number, classes: NavTypes.NavClasses) => {
      const url = item.url ? item.url : '';
      return (
        <NavItem key={key} className={classes.item}>
          { isExternal(url) ?
            <RsNavLink href={url} className={classes.link} active={true}>
              <i className={classes.icon} />{item.name}{item.badge && addBadge(item.badge)}
            </RsNavLink>
            :
            <NavLink to={url} className={classes.link} activeClassName="active">
              <i className={classes.icon} />{item.name}{item.badge && addBadge(item.badge)}
            </NavLink>
          }
        </NavItem>
      );
    };

    // nav dropdown
    const navDropdown = (item: NavTypes.NavItem, key: number) => {
      return (
        <li key={key} className={activeRoute(item.url, props)}>
          <a
            className="nav-link nav-dropdown-toggle"
            href="#"
            onClick={handleClick}
          >
            <i className={item.icon} />{item.name}
          </a>
          <ul className="nav-dropdown-items">
            {item.children && navList(item.children)}
          </ul>
        </li>
      );
    };

    // nav type
    const navType = (item: NavTypes.NavItem, idx: number): React.ReactNode => {
      if (item.children) {
        return navDropdown(item, idx);
      }

      switch (item.type || NavTypes.NavItemType.NAV_REGULAR) {
        case NavTypes.NavItemType.NAV_DIVIDER:
          return divider(item, idx);

        case NavTypes.NavItemType.NAV_TITLE:
          return title(item, idx);

        case NavTypes.NavItemType.NAV_REGULAR:
        default:
          return navItem(item, idx);
      }
    };

    // nav list
    const navList = (items: NavTypes.NavItem[]): React.ReactNode => {
      return items.map((item, index) => navType(item, index));
    };

    const isExternal = (url: string) => {
      const link = url ? url.substring(0, 4) : '';
      return link === 'http';
    };

    // sidebar-nav root
    return (
      <div className="sidebar">
        <SidebarHeader/>
        <SidebarForm/>
        <nav className="sidebar-nav">
          <Nav>
            {navList(nav.items)}
          </Nav>
        </nav>
        <SidebarFooter/>
        <SidebarMinimizer/>
      </div>
    );
  }

  private handleClick(e: React.MouseEvent<HTMLElement>) {
    e.preventDefault();

    const parent = e.currentTarget.parentElement;
    if (parent) {
      parent.classList.toggle('open');
    }
  }

  private activeRoute(routeName: string, props: SidebarProps) {
    // return this.props.location.pathname.indexOf(routeName) > -1
    //    ? 'nav-item nav-dropdown open' : 'nav-item nav-dropdown';
    return props.location.pathname.indexOf(routeName) > -1 ? 'nav-item nav-dropdown open' : 'nav-item nav-dropdown';
  }
}

export default Sidebar;
