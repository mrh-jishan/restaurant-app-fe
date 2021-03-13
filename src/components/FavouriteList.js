import { Drawer, List, Tag } from 'antd';
import React, { useCallback, useEffect } from 'react';

const FavouriteList = ({ onClose, visible, loadCollections, data }) => {

    const initloadCollections = useCallback(() => {
        loadCollections()
    }, [loadCollections]);


    useEffect(() => {
        initloadCollections()
    }, [initloadCollections])

    return (
        <>
            <Drawer
                title="Collection List"
                placement="right"
                width={1200}
                closable={false}
                onClose={onClose}
                visible={visible}
            >
                <List
                    size="large"
                    bordered
                    dataSource={data}
                    renderItem={(item, index) => (<List.Item>
                        <List.Item.Meta
                            title={<a href="https://ant.design">{item.name}</a>}
                            description={item.favourite_items.map((fav, key)=>(
                                <Tag key={key} style={{marginBottom: 4}}>{fav.restaurant.name} - {fav.restaurant.open_hours}</Tag>
                            ))}
                        />
                    </List.Item>)}
                />
            </Drawer>
        </>
    );
};

export default FavouriteList;
