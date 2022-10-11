import React from "react";
import {
    HeaderContainer, Header, SkipToContent, HeaderMenuButton, HeaderName,
    HeaderNavigation, HeaderMenu, HeaderMenuItem, HeaderGlobalBar,
    HeaderGlobalAction, SideNav, SideNavItems, Content,
    SideNavMenu, SideNavMenuItem, Theme
} from '@carbon/react';
import {
    Notification,
    Search,
    Switcher,
    Fade,
} from '@carbon/react/icons';
import { Route, Routes, BrowserRouter, Link } from 'react-router-dom';

import ErrorBoundary from "../../components/ErrorBoundary";
import LandingPage from '../LandingPage';
import NotFound from '../../components/NotFound';
import StockItemList from "../StockItemList";
import FormPredictions from "../FormPredictions";

class UIShell extends React.Component {

    constructor(props) {
      super(props);
      this.state = {
        activeItem: `/${window.location.pathname.split('/')[1] ?? ''}`
      };
    }

    render() {
        return (
            <BrowserRouter>
                    <HeaderContainer
                        render={({ isSideNavExpanded, onClickSideNavExpand }) => (
                            <div>
                                <Header aria-label="IBM Platform Name">
                                    <SkipToContent />
                                    <HeaderMenuButton
                                        aria-label="Open menu"
                                        onClick={onClickSideNavExpand}
                                        isActive={isSideNavExpanded}
                                    />
                                    <HeaderName href="#" prefix="EY">
                                        Energy Predictions
                                    </HeaderName>
                                    <HeaderGlobalBar>
                                        <HeaderGlobalAction
                                            aria-label="Notifications"
                                            tooltipAlignment="end">
                                            <Notification size={20} />
                                        </HeaderGlobalAction>
                                    </HeaderGlobalBar>
                                    <ErrorBoundary>
                                        <SideNav aria-label="Side navigation" expanded={isSideNavExpanded}>
                                            <SideNavItems>
                                                <SideNavMenuItem element={Link} to='/'
                                                    isActive={this.state.activeItem === '/'}
                                                    onClick={() => { this.setState({ activeItem: '/' }) }}>
                                                    Home Page
                                                </SideNavMenuItem>
                                                <SideNavMenu renderIcon={Fade} title="Actions" defaultExpanded>
                                                    <SideNavMenuItem element={Link} to='/form'
                                                        isActive={this.state.activeItem === '/form'}
                                                        onClick={() => { this.setState({ activeItem: '/form' }) }}>
                                                        Energy Predictions
                                                    </SideNavMenuItem>
                                                </SideNavMenu>
                                            </SideNavItems>
                                        </SideNav>
                                    </ErrorBoundary>
                                </Header>
                            </div>
                        )}
                    />
                <Content className='content'>
                    <Routes>
                        <Route path="/" element={<LandingPage />} />
                        <Route path="/inventory/items" element={<StockItemList stockService={this.props.stockService} />} />
                        <Route path="/form" element={<FormPredictions formService={this.props.formService} />} />
                        <Route path="*" element={<NotFound />} />
                    </Routes>
                </Content>
            </BrowserRouter>
        );
    }
}

export default UIShell;
