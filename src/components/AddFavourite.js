import { Form, Input, Modal } from 'antd';
import React, { useCallback } from 'react';


const layout = {
    labelCol: {
        span: 8,
    },
    wrapperCol: {
        span: 16,
    },
};

const AddFavourite = ({ isModalVisible, handleOk, handleCancel }) => {

    const [form] = Form.useForm();

    const onSubmit = useCallback((values) => {
        handleOk(values)
        form.resetFields();
    }, [handleOk, form]);

    const closePopup = useCallback(() => {
        form.resetFields();
        handleCancel()
    }, [form, handleCancel]);

    return (
        <>
            <Modal title="Save restaurants into collections"
                visible={isModalVisible}
                onOk={form.submit}
                onCancel={closePopup}>
                <Form
                    {...layout}
                    name="basic"
                    form={form}
                    onFinish={onSubmit}
                >
                    <Form.Item
                        label="Enter collection name"
                        name="name"
                        rules={[
                            {
                                required: true,
                                message: 'Please input name of the category!',
                            },
                        ]}
                    >
                        <Input />
                    </Form.Item>
                </Form>
            </Modal>
        </>
    );
};

export default AddFavourite;