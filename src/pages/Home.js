import { FolderAddFilled } from '@ant-design/icons';
import { Button, Checkbox, Col, Form, Input, notification, Row, Table, Tag, TimePicker, Typography } from 'antd';
import moment from 'moment';
import React, { useCallback, useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { AddFavourite } from '../components';
import { addCollection } from '../store/services/api';
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

const colors = ['magenta', 'red', 'volcano', 'orange', 'gold', 'lime', 'green', 'cyan', 'blue', 'geekblue', 'purple']

const Home = ({ loadRestaurants, restaurants, loadCollections }) => {

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
            title: 'Mathing Query',
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
        }
    ];

    const [params] = useState({
        page: 1,
        offset: 0,
        name: '',
        days: [0, 1, 2, 3, 4, 5, 6],
        timeRange: [moment('08:00', 'HH:mm'), moment('14:00', 'HH:mm')]
    })

    const [state, setState] = useState({ selectedRowKeys: [], selectedRestaurants: [] });

    const { selectedRowKeys, selectedRestaurants } = state;

    const [isModalVisible, setIsModalVisible] = useState(false);

    const openNotification = (message) => {
        notification.open({
            placement: 'bottomRight',
            description: message,
        });
    };

    const initloadRestaurants = useCallback(() => {
        loadRestaurants(params)
    }, [loadRestaurants, params]);

    useEffect(() => {
        initloadRestaurants()
    }, [initloadRestaurants])

    const onSelectChange = (selectedRowKeys, selectedRestaurants) => {
        setState({ selectedRowKeys, selectedRestaurants });
    };

    const showModal = () => {
        setIsModalVisible(true);
    };

    const handleOk = (values) => {
        const favourite_items = selectedRowKeys.map(id => {
            return { restaurant_id: id };
        });
        const body = {
            favourite: {
                favourite_items_attributes: favourite_items,
                name: values.name
            }
        }
        addCollection(body).then(res => {
            if (res.success) {
                setIsModalVisible(false);
                setState({ selectedRowKeys: [], selectedRestaurants: [] });
                loadCollections();
            }
            openNotification(res.message)
        }).catch(err => {
            openNotification('Sorry! Something went wrong...')
        })
    };

    const handleCancel = () => {
        setIsModalVisible(false);
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
                        onFinish={(values) => loadRestaurants(values)}
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
                            <Checkbox.Group options={options} />
                        </Form.Item>

                        <Form.Item
                            label="Select opening time"
                            name="timeRange"
                        >
                            <TimePicker.RangePicker
                                format="HH:mm" />
                        </Form.Item>

                        <Form.Item {...tailLayout}>
                            <Button type="primary" htmlType="submit">
                                Search
                                </Button>
                        </Form.Item>

                    </Form>

                    <Row align='middle' justify='space-between' style={{ marginBottom: 20 }}>
                        <Col span={3}>
                            <Button type='primary'
                                disabled={selectedRestaurants.length === 0}
                                icon={<FolderAddFilled />}
                                onClick={showModal}>
                                Add to collections
                            </Button>
                        </Col>
                    </Row>
                    <Row align='middle' justify='center' gutter={[16, 24]}>
                        <Col span={24}>
                            {selectedRestaurants.map((value, index) => (
                                <Tag
                                    style={{ marginBottom: 5 }}
                                    key={index} color={colors[(selectedRestaurants.length + index) % 11]} >
                                    {value.name}
                                </Tag>
                            )
                            )}
                        </Col>
                        <Col span={24}>
                            <Table
                                rowSelection={{
                                    selectedRowKeys,
                                    onChange: onSelectChange,
                                }}
                                size="large"
                                columns={columns}
                                rowKey="id"
                                dataSource={restaurants}
                                bordered />
                        </Col>

                        <AddFavourite isModalVisible={isModalVisible} handleOk={handleOk} handleCancel={handleCancel} />
                    </Row>
                </Col>
            </Row>
        </>
    )
}

const mapDispatchToProps = dispatch => ({
    loadRestaurants: (params) => dispatch(initRestaurantsLoad(params))
});

const mapStateToProps = ({ restaurants, collections }) => ({
    restaurants: restaurants.restaurants
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);