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
  const [form] = Form.useForm()

  const onFinish = (values) => {
    setIsModelOpen(false)
    form.resetFields()
    console.log("Received values of form: ", values)
  }

  const onReset = () => {
    form.resetFields()
    setIsModelOpen(false)
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
      <Modal
        title="Add Agency"
        centered
        open={isModelOpen}
        width={500}
        okButtonProps={{
          hidden: true,
        }}
        cancelButtonProps={{
          hidden: true,
        }}
      >
        <div style={{ height: "70%" }}>
          <Form
            name="complex-form"
            form={form}
            onFinish={onFinish}
            labelCol={{ span: 8 }}
            wrapperCol={{ span: 16 }}
          >
            <Form.Item
              style={{
                marginBottom: 0,
              }}
            >
              <Form.Item
                name="name"
                label="Name"
                rules={[
                  {
                    required: true,
                    message: "Please Enter Agency Name",
                  },
                ]}
                style={{
                  display: "inline-block",
                  width: "200px",
                }}
              >
                <Input placeholder="Kaiwalya Health Agency" />
              </Form.Item>
              <Form.Item
                name="phone"
                label="Phone"
                rules={[
                  {
                    required: true,
                    message: "Please Enter Your Phone Number",
                  },
                ]}
                style={{
                  display: "inline-block",
                  width: "200px",
                  margin: "0 8px",
                }}
              >
                <Input placeholder="020 345 657" />
              </Form.Item>
            </Form.Item>
            <Form.Item>
              <Input.Group compact>
                <Form.Item
                  name="email"
                  label="email"
                  rules={[{ required: true, message: "Please Enter Your Email" }]}
                  style={{
                    marginBottom: 0,
                  }}
                >
                  <Input
                    style={{ width: "300px" }}
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
                label="C Person"
                rules={[
                  {
                    required: true,
                    message: "Please Enter Contact Person Name",
                  },
                ]}
                style={{
                  display: "inline-block",
                  width: "200px",
                }}
              >
                <Input placeholder="Arpit Ribadiya" />
              </Form.Item>
              <Form.Item
                name="contact_person_role"
                label="C P Role"
                rules={[
                  {
                    required: true,
                    message: "Please Enter Contact Person Role",
                  },
                ]}
                style={{
                  display: "inline-block",
                  width: "200px",
                  margin: "0 8px",
                }}
              >
                <Input placeholder="CEO" />
              </Form.Item>
            </Form.Item>
            <Form.Item>
              <Input.Group compact>
                <Form.Item
                  style={{
                    marginBottom: 0,
                  }}
                  name="address"
                  label="Address"
                  rules={[{ required: true, message: "Please Enter Your Address" }]}
                >
                  <Input
                    style={{ width: "200px" }}
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
                name="city"
                label="City"
                rules={[
                  {
                    required: true,
                    message: "Please Enter Agency Name",
                  },
                ]}
                style={{
                  display: "inline-block",
                  width: "200px",
                }}
              >
                <Select placeholder="Choose Role">
                  <Select.Option value="Admin">Admin</Select.Option>
                  <Select.Option value="Normal">Normal</Select.Option>
                </Select>
              </Form.Item>
              <Form.Item
                name="state"
                label="State"
                rules={[
                  {
                    required: true,
                    message: "Please Enter State",
                  },
                ]}
                style={{
                  display: "inline-block",
                  width: "calc(50% - 10px)",
                  margin: "0 8px",
                }}
              >
                <Select placeholder="Choose State">
                  <Select.Option value="Gujrat">Gujrat</Select.Option>
                  <Select.Option value="Goa">Goa</Select.Option>
                  <Select.Option value="Rajsthan">Rajsthan</Select.Option>
                </Select>
              </Form.Item>
            </Form.Item>
            <Form.Item
              style={{
                marginBottom: 0,
              }}
            >
              <Form.Item
                name="logo"
                label="logo"
                rules={[
                  {
                    required: true,
                    message: "Please Add Logo",
                  },
                ]}
                style={{
                  display: "inline-block",
                  width: "200px",
                }}
              >
                <Upload listType="picture-card">
                  <div>
                    <PlusOutlined />
                    <div
                      style={{
                        marginTop: 8,
                      }}
                    >
                      Upload
                    </div>
                  </div>
                </Upload>
              </Form.Item>
              <Form.Item
                name="status"
                label="Status"
                rules={[
                  {
                    required: true,
                    message: "Please Enter Status",
                  },
                ]}
                style={{
                  display: "inline-block",
                  width: "200px",
                  margin: "0 8px",
                }}
              >
                <Select placeholder="Choose Status">
                  <Select.Option value="Active">Active</Select.Option>
                  <Select.Option value="InActive">InActive</Select.Option>
                </Select>
              </Form.Item>
            </Form.Item>
            <Form.Item label=" " colon={false}>
              <Button
                htmlType="button"
                onClick={onReset}
                style={{
                  width: "100px",
                  borderRadius: "5px",
                }}
              >
                Cancle
              </Button>
              <Button
                type="primary"
                htmlType="submit"
                style={{
                  width: "100px",
                  backgroundColor: "black",
                  color: "white",
                  marginLeft: "20px",
                  borderRadius: "5px",
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
