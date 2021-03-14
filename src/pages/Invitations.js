import { Col, Row, Table, Typography } from 'antd';
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
            title: 'Email',
            dataIndex: 'email',
            key: 'email',
        },
        {
            title: 'Token',
            dataIndex: 'token',
            key: 'token',
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
                    <Typography.Title>My sent invitations</Typography.Title>

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