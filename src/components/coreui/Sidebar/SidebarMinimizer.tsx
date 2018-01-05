import * as React from 'react';

class SidebarMinimizer extends React.Component {
  public render(): React.ReactNode {
    return (
      <button
        className="sidebar-minimizer"
        type="button"
        onClick={(event) => { this.sidebarMinimize(); this.brandMinimize(); }}
      />
    );
  }

  private sidebarMinimize() {
    document.body.classList.toggle('sidebar-minimized');
  }

  private brandMinimize() {
    document.body.classList.toggle('brand-minimized');
  }
}

export default SidebarMinimizer;
