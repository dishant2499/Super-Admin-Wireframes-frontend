import React, {useState} from "react";
import axios from "axios";

import {Button, Form, Input, Modal, Select} from "antd";
import {PlusOutlined} from "@ant-design/icons";
const { Option } = Select;

const validateMessages = {
    required: '${label} is required!',

};

const AddAutorizedMGA = ()=>{
    const [modal2Open, setModal2Open] = useState(false);

    const onFinish = async (values) => {
        console.log(values);
        const addData =await axios.post('http://localhost:3002/program/adddata',values)

        console.log(addData);
        setModal2Open(false)
    };

    const handleChange = (value) => {
        console.log(`selected ${value}`);
    };
    return (
        <div>
            <Button
                icon={<PlusOutlined />}
                size="large"
                style={{ backgroundColor: "black", color: "white", borderRadius: "10px" }}
                onClick={() => setModal2Open(true)}
            >
                Add MGA
            </Button>
            <Modal
                title="Create Program"
                centered
                visible={modal2Open}
                footer={null}
                onCancel={() => setModal2Open(false)}
            >
                <div style={{height:'300px'}}>
                    <Form  name="nest-messages" onFinish={onFinish} validateMessages={validateMessages}>


                        <Form.Item

                            name="Mganame"
                            label="MGA"
                            rules={[
                                {
                                    required: true,
                                },
                            ]}

                        >
                            <Select placeholder="Choose Mga"  mode="multiple"
                                    allowClear
                                    defaultValue={[]}
                                    onChange={handleChange}
                            >
                                <Option value="jack1">Jack1</Option>
                                <Option value="lucy1">Lucy1</Option>
                                <Option value="tom1">Tom1</Option>
                            </Select>
                        </Form.Item>

                        <Form.Item
                            name="AssociatedProgram"
                            label="Program"
                            rules={[
                                {
                                    required: true,
                                },
                            ]}
                        >
                            <Select placeholder="Choose Program"
                                    mode="multiple"
                                    allowClear
                                    defaultValue={[]}
                            >
                                <Option value="jack">Jack</Option>
                                <Option value="lucy">Lucy</Option>
                                <Option value="tom">Tom</Option>
                            </Select>
                        </Form.Item>

                        <Form.Item
                            name="States"
                            label="Authorized in states"
                            rules={[
                                {
                                    required: true,
                                },
                            ]}
                        >
                            <Select placeholder="Choose States"
                                    mode="multiple"
                                    allowClear
                                    defaultValue={[]}
                            >
                                <Option value="GA">GA</Option>
                                <Option value="CA">CA</Option>
                                <Option value="CO">CO</Option>
                                <Option value="FL">FL</Option>
                                <Option value="AZ">AZ</Option>
                                <Option value="AK">AK</Option>
                            </Select>
                        </Form.Item>

                        <Form.Item
                            name='Commission'
                            label="Commission in %"
                            rules={[
                                {
                                    required: true,
                                },
                            ]}
                        >
                            <Input placeholder="13" />
                        </Form.Item>

                        <Form.Item
                            name="Status"
                            label="Choose Status"
                            rules={[
                                {
                                    required: true,
                                },
                            ]}
                        >
                            <Select placeholder="Choose Status"

                            >
                                <Option value="Active">Active</Option>
                                <Option value="InActive">InActive</Option>

                            </Select>
                        </Form.Item>

                        <Form.Item style={{display:'flex', justifyContent:'center'}}>
                            <Button type="primary" htmlType="submit" style={{marginRight:'10px'}} onClick={() => setModal2Open(false)}>
                                cancel
                            </Button>
                            <Button type="primary" htmlType="submit">
                                Submit
                            </Button>
                        </Form.Item>

                    </Form>
                </div>

            </Modal>

        </div>
    )


}

export default AddAutorizedMGA;