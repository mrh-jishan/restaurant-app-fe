import { FolderAddFilled } from '@ant-design/icons';
import { Button, Col, notification, Row, Space, Table, Tag, Typography } from 'antd';
import React, { useCallback, useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { InviteFriends } from '../components';
import { initCollectionsLoad } from '../store/actions/collections';
import { addInvitations } from './../store/services/api';

const Collections = ({ loadCollections, collections }) => {

    const [isModalVisible, setIsModalVisible] = useState(false);

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
                    <Button danger>Delete</Button>
                </Space>
            ),
        },
    ];

    const initloadCollections = useCallback(() => {
        loadCollections()
    }, [loadCollections]);


    useEffect(() => {
        initloadCollections()
    }, [initloadCollections])

    const showModal = () => {
        setIsModalVisible(true);
    };

    const handleOk = (values) => {
        addInvitations({ email: values.email }).then(res => {
            if (res.success) {
                setIsModalVisible(false);
            }
            openNotification(res.message)
        }).catch(err => {
            openNotification('Sorry! Something went wrong...')
        })
    };

    const handleCancel = () => {
        setIsModalVisible(false);
    };

    const openNotification = (message) => {
        notification.open({
            placement: 'bottomRight',
            description: message,
        });
    };

    return (
        <>
            <Row align='middle' justify='center'>
                <Col>
                    <Typography.Title>Collection list</Typography.Title>

                    <Row align='middle' justify='space-between' style={{ marginBottom: 20 }}>
                        <Col span={3}>
                            <Button type='primary'
                                icon={<FolderAddFilled />}
                                onClick={showModal}>
                                Invite Friends
                            </Button>
                        </Col>
                    </Row>

                    <Row align='middle' justify='center' gutter={[16, 24]}>
                        <Col span={24}>
                            <Table
                                size="large"
                                columns={columns}
                                rowKey="id"
                                dataSource={collections}
                                bordered />
                        </Col>

                        <InviteFriends isModalVisible={isModalVisible} handleOk={handleOk} handleCancel={handleCancel} />

                    </Row>
                </Col>
            </Row>
        </>
    )
}


const mapDispatchToProps = dispatch => ({
    loadCollections: () => dispatch(initCollectionsLoad()),

});

const mapStateToProps = ({ collections }) => ({
    collections: collections.collections
});

export default connect(mapStateToProps, mapDispatchToProps)(Collections);