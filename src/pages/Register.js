import { Button, Col, Form, Input, Layout, Row, Typography } from 'antd';
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';

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

const Register = ({ history }) => {

  useEffect(() => {
    // const user = auth.currentUser;
    console.log('user: ');
  }, []);

  const onFinish = (values) => {
    console.log('Success:', values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
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
              initialValues={{
                remember: true,
              }}
              onFinish={onFinish}
              onFinishFailed={onFinishFailed}
            >

            <Form.Item
                label="Full Name"
                name="name"
                rules={[
                  {
                    required: true,
                    message: 'Please input your full name!',
                  },
                ]}
              >
                <Input />
              </Form.Item>

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
                  Register
        </Button>
              </Form.Item>

              <Form.Item {...tailLayout} name="remember" valuePropName="checked">
                Already have an account?
                                <Link to="/auth/login">
                  <Button type="link" >Login Here</Button>
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

export default Register;