import { Button, Col, Form, Input, Layout, Modal, Row, Typography } from 'antd';
import React from 'react';
import { Link } from 'react-router-dom';
import { Footer } from '../components';
import { register } from '../store/services/api';

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

const Register = ({ history }) => {

  const onFinish = (values) => {
    register({ user: values }).then(({ data }) => {
      if (data.success) {
        openSuccess("Registration Success")
        history.push('/login')
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
                label="Full Name"
                name="name"
                rules={[
                  {
                    required: true,
                    min: 6,
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
                    min: 6,
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
                    min: 6,
                    max: 12,
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

              <Form.Item>
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