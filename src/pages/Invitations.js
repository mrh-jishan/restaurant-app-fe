import { Button, Col, Row, Space, Table, Tag, Typography } from 'antd';
import React, { useCallback, useEffect } from 'react';
import { connect } from 'react-redux';
import { initInvitationsLoad } from '../store/actions/invitations';

const Invitations = ({ loadInvitations, invitations }) => {
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

    const initloadInvitations = useCallback(() => {
        loadInvitations()
    }, [loadInvitations]);


    useEffect(() => {
        initloadInvitations()
    }, [initloadInvitations])

    return (
        <>
            <Row align='middle' justify='center'>
                <Col>
                    <Typography.Title>My invitations</Typography.Title>

                    <Row align='middle' justify='center' gutter={[16, 24]}>
                        <Col span={24}>
                            <Table
                                size="large"
                                columns={columns}
                                rowKey="id"
                                dataSource={invitations}
                                bordered />
                        </Col>
                    </Row>
                </Col>
            </Row>
        </>
    )
}


const mapDispatchToProps = dispatch => ({
    loadInvitations: () => dispatch(initInvitationsLoad()),

});

const mapStateToProps = ({ invitations }) => ({
    invitations: invitations.invitations
});

export default connect(mapStateToProps, mapDispatchToProps)(Invitations);