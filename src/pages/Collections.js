import { Col, Row, Space, Table, Tag, Typography , Button} from 'antd';
import React, { useCallback, useEffect } from 'react';
import { connect } from 'react-redux';
import { initCollectionsLoad } from '../store/actions/collections';

const Collections = ({ loadCollections, collections }) => {
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
                                dataSource={collections}
                                bordered />
                        </Col>
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