import React from 'react';
import { RouteComponentProps } from 'react-router';
import { Link, Route } from 'react-router-dom';
import { Breadcrumb, BreadcrumbItem } from 'reactstrap';
import routes from '../../routes';

const findRouteName = (url: string) => routes[url];

const getPaths = (pathname: string) => {
  const paths = ['/'];

  if (pathname === '/') {
    return paths;
  }

  pathname.split('/').reduce((prev, curr, index) => {
    const currPath = `${prev}/${curr}`;
    paths.push(currPath);
    return currPath;
  });
  return paths;
};

type BreadcrumbsItemProps = RouteComponentProps<{}>;

const BreadcrumbsItem: React.SFC<BreadcrumbsItemProps> = ({match}) => {
  const routeName = findRouteName(match.url);
  if (routeName) {
    return (
      match.isExact ?
        (
          <BreadcrumbItem active={true}>{routeName}</BreadcrumbItem>
        ) :
        (
          <BreadcrumbItem>
            <Link to={match.url || ''}>
              {routeName}
            </Link>
          </BreadcrumbItem>
        )
    );
  }
  return null;
};

type BreadcrumbsProps = RouteComponentProps<{}>;

const Breadcrumbs: React.SFC<BreadcrumbsProps> = ({location : {pathname}, match}) => {
  const paths = getPaths(pathname);
  const items = paths.map((path, i) => <Route key={i++} path={path} component={BreadcrumbsItem}/>);
  return (
    <Breadcrumb>
      {items}
    </Breadcrumb>
  );
};

const BreadcrumbComponent: React.SFC = () => {
  return (
    <div>
      <Route path="/:path" component={Breadcrumbs} />
    </div>
  );
};

export default BreadcrumbComponent;
