import { ShareAltOutlined } from '@ant-design/icons';
import { Button, Checkbox, Col, Form, Input, Row, Space, Table, Tag, TimePicker, Typography } from 'antd';
import moment from 'moment';
import React, { useCallback, useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { initRestaurantsLoad } from './../store/actions/restaurant';

const options = [
    { label: 'Sunday', value: 0 },
    { label: 'Monday', value: 1 },
    { label: 'Tuesday', value: 2 },
    { label: 'Wednesday', value: 3 },
    { label: 'Thursday', value: 4 },
    { label: 'Friday', value: 5 },
    { label: 'Saturday', value: 6 }
];

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


const Home = ({ loadRestaurants, restaurants }) => {

    const [params, setParams] = useState({
        page: 1,
        offset: 0,
        name: '',
        days: [0, 1, 2, 3, 4, 5, 6],
        timeRange: [moment('01:00', 'HH:mm'), moment('23:00', 'HH:mm')]
    })
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
            dataIndex: 'open_hours',
            key: 'open_hours',
        },
        {
            title: 'Search Hours',
            dataIndex: 'opening_hours',
            key: 'opening_hours',
            render: opening_hours => (
                <span>
                    {opening_hours.map(opening_hour => {
                        return (
                            <Tag key={opening_hour.id}>
                                {opening_hour.week_day} - {moment(opening_hour.opens).format('HH:mm')} : {moment(opening_hour.closes).format('HH:mm')}
                            </Tag>
                        );
                    })}
                </span>
            ),
        },
        {
            title: 'Action',
            key: 'action',
            render: () => (
                <Space size="middle">
                    <Button type="primary" shape="circle" icon={<ShareAltOutlined />} />
                </Space>
            ),
        },
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

    function onTimeChange(time, timeString) {
        console.log(time, timeString);
    }

    const onFinish = (values) => {
        loadRestaurants(values)
    };

    return (
        <>
            <Row align='middle' justify='center'>
                <Col>

                    <Typography.Title>Filter restaurants</Typography.Title>
                    <Form
                        {...layout}
                        name="basic"
                        initialValues={params}
                        onFinish={onFinish}
                    >
                        <Form.Item
                            label="Search by name"
                            name="name"
                        >
                            <Input
                                placeholder="search by name"
                                allowClear
                                size="large" />
                        </Form.Item>

                        <Form.Item
                            label="Select opening days"
                            name="days"
                        >
                            <Checkbox.Group options={options} onChange={onChange} />
                        </Form.Item>

                        <Form.Item
                            label="Select opening time"
                            name="timeRange"
                        >
                            <TimePicker.RangePicker
                                format="HH:mm"
                                onChange={onTimeChange} />
                        </Form.Item>

                        <Form.Item {...tailLayout}>
                            <Button type="primary" htmlType="submit">
                                Search
                                </Button>
                        </Form.Item>

                    </Form>

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