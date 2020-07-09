import React from "react";
import Header from './Header/Header'
import AboutMe from "./Content/AboutMe/AboutMe";

const tabs: Tabs = {
    aboutMe: AboutMe
};

export default class App extends React.Component<any, any> {
    state: AppState = {
        activeTab: null,
    }
    setTab = (newTab: ActiveTab) => this.setState({
        activeTab: newTab
    })
    render() {
        const SelectedTab = this.state.activeTab ? tabs[this.state.activeTab] : React.Fragment;
        return <>
            <Header tabSetter={this.setTab}/>
            <SelectedTab/>
        </>;
    }
}

interface AppState {
    activeTab: ActiveTab
}

interface Tabs {
    aboutMe: () => JSX.Element
}

type ActiveTab = 'aboutMe' | null
