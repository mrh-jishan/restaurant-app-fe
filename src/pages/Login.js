import { Button, Col, Form, Input, Layout, Modal, Row, Typography } from 'antd';
import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Footer } from '../components';
import { successLogin } from '../store/actions/auth';
import { signin } from './../store/services/api';


const layout = {
    labelCol: {
        span: 8,
    },
    wrapperCol: {
        span: 16,
    },
};
const tailLayout = {
    wrapperCol: {
        offset: 8,
        span: 16,
    },
};

const { Header, Content } = Layout;

const openSuccess = (message) => {
    Modal.success({
        title: 'Success Message',
        content: message,
    });
}

const openError = (message) => {
    Modal.error({
        title: 'Error Message',
        content: message,
    });
}

const Login = ({ history, loginSuccess }) => {

    const onFinish = (values) => {
        signin({ auth: values }).then(({ data }) => {
            if (data.success) {
                loginSuccess(data.data.user, data.data.token)
                openSuccess("Login Success")
                history.push('/secure/home')
            } else {
                openError(data.message)
            }
        }).catch(err => {
            openError("Something went wrong !!!")
        })
    };

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
                        <Typography.Title>Welcome to FIND-RESTAURANT</Typography.Title>
                        <Form
                            {...layout}
                            name="basic"
                            onFinish={onFinish}
                        >
                            <Form.Item
                                label="Username"
                                name="username"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Please input your username!',
                                    },
                                ]}
                            >
                                <Input />
                            </Form.Item>

                            <Form.Item
                                label="Password"
                                name="password"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Please input your password!',
                                    },
                                ]}
                            >
                                <Input.Password />
                            </Form.Item>

                            <Form.Item {...tailLayout}>
                                <Button type="primary" htmlType="submit">
                                    Login
                                </Button>
                            </Form.Item>

                            <Form.Item>
                                Don't you have an account?
                                <Link to="/auth/register">
                                    <Button type="link" >Register Here</Button>
                                </Link>
                            </Form.Item>

                        </Form>
                    </Col>
                </Row>
            </Content>
            <Footer />
        </Layout>
    )
}

const mapDispatchToProps = dispatch => ({
    loginSuccess: (user, token) => dispatch(successLogin(user, token)),
});

export default connect(null, mapDispatchToProps)(Login);