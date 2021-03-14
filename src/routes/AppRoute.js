import { Layout, Menu } from 'antd';
import React, { useEffect, useState } from "react";
import { Route, Switch } from "react-router-dom";
import Footer from '../components/Footer';
import history from '../history';
import { Invitations, Home, Collections } from '../pages';

const { Header, Content } = Layout;

const AppRoute = () => {

    const [current, setCurrent] = useState(null)

    useEffect(() => {
        const href = history.location.pathname;
        setCurrent(href)
    }, [])

    const handleClick = (e) => {
        if (e.key === 'logout') {
            // logOut();
        } else {
            setCurrent(e.key)
            history.push(e.key)
        }
    };

    return (
        <Layout className="layout">
            <Header style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
                <div className="logo" />
                <Menu
                    theme="dark"
                    mode="horizontal"
                    selectedKeys={[current]}
                    onClick={handleClick}>
                    <Menu.Item key='/secure/home'>Home</Menu.Item>
                    <Menu.Item key='/secure/collections'>Collections</Menu.Item>
                    <Menu.Item key='/secure/invitations'>Invitations</Menu.Item>

                    <Menu.Item key='logout' style={{ float: 'right' }}>Logout</Menu.Item>
                </Menu>
            </Header>
            <Content className="site-layout" style={{ padding: '0 50px', marginTop: 64 }}>
                <div className="site-layout-background" style={{ padding: 24, margin: '16px 0', minHeight: '100%' }}>
                    <Switch>
                        <Route exact path="/secure/home" component={Home} />
                        <Route exact path="/secure/collections" component={Collections} />
                        <Route exact path="/secure/invitations" component={Invitations} />
                    </Switch>
                </div>
            </Content>
            <Footer />
        </Layout>
    );
}

export default AppRoute;
