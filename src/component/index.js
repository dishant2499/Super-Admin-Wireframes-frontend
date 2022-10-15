import { CloseCircleOutlined } from "@ant-design/icons"
import { Breadcrumb, Layout, Menu, Button } from "antd"
import Box from "@mui/material/Box"
import React, {useEffect, useState} from "react"
import "antd/dist/antd.css"
import MainProgram from "./Programs/MainProgram"
import Typography from "@mui/material/Typography"
import { Route, Routes, useLocation, useNavigate } from "react-router-dom"
import AgenciesMenu from "./Agencies/AgenciesMenu"
const { Header, Content, Sider } = Layout

function getItem(label, key, icon,) {
    return {
        key,
        icon,
        label,
    };
}

const items = [
    getItem('Programs', 'Programs', <CloseCircleOutlined />,),
    getItem('Agencies', 'Agencies', <CloseCircleOutlined />, ),
    getItem('MGAs', 'MGAs', <CloseCircleOutlined />),
    getItem('Quote Requests', 'Quote Requests', <CloseCircleOutlined />),
    getItem('Network Updates', 'Network Updates', <CloseCircleOutlined />),
    getItem('User Access', 'User Access', <CloseCircleOutlined />),
];


    const Index = () => {
        let location = useLocation();
        const [current, setCurrent] = useState('Programs');
        const [keyData, setkeyData] = useState('');
const Breadcrumbdata =location.pathname.split('/')
        console.log(Breadcrumbdata)
      const navigate = useNavigate()

      useEffect(()=>{
        navigate('/Programs')
      },[])


  const onClick = (e) => {
    console.log("click ", e)
    setCurrent(e.key)
    navigate(`/${e.key}`)
  }
  console.log(current)

        const onChange = (key) => {
            console.log(key);
            if(key === 'programs'){
                setkeyData(``)
            }
            else if(key === 'agencies'){
              setkeyData(``)

            }
            else {
                setkeyData(`${key}`)
            }

        };
        console.log(keyData)

        return(

    <Layout style={{height:'100vh' ,backgroundColor:'grey'}}>

        <Layout>
            <Sider width={200} className="site-layout-background" style={{backgroundColor:'white',margin:'20px'}}>
               <Box sx={{textAlign:'center'}}>
                   Logo
               </Box>
                <Menu
                    mode="inline"
                    defaultSelectedKeys={[current]}
                    style={{ height: '100%', borderRight: 0 }}
                    items={items}
                    onClick={onClick}
                />
            </Sider>
            <Layout
                style={{
                    margin:'20px',
                }}
                className="site-layout"
            >
                <Header
                    style={{
                        backgroundColor:'white',
                        display:'flex',
                        justifyContent:'space-between',
                        alignItems:'center',
                    }}
                >
                <Breadcrumb>
                    <Breadcrumb.Item>{current}</Breadcrumb.Item>
                    <Breadcrumb.Item>{keyData}</Breadcrumb.Item>

                </Breadcrumb>
                    <Box>
                    <Typography variant="h5" >
                        Dishant
                    </Typography>
                        <Typography variant="h6" >
                            admin
                        </Typography>
                    </Box>
                </Header>
                <Content
                    className="site-layout-background"
                    style={{

                        margin: '20px 0px',
                        minHeight: 280,
                        backgroundColor:'white'
                    }}
                >
                  <Routes>
                    <Route path="/Programs" element={<MainProgram onChange={onChange}/>} />
                    <Route path="/agencies" element={<AgenciesMenu onChange={onChange}/>} />
                  </Routes>
                </Content>
            </Layout>
        </Layout>
    </Layout>
  )
}

export default Index
