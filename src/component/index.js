import { CloseCircleOutlined } from "@ant-design/icons"
import { Breadcrumb, Layout, Menu, Button } from "antd"
import Box from "@mui/material/Box"
import React, { useState } from "react"
import "antd/dist/antd.css"
import MainProgram from "./MainProgram"
import Typography from "@mui/material/Typography"
import { Route, Routes, useLocation, useNavigate } from "react-router-dom"
import AgenciesMenu from "./Agencies/AgenciesMenu"
const { Header, Content, Sider } = Layout

function getItem(label, key, icon) {
  return {
    key,
    icon,
    label,
  }
}

const items = [
  getItem("Programs", "Programs", <CloseCircleOutlined />),
  getItem("Agencies", "agencies", <CloseCircleOutlined />),
  getItem("MGAs", "MGAs", <CloseCircleOutlined />),
  getItem("Quote Requests", "Quote Requests", <CloseCircleOutlined />),
  getItem("Network Updates", "Network Updates", <CloseCircleOutlined />),
  getItem("User Access", "User Access", <CloseCircleOutlined />),
]

const Index = () => {
  let location = useLocation()
  let navigate = useNavigate()
  const [current, setCurrent] = useState("Programs")
  const Breadcrumbdata = location.pathname.split("/")

  console.log(Breadcrumbdata)

  const onClick = (e) => {
    console.log("click ", e)
    setCurrent(e.key)
    navigate(`/${e.key}`)
  }

  return (
    <Layout style={{ height: "100vh", backgroundColor: "grey" }}>
      <Layout>
        <Sider
          width={200}
          className="site-layout-background"
          style={{ backgroundColor: "white", margin: "20px" }}
        >
          <Box sx={{ textAlign: "center" }}>Logo</Box>
          <Menu
            mode="inline"
            defaultSelectedKeys={[current]}
            style={{ height: "100%", borderRight: 0 }}
            items={items}
            onClick={onClick}
          />
        </Sider>
        <Layout
          style={{
            margin: "20px",
          }}
          className="site-layout"
        >
          <Header
            style={{
              backgroundColor: "white",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Breadcrumb>
              <Breadcrumb.Item>{Breadcrumbdata[1]}</Breadcrumb.Item>
              <Breadcrumb.Item>{Breadcrumbdata[2]}</Breadcrumb.Item>
            </Breadcrumb>
            <Box>
              <Typography variant="h5">Dishant</Typography>
              <Typography variant="h6">admin</Typography>
            </Box>
          </Header>
          <Content
            className="site-layout-background"
            style={{
              margin: "20px 0px",
              minHeight: 280,
              backgroundColor: "white",
            }}
          >
            <Routes>
              <Route path="/Programs" element={<MainProgram />} />
              <Route path="/agencies" element={<AgenciesMenu />} />
            </Routes>
          </Content>
        </Layout>
      </Layout>
    </Layout>
  )
}

export default Index
