import { Checkbox, Col, Input, Row, Table, Tag } from 'antd';
import React, { useCallback, useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { initRestaurantsLoad } from './../store/actions/restaurant';

const options = [
    { label: 'Sunday', value: 1 },
    { label: 'Monday', value: 2 },
    { label: 'Tuesday', value: 3 },
    { label: 'Wednesday', value: 4 },
    { label: 'Thursday', value: 5 },
    { label: 'Friday', value: 6 },
    { label: 'Saturday', value: 7 }
];

const Home = ({ loadRestaurants, restaurants }) => {

    const [params, setParams] = useState({ page: 1, offset: 0, name: '', days: [0, 2, 4, 5, 6] })
    const [selectedRowKeys, setSelectedRowKeys] = useState([])

    const initloadRestaurants = useCallback(() => {
        loadRestaurants(params)
    }, [loadRestaurants, params]);

    const columns = [
        {
            title: 'id',
            dataIndex: 'id',
            key: 'id'
        },
        {
            title: 'Name',
            dataIndex: 'name',
            key: 'name',
        },
        {
            title: 'Opening Hours',
            dataIndex: 'opening_hours',
            key: 'opening_hours',
            render: opening_hours => (
                <span>
                    {opening_hours.map(opening_hour => {
                        return (
                            <Tag key={opening_hour.id}>
                                {opening_hour.week_day}
                            </Tag>
                        );
                    })}
                </span>
            ),
        },
        // {
        //     title: 'Action',
        //     key: 'action',
        //     render: () => (
        //         <Space size="middle">
        //             <Button type="primary" shape="circle" icon={<LikeFilled />} />
        //         </Space>
        //     ),
        // },
    ];

    useEffect(() => {
        initloadRestaurants()
    }, [initloadRestaurants])


    const onChange = (e) => {
        console.log('event: ', e);
    }

    const onSearch = (e) => {
        console.log('event: ', e);
    }

    const rowSelection = {
        onChange: key => {
            setSelectedRowKeys(key)
        },
    };

    return (
        <>
            <Row align='middle' justify='center'>
                <Col>
                    <Row align='middle' justify='center' style={{ marginTop: 25, marginBottom: 25 }}>
                        <Input.Search placeholder="search by name" allowClear enterButton="Search" size="large" onSearch={onSearch} />
                    </Row>
                    <Row align='middle' justify='center' style={{ marginTop: 25, marginBottom: 25 }}>
                        <Checkbox.Group options={options} defaultValue={[1]} onChange={onChange} />
                    </Row>
                    <Row align='middle' justify='center' gutter={[16, 24]}>
                        <Col span={24}>
                            <Table
                                rowSelection={rowSelection}
                                size="large"
                                columns={columns}
                                rowKey="id"
                                dataSource={restaurants}
                                bordered />
                        </Col>
                    </Row>
                </Col>
            </Row>
        </>
    )
}

const mapDispatchToProps = dispatch => ({
    loadRestaurants: (params) => dispatch(initRestaurantsLoad(params)),
});

const mapStateToProps = ({ restaurants }) => ({
    restaurants: restaurants.restaurants
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);