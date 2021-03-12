import { Col, Layout, Row, Typography } from 'antd';
import React, { useEffect } from 'react';
import Footer from '../components/Footer';
// import googleIcon from './../images/google-icon.svg';
// import { auth, signInWithGoogle } from "./../services/firebase";




const { Header, Content } = Layout;

const Login = ({ history }) => {

    useEffect(() => {
        // const user = auth.currentUser;
        console.log('user: ');
    }, []);

    return (
        <Layout>
            <Header>
                <div className="logo" />
            </Header>
            <Content style={{ padding: '0 50px', marginTop: 64 }}>
                <Row align='middle'
                    justify='center'
                    style={{ minHeight: '300px' }}>
                    <Col >
                        <Typography.Title>Welcome to Find-RESTAURANT</Typography.Title>
                        <button className="login-provider-button"
                            onClick={()=>{}}>
                            {/* <img src={googleIcon} alt="google icon" height={40} width={40} /> */}
                            <span> Signin with Google</span>
                        </button>
                    </Col>
                </Row>
            </Content>
            <Footer />
        </Layout>
    )
}

export default Login;