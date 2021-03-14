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

const InviteFriends = ({ isModalVisible, handleOk, handleCancel }) => {

    const [form] = Form.useForm();

    const onSubmit = useCallback((values) => {
        handleOk(values)
    }, [handleOk]);

    const closePopup = useCallback(() => {
        form.resetFields();
        handleCancel()
    }, [form, handleCancel]);

    return (
        <>
            <Modal title="Invite friends to modify the collections"
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
                        label="Enter email address"
                        name="email"
                        rules={[
                            {
                                required: true,
                                type: 'email',
                                message: 'Please valid email address!',
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

export default InviteFriends;