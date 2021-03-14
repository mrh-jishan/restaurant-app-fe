import { Button, Col, Row, Space, Table, Tag, Typography } from 'antd';
import React, { useCallback, useEffect } from 'react';
import { connect } from 'react-redux';
import { initCollaborateLoad } from '../store/actions/collaborate';

const Collaborate = ({ loadCollaborate, collaborates }) => {


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
        loadCollaborate()
    }, [loadCollaborate]);

    useEffect(() => {
        initloadcollaborates()
    }, [initloadcollaborates])


    return (
        <>
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
        </>
    )
}

const mapDispatchToProps = dispatch => ({
    loadCollaborate: () => dispatch(initCollaborateLoad()),

});

const mapStateToProps = ({ collaborates }) => ({
    collaborates: collaborates.collaborates
});

export default connect(mapStateToProps, mapDispatchToProps)(Collaborate);