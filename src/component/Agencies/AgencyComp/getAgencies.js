import { FilterOutlined, DashOutlined } from "@ant-design/icons"
import { Space, Table, Typography, Button, Modal, Input, Select } from "antd"
import "./agency.css"
import AddAgency from "./addAgency"

const { Text } = Typography

const GetAgency = () => {

  const columns = [
    {
      title: "Agency Name",
      dataIndex: "agencyname",
      key: "agencyname",
      render: (text) => <a>{text}</a>,
    },
    {
      title: "Address",
      dataIndex: "address",
      key: "address",
    },
    {
      title: "Status",
      dataIndex: "Status",
      key: "Status",
    },
    {
      title: "Creation Date",
      dataIndex: "createdate",
      key: "createdate",
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
  ];

  const data = [
    {
      key: "1",
      agencyname: "Health Insurance",
      createdate: "12 Feb 2022",
      address: "Life,Health",
      Status: "Active",
      Action: ["nice", "developer"],
    },
    {
      key: "2",
      agencyname: "Life Insurance",
      createdate: "12 Feb 2022",
      address: "Life,Health",
      Status: "Active",
      Action: ["loser"],
    },
    {
      key: "3",
      agencyname: "Travel Insurance",
      createdate: "12 Feb 2022",
      address: "Life,Health",
      Status: "Active",
      Action: ["cool", "teacher"],
    },
  ];

  return (
    <>
      <div
        style={{ margin: "10px", display: "flex", justifyContent: "space-between" }}
      >
        <AddAgency />
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

export default GetAgency
