import React, { useState } from "react"
import { Modal } from "antd"
import { PlusOutlined } from "@ant-design/icons"
import "./agency.css"
import {
  Button,
  Form,
  Input,
  Select,
  Space,
  Tooltip,
  Typography,
  Upload,
} from "antd"

const AddAgency = () => {
  const [isModelOpen, setIsModelOpen] = useState(false)

  const onFinish = (values) => {
    setIsModelOpen(false)
    console.log("Received values of form: ", values)
  }

  return (
    <div>
      <Button
        icon={<PlusOutlined />}
        size="large"
        style={{ backgroundColor: "black", color: "white", borderRadius: "10px" }}
        onClick={() => setIsModelOpen(true)}
      >
        Add Agency
      </Button>
      <Modal title="Add Agency"
             centered open={isModelOpen}
             width={500}
             okButtonProps={{
                 hidden: true,
             }}
             cancelButtonProps={{
                 hidden: true,
             }}>
        <div style={{ height: "70%" }}>
          <Form
            name="complex-form"
            onFinish={onFinish}
            labelCol={{ span: 8 }}
            wrapperCol={{ span: 16 }}>
            <Form.Item
                style={{
                  marginBottom: 0,
                }}
            >
              <Form.Item
                  name="name"
                  rules={[
                    {
                      required: true,message: "Please Enter Agency Name"
                    },
                  ]}
                  style={{
                    display: 'inline-block',
                    width: 'calc(50% - 8px)',
                  }}
              >
                <Input placeholder="Kaiwalya Health Agency" />
              </Form.Item>
              <Form.Item
                  name="phone"
                  rules={[
                    {
                      required: true, message: "Please Enter Your Phone Number"
                    },
                  ]}
                  style={{
                    display: 'inline-block',
                    width: 'calc(50% - 10px)',
                    margin: '0 8px',
                  }}
              >
                <Input placeholder="020 345 657" />
              </Form.Item>
            </Form.Item>
            <Form.Item>
              <Input.Group compact>
                <Form.Item
                  name="email"
                  noStyle
                  rules={[{ required: true, message: "Please Enter Your Email" }]}
                >
                  <Input
                    style={{ width: 'calc(90% - 8px)' }}
                    placeholder="kaiyvayasecure@gmail.com"
                  />
                </Form.Item>
              </Input.Group>
            </Form.Item>
            <Form.Item
                style={{
                  marginBottom: 0,
                }}
            >
              <Form.Item
                  name="contact_person"
                  rules={[
                    {
                      required: true,message: "Please Enter Contact Person Name"
                    },
                  ]}
                  style={{
                    display: 'inline-block',
                    width: 'calc(50% - 8px)',
                  }}
              >
                <Input placeholder="Arpit Ribadiya" />
              </Form.Item>
              <Form.Item
                  name="contact_person_role"
                  rules={[
                    {
                      required: true, message: "Please Enter Contact Person Role"
                    },
                  ]}
                  style={{
                    display: 'inline-block',
                    width: 'calc(50% - 10px)',
                    margin: '0 8px',
                  }}
              >
                <Input placeholder="CEO" />
              </Form.Item>
            </Form.Item>
            <Form.Item>
              <Input.Group compact>
                <Form.Item
                    name="address"
                    noStyle
                    rules={[{ required: true, message: "Please Enter Your Address" }]}
                >
                  <Input
                      style={{ width: 'calc(90% - 8px)' }}
                      placeholder="201,panchashil,commercial Hub"
                  />
                </Form.Item>
              </Input.Group>
            </Form.Item>
            <Form.Item
                style={{
                  marginBottom: 0,
                }}
            >
              <Form.Item
                  name="name"
                  rules={[
                    {
                      required: true,message: "Please Enter Agency Name"
                    },
                  ]}
                  style={{
                    display: 'inline-block',
                    width: 'calc(50% - 8px)',
                  }}
              >

                <Select placeholder="Choose Role">
                  <Select.Option value="Admin">Admin</Select.Option>
                  <Select.Option value="Normal">Normal</Select.Option>
                </Select>
              </Form.Item>
              <Form.Item
                  name="phone"
                  rules={[
                    {
                      required: true, message: "Please Enter Your Phone Number"
                    },
                  ]}
                  style={{
                    display: 'inline-block',
                    width: 'calc(50% - 10px)',
                    margin: '0 8px',
                  }}
              >
                <Select placeholder="Choose Status">
                  <Select.Option value="Active">Active</Select.Option>
                  <Select.Option value="InActive">InActive</Select.Option>
                </Select>
              </Form.Item>
            </Form.Item>
            <Form.Item
                style={{
                  marginBottom: 0,
                }}
            >
              <Form.Item
                  name="contact_person"
                  rules={[
                    {
                      required: true,message: "Please Enter Contact Person Name"
                    },
                  ]}
                  style={{
                    display: 'inline-block',
                    width: 'calc(50% - 8px)',
                  }}
              >
                <Input placeholder="Arpit Ribadiya" />
              </Form.Item>
              <Form.Item
                  name="contact_person_role"
                  rules={[
                    {
                      required: true, message: "Please Enter Contact Person Role"
                    },
                  ]}
                  style={{
                    display: 'inline-block',
                    width: 'calc(50% - 10px)',
                    margin: '0 8px',
                  }}
              >
                <Input placeholder="CEO" />
              </Form.Item>
            </Form.Item>
            <Form.Item label=" " colon={false}>
              <Button onClick={() => setIsModelOpen(false)}
                      style={{
                          width:'100px',
                          borderRadius:'5px',
                      }}>Cancle</Button>
              <Button
                type="primary"
                htmlType="submit"
                style={{
                    width:'100px',
                    backgroundColor: "black",
                    color: "white",
                    marginLeft: "20px",
                    borderRadius:'5px'
                }}
              >
                Add
              </Button>
            </Form.Item>
          </Form>
        </div>
      </Modal>
    </div>
  )
}

export default AddAgency
