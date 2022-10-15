import React from "react"
import { FilterOutlined, DashOutlined } from "@ant-design/icons"
import { Space, Table, Typography, Button, Modal, Input, Select } from "antd"
import "./agent.css"
import AddAgent from "./addAgent"
const { Text } = Typography

const GetAgent = () => {
  const columns = [
    {
      title: "Agent Name",
      dataIndex: "name",
      key: "1",
      render: (text) => <a>{text}</a>,
    },
    {
      title: "Role Assigned",
      dataIndex: "role",
      key: "2",
    },
    {
      title: "Added On",
      dataIndex: "added",
      key: "3",
    },
    {
      title: "Employee Status",
      dataIndex: "Status",
      key: "4",
    },

    {
      title: "Action",
      key: "Action",
      align: "right",
      render: () => (
        <Space size="middle">
          <Button>Button 1</Button>
          <Button>Button 2</Button>
          <DashOutlined />
        </Space>
      ),
    },
  ]

  const data = [
    {
      key: "1",
        name: "Health Insurance",
        added: "12 Feb 2022",
        role: "Life,Health",
      Status: "Active",
      Action: ["nice", "developer"],
    },
    {
      key: "2",
        name: "Life Insurance",
        added: "12 Feb 2022",
        role: "Life,Health",
      Status: "InActive",
      Action: ["loser"],
    },
    {
      key: "3",
        name: "Travel Insurance",
        added: "12 Feb 2022",
        role: "Life,Health",
      Status: "Active",
      Action: ["cool", "teacher"],
    },
  ]
  return (
    <>
      <div
        style={{ margin: "10px", display: "flex", justifyContent: "space-between" }}
      >
        <AddAgent />
        <Button type="text" icon={<FilterOutlined />} size={"middle "}>
          z filter
        </Button>
      </div>
      <div
        style={{
          margin: "10px",
        }}
      >
        <Table columns={columns} dataSource={data} pagination={false} />
      </div>
      <div style={{ margin: "10px" }}>
        <Text>showing 3 out of {data.length}</Text>
      </div>
    </>
  )
}

export default GetAgent
