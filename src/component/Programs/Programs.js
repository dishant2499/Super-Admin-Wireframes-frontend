import { useState } from "react"
import { PlusOutlined, FilterOutlined, DashOutlined } from "@ant-design/icons"
import { Space, Table, Typography, Button, Modal, Input, Select } from "antd"
import "./Program.css"

const { Text } = Typography
const { Option } = Select;

const Program = () => {
  const [modal2Open, setModal2Open] = useState(false)

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
      ProgramName: "Health Insurance",
      CovrageType: "Life,Health",
      Status: "Active",
      Action: ["nice", "developer"],
    },
    {
      key: "2",
      ProgramName: "Life Insurance",
      CovrageType: "Life,Health",
      Status: "Active",
      Action: ["loser"],
    },
    {
      key: "3",
      ProgramName: "Travel Insurance",
      CovrageType: "Life,Health",
      Status: "Active",
      Action: ["cool", "teacher"],
    },
  ]
  const ProgramData = (e) => {
    const { value } = e.target
    console.log(value)
  }
  const ProgramData1 = (data) => {
    console.log(data)
  }

  return (
    <>
      <div
        style={{ margin: "10px", display: "flex", justifyContent: "space-between" }}
      >
        <Button
          icon={<PlusOutlined />}
          size={"middle "}
          style={{ backgroundColor: "black", color: "white", borderRadius: "5px" }}
          onClick={() => setModal2Open(true)}
        >
          Create Program
        </Button>
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
      <Modal
        title="Create Program"
        centered
        visible={modal2Open}
        onOk={() => setModal2Open(false)}
        onCancel={() => setModal2Open(false)}
        footer={[
          <Button onClick={() => setModal2Open(false)}>Cancel</Button>,
          <Button
            onClick={() => setModal2Open(false)}
            style={{
              backgroundColor: "black",
              color: "white",
            }}
          >
            Create
          </Button>,
        ]}
      >
        <div style={{ height: "250px" }}>
          <Input
            placeholder="Health insurance platinum"
            style={{ margin: "10px" }}
            onChange={ProgramData}
          />
          <Select
            style={{ width: "100%", margin: "10px" }}
            placeholder="Choose industry"
            optionFilterProp="children"
            onChange={ProgramData1}
            filterOption={(input, option) =>
              option.children.toLowerCase().includes(input.toLowerCase())
            }
          >
            <Option value="jack">Jack</Option>
            <Option value="lucy">Lucy</Option>
            <Option value="tom">Tom</Option>
          </Select>
          <Select
            style={{ width: "100%", margin: "10px" }}
            placeholder="Choose States"
            optionFilterProp="children"
            filterOption={(input, option) =>
              option.children.toLowerCase().includes(input.toLowerCase())
            }
          >
            <Option value="jack">Jack</Option>
            <Option value="lucy">Lucy</Option>
            <Option value="tom">Tom</Option>
          </Select>
          <Select
            style={{ width: "100%", margin: "10px" }}
            placeholder="Choose covrage Types"
            optionFilterProp="children"
            filterOption={(input, option) =>
              option.children.toLowerCase().includes(input.toLowerCase())
            }
          >
            <Option value="jack">Jack</Option>
            <Option value="lucy">Lucy</Option>
            <Option value="tom">Tom</Option>
          </Select>
          <Select
            style={{ width: "100%", margin: "10px" }}
            placeholder="Choose Status"
            optionFilterProp="children"
            filterOption={(input, option) =>
              option.children.toLowerCase().includes(input.toLowerCase())
            }
          >
            <Option value="jack">Jack</Option>
            <Option value="lucy">Lucy</Option>
            <Option value="tom">Tom</Option>
          </Select>
        </div>
      </Modal>
    </>
  )
}

export default Program
