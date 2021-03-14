import { Button, Col, Layout, Row, Space, Table, Tag, Typography } from 'antd';
import React, { useCallback, useEffect } from 'react';
import { connect } from 'react-redux';
import { initCollaborateLoad } from '../store/actions/collaborate';
import { Footer } from './../components';


const { Content } = Layout;


const Collaborate = ({ loadCollaborate, collaborates, match }) => {


    const { params } = match;

    const columns = [
        {
            title: 'id',
            dataIndex: 'id',
            key: 'id'
        },
        {
            title: 'Collection Name',
            dataIndex: 'name',
            key: 'name',
        },
        {
            title: 'Restaurant Name',
            dataIndex: 'favourite_items',
            key: 'favourite_items',
            render: items => (
                <span>
                    {items.map((fav, index) => (<Tag key={index} style={{ marginBottom: 4 }}>{fav.restaurant.name}</Tag>))}
                </span>
            ),
        },
        {
            title: 'Action',
            key: 'action',
            render: (text, record) => (
                <Space size="middle">
                    <Button type="primary">Update</Button>
                    <Button danger type="primary">Delete</Button>
                </Space>
            ),
        },
    ];

    const initloadcollaborates = useCallback(() => {
        loadCollaborate(params.token)
    }, [loadCollaborate, params]);

    useEffect(() => {
        initloadcollaborates()
    }, [initloadcollaborates])


    return (
        <>
            <Layout className="layout">
                <Content className="site-layout" style={{ padding: '0 50px', marginTop: 64 }}>
                    <Row align='middle' justify='center'>
                        <Col>
                            <Typography.Title>Collection list</Typography.Title>

                            <Row align='middle' justify='center' gutter={[16, 24]}>
                                <Col span={24}>
                                    <Table
                                        size="large"
                                        columns={columns}
                                        rowKey="id"
                                        dataSource={collaborates}
                                        bordered />
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Content>
                <Footer />
            </Layout>
        </>
    )
}

const mapDispatchToProps = dispatch => ({
    loadCollaborate: (token) => dispatch(initCollaborateLoad(token)),

});

const mapStateToProps = ({ collaborates }) => ({
    collaborates: collaborates.collaborates
});

export default connect(mapStateToProps, mapDispatchToProps)(Collaborate);