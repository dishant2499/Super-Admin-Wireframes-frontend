import React, { useState } from "react"
import { Modal } from "antd"
import { PlusOutlined } from "@ant-design/icons"
import "./agent.css"
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

const AddAgent = () => {
  const [isModelOpen, setIsModelOpen] = useState(false)

  const onFinish = (values) => {
    setIsModelOpen(false)
    console.log("Received values of form: ", values)
  }
    const handleCancel = () => {
        setIsModelOpen(false);
    };

  return (
    <div>
      <Button
        icon={<PlusOutlined />}
        size="large"
        style={{ backgroundColor: "black", color: "white", borderRadius: "10px" }}
        onClick={() => setIsModelOpen(true)}
      >
        Add Agent
      </Button>
      <Modal
        title="Add Agency"
        centered
        open={isModelOpen}
        onCancel={handleCancel}
        okButtonProps={{
            hidden: true,
        }}
        width={280}
      >
        <div style={{ height: "80%" }}>
          <Form
            name="complex-form"
            onFinish={onFinish}
            labelCol={{ span: 8 }}
            wrapperCol={{ span: 16 }}
            style={{
                display:'flex',
                justifyContent:'space-between',
                flexDirection:'column',
                height: "300px"
            }}
          >
              <Form.Item
                  name="Phone"
                  noStyle
                  rules={[{ required: true, message: "Username is required" }]}
              >
                  <Input style={{ width: 220 }} placeholder="Shane Watson" />
              </Form.Item>
              <Form.Item
                  name="email"
                  noStyle
                  rules={[{ required: true, message: "Username is required" }]}
              >
                  <Input style={{ width: 220 }} placeholder="shanwatson@gmail.com" />
              </Form.Item>
              <Form.Item
                  name="role"
                  noStyle
                  rules={[{ required: true, message: "Username is required" }]}
              >
                  <Select style={{ width: 220 }} placeholder="Choose Role">
                      <Select.Option value="A">Admin</Select.Option>
                      <Select.Option value="N">Normal</Select.Option>
                  </Select>
              </Form.Item>
              <Form.Item
                  name="status"
                  noStyle
                  rules={[{ required: true, message: "Username is required" }]}
              >
                  <Select style={{ width: 220 }} placeholder="Choose Status">
                      <Select.Option value="A">Active</Select.Option>
                      <Select.Option value="I">InActive</Select.Option>
                  </Select>
              </Form.Item>
              <Form.Item
                  noStyle
              >
                  <Button
                      type="primary"
                      htmlType="submit"
                      style={{
                          width:'220px',
                          backgroundColor: "black",
                          color: "white",
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

export default AddAgent
