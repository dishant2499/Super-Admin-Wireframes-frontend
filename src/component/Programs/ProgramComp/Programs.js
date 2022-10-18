import { FilterOutlined, DashOutlined } from "@ant-design/icons"
import {
  Space,
  Table,
  Typography,
  Button,
  Modal,
  Popconfirm,
  Form,
  Input,
  Select,
} from "antd"
import "./Program.css"
import axios from "axios"
import AddProgram from "./addProgram"
import React, { useEffect, useState } from "react"
const { Option } = Select

const { Text } = Typography

const Program = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [isEditOpen, setIsEditOpen] = useState(false)
  const [tableData, setTableData] = useState([])
  const [editData, setEditData] = useState({})

  const validateMessages = {
    required: "${label} is required!",
  }
  useEffect(() => {
    getData()
  }, [])

  const getData = async () => {
    const Programdata = await axios.get("http://localhost:3002/programDataList")
    // const newdata = JSON.parse(Programdata.data)
    setTableData(Programdata.data)
    console.log(Programdata.data)
  }

  const columns = [
    {
      title: "Program Name",
      dataIndex: "ProgramName",
      key: "ProgramName",
      render: (text) => <a>{text}</a>,
    },
    {
      title: "Covrage Type",
      dataIndex: "CovrageType",
      key: "CovrageType",
    },
    {
      title: "Status",
      dataIndex: "Status",
      key: "Status",
    },

    {
      title: "Action",
      key: "Action",
      align: "right",
      render: (list) => {
        // console.log(list)
        return (
          <Space size="middle">
            <Button>Button 1</Button>
            <Button>Button 2</Button>

            <Popconfirm
              cancelButtonProps={{ style: { display: "none" } }}
              okButtonProps={{ style: { display: "none" } }}
              placement="left"
              title={
                <div
                  style={{
                    height: "50px",
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <a onClick={() => Draweropen(list)}>edit</a>
                  <a onClick={() => DeleteDataFromTable(list)}>remove</a>
                </div>
              }
              onConfirm={isModalOpen}
            >
              <DashOutlined onClick={() => setIsModalOpen(!isModalOpen)} />
            </Popconfirm>
          </Space>
        )
      },
    },
  ]

  const DeleteDataFromTable = async (values) => {
    const deletedata = await axios.delete(
      `http://localhost:3002/program/deletedata/${values._id}`
    )
    console.log(deletedata)
  }
  const onFinish = async (values) => {
    try {
      const Programdata = await axios.put(
        `http://localhost:3002/program/updatedata/${editData._id}`,
        values
      )
      setIsEditOpen(false)
      console.log(Programdata)
    } catch (e) {
      console.log(e)
    }
  }

  const handleChange = (value) => {
    console.log(`selected ${value}`)
  }

  const Draweropen = (list) => {
    console.log(list)
    setEditData(list)
    console.log(list)
    setIsEditOpen(true)
    setIsModalOpen(false)
  }

  return (
    <>
      <div
        style={{ margin: "10px", display: "flex", justifyContent: "space-between" }}
      >
        <AddProgram />
        <Button type="text" icon={<FilterOutlined />} size={"middle "}>
          filter
        </Button>
      </div>
      <div
        style={{
          margin: "10px",
        }}
      >
        <Table columns={columns} dataSource={tableData} pagination={false} />
      </div>
      <div style={{ margin: "10px" }}>
        <Text>
          showing {tableData.length} out of {tableData.length}
        </Text>
      </div>

      {/*            <Modal  open={isModalOpen}  onCancel={()=> setIsModalOpen(false)} footer={null} width={125} >*/}
      {/*                <div style={{*/}
      {/*                    height:'50px',*/}
      {/*                    display:'flex',*/}
      {/*                    flexDirection:'column'*/}
      {/*                }}>*/}
      {/*<a onClick={Draweropen}>edit</a>*/}
      {/*                <a>remove</a>*/}
      {/*                </div>*/}
      {/*            </Modal>*/}
      <Modal
        title="Create Program"
        centered
        open={isEditOpen}
        footer={null}
        onCancel={() => setIsEditOpen(false)}
      >
        <div style={{ height: "300px" }}>
          <Form
            name="nest-messages"
            onFinish={onFinish}
            validateMessages={validateMessages}
            initialValues={editData}
          >
            <Form.Item
              name="ProgramName"
              label="Name"
              rules={[
                {
                  required: true,
                },
              ]}
            >
              <Input
                placeholder="Health insurance platinum"

              />
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
              <Select
                placeholder="Choose industry"
                mode="multiple"
                allowClear

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
              <Select
                placeholder="Choose States"
                mode="multiple"
                allowClear

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
              <Select
                placeholder="Choose covrage Types"
                mode="multiple"
                allowClear

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
              <Select placeholder="Choose Status" defaultValue={editData.Status}>
                <Option value="Active">Active</Option>
                <Option value="InActive">InActive</Option>
              </Select>
            </Form.Item>

            <Form.Item style={{ display: "flex", justifyContent: "center" }}>
              <Button
                type="primary"
                htmlType="submit"
                style={{ marginRight: "10px" }}
                onClick={() => setIsEditOpen(false)}
              >
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
