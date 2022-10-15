
import { FilterOutlined,DashOutlined} from '@ant-design/icons';
import {Space, Table, Typography, Button, Modal, Popconfirm, Form, Input, Select} from 'antd';
import './Program.css'
import AddProgram from "./addProgram";
import React, {useState} from "react";
const { Option } = Select;


const { Text} = Typography;



const Program = ()=>  {

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isEditOpen, setIsEditOpen] = useState(false);

    const validateMessages = {
        required: '${label} is required!',

    };

    const columns = [
        {
            title: 'Program Name',
            dataIndex: 'ProgramName',
            key: 'ProgramName',
            render: (text) => <a>{text}</a>,
        },
        {
            title: 'Covrage Type',
            dataIndex: 'CovrageType',
            key: 'CovrageType',
        },
        {
            title: 'Status',
            dataIndex: 'Status',
            key: 'Status',
        },

        {
            title: 'Action',
            key: 'Action',
            align: 'right',
            render: () => (
                <Space size="middle">
                    <Button>Button 1</Button>
                    <Button>Button 2</Button>
                    <DashOutlined onClick={()=>setIsModalOpen(!isModalOpen)} />
                </Space>
            ),
        },
    ];
    const data = [
        {
            key: '1',
            ProgramName: 'Health Insurance',
            CovrageType:['Life','Health'],
            Status: 'Active',
            Action: ['nice', 'developer'],
        },
        {
            key: '2',
            ProgramName: 'Life Insurance',
            CovrageType:"Life,Health",
            Status: 'Active',
            Action: ['loser'],
        },
        {
            key: '3',
            ProgramName: 'Travel Insurance',
            CovrageType: "Life,Health",
            Status: 'Active',
            Action: ['cool', 'teacher'],
        },
    ];


    const onFinish = (values) => {
        console.log(values);
    };

    const handleChange = (value) => {
        console.log(`selected ${value}`);
    };

    const Draweropen = ()=>{
        setIsEditOpen(true)
        setIsModalOpen(false)
    }


    return (
        <>
        <div style={{margin:'10px',display:'flex',justifyContent:"space-between"}}>
        <AddProgram/>
            <Button type="text" icon={<FilterOutlined />} size={"middle "} >
                filter
            </Button>
        </div>
        <div style={{
            margin:'10px'
        }}>
            <Table columns={columns} dataSource={data}  pagination={false} />
        </div>
            <div style={{margin:'10px'}}>
                <Text>showing 3 out of {data.length}</Text>
            </div>
            <Modal  open={isModalOpen}  onCancel={()=> setIsModalOpen(false)} footer={null} width={125} >
                <div style={{
                    height:'50px',
                    display:'flex',
                    flexDirection:'column'
                }}>
<a onClick={Draweropen}>edit</a>
                <a>remove</a>
                </div>
            </Modal>
            <Modal
                title="Create Program"
                centered
                open={isEditOpen}
                footer={null}
                onCancel={() => setIsEditOpen(false)}
            >
                <div style={{height:'300px'}}>
                    <Form  name="nest-messages" onFinish={onFinish} validateMessages={validateMessages}>
                        <Form.Item
                            name='ProgramName'
                            label="Name"
                            rules={[
                                {
                                    required: true,
                                },
                            ]}
                        >
                            <Input placeholder="Health insurance platinum" />
                        </Form.Item>

                        <Form.Item

                            name="chooseindustry"
                            label="Choose industry"
                            rules={[
                                {
                                    required: true,
                                },
                            ]}

                        >
                            <Select placeholder="Choose industry"  mode="multiple"
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
                            name="choosestates"
                            label="Choose States"
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
                                <Option value="jack">Jack</Option>
                                <Option value="lucy">Lucy</Option>
                                <Option value="tom">Tom</Option>
                            </Select>
                        </Form.Item>

                        <Form.Item
                            name="CovrageType"
                            label="Choose covrage Types"
                            rules={[
                                {
                                    required: true,
                                },
                            ]}
                        >
                            <Select placeholder="Choose covrage Types"
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
                            name="Status"
                            label="Choose Status"
                            rules={[
                                {
                                    required: true,
                                },
                            ]}
                        >
                            <Select placeholder="Choose Status"
                                    mode="multiple"
                                    allowClear
                                    defaultValue={[]}
                            >
                                <Option value="jack">Jack</Option>
                                <Option value="lucy">Lucy</Option>
                                <Option value="tom">Tom</Option>
                            </Select>
                        </Form.Item>

                        <Form.Item style={{display:'flex', justifyContent:'center'}}>
                            <Button type="primary" htmlType="submit" style={{marginRight:'10px'}} onClick={() => setIsEditOpen(false)}>
                                cancel
                            </Button>
                            <Button type="primary" htmlType="submit">
                                Submit
                            </Button>
                        </Form.Item>

                    </Form>
                </div>

            </Modal>
            </>
    )
}

export default Program