import { Checkbox, Col, Input, Row, Space, Table, Tag } from 'antd';
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { initRestaurantsLoad } from './../store/actions/restaurant';

const columns = [
    {
        title: 'Name',
        dataIndex: 'name',
        key: 'name',
        render: text => <a>{text}</a>,
    },
    {
        title: 'Age',
        dataIndex: 'age',
        key: 'age',
    },
    {
        title: 'Address',
        dataIndex: 'address',
        key: 'address',
    },
    {
        title: 'Tags',
        key: 'tags',
        dataIndex: 'tags',
        render: tags => (
            <>
                {tags.map(tag => {
                    let color = tag.length > 5 ? 'geekblue' : 'green';
                    if (tag === 'loser') {
                        color = 'volcano';
                    }
                    return (
                        <Tag color={color} key={tag}>
                            {tag.toUpperCase()}
                        </Tag>
                    );
                })}
            </>
        ),
    },
    {
        title: 'Action',
        key: 'action',
        render: (text, record) => (
            <Space size="middle">
                <a>Invite {record.name}</a>
                <a>Delete</a>
            </Space>
        ),
    },
];

const data = [
    {
        key: '1',
        name: 'John Brown',
        age: 32,
        address: 'New York No. 1 Lake Park',
        tags: ['nice', 'developer'],
    },
    {
        key: '2',
        name: 'Jim Green',
        age: 42,
        address: 'London No. 1 Lake Park',
        tags: ['loser'],
    },
    {
        key: '3',
        name: 'Joe Black',
        age: 32,
        address: 'Sidney No. 1 Lake Park',
        tags: ['cool', 'teacher'],
    },
];


const options = [
    { label: 'Sunday', value: 1 },
    { label: 'Monday', value: 2 },
    { label: 'Tuesday', value: 3 },
    { label: 'Wednesday', value: 4 },
    { label: 'Thursday', value: 5 },
    { label: 'Friday', value: 6 },
    { label: 'Saturday', value: 7 }
];



const onChange = (e) => {
    console.log('event: ', e);
}

const onSearch = (e) => {
    console.log('event: ', e);
}

const Home = ({ loadRestaurants }) => {

    useEffect(() => {
        loadRestaurants({ page: 1, offset: 0 })
    }, [])

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
                        <Table columns={columns} dataSource={data} />
                    </Row>
                </Col>
            </Row>
        </>
    )
}

const mapDispatchToProps = dispatch => ({
    loadRestaurants: (params) => dispatch(initRestaurantsLoad(params)),
});

export default connect(null, mapDispatchToProps)(Home);