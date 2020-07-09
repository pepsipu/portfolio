import React from 'react';
import Header from './Header/Header';
import Projects from './Content/Projects/Projects';

const tabs = {
  projects: {
    displayName: 'projects',
    name: 'projects',
    component: Projects,
  },
  blog: {
    displayName: 'blog',
    name: 'blog',
    component: () => {
      window.location.href = 'https://blog.pepsipu.com';
      return (
        <>
        </>
      );
    },
  },
  ctfs: {
    displayName: 'ctfs',
    name: 'ctfs',
    component: () => {
      window.location.href = 'https://ctftime.org/team/59759';
      return (
        <>
        </>
      );
    },
  },
};

export default class App extends React.Component<any, any> {
  // no need to be in constructor
  // eslint-disable-next-line react/state-in-constructor
  state: AppState = {
    activeTab: null,
  };

  setTab = (newTab: ActiveTab) => this.setState({
    activeTab: newTab,
  });

  render() {
    const { activeTab } = this.state;
    const SelectedTab = activeTab ? tabs[activeTab].component : React.Fragment;
    return (
      <>
        <Header tabSetter={this.setTab} tabs={tabs} />
        <SelectedTab />
      </>
    );
  }
}

interface AppState {
  activeTab: ActiveTab
}

type ActiveTab = 'projects' | 'blog' | null;
