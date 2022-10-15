import {Menu, Tabs} from "antd"
import Program from "./Programs/Programs"
import Application from "./Programs/Application"
import React from "react"
import AutorizedAgency from "./Programs/AutorizedAgency"
import AutorizedMGA from "./Programs/AutorizedMGA"
import Commissions from "./Programs/Comissions"
import ProposalTemplete from "./Programs/ProposalTemplete"


const MainProgram = () => {

  const item = [
    {
      label: `Programs`,
      key: "1",
      children: <Program/>,
    },
    {
      label: `Application`,
      key: "2",
      children: <Application/>,
    },
    {
      label: `Authorized Agency`,
      key: "3",
      children: <AutorizedAgency/>,
    },
    {
      label: `Authorized Mega`,
      key: "4",
      children: <AutorizedMGA/>,
    },
    {
      label: `Commissions`,
      key: "5",
      children: <Commissions/>,
    },
    {
      label: `Proposal Template`,
      key: "6",
      children: <ProposalTemplete/>,
    },
  ];


  return (
    <>
      <Tabs
          defaultActiveKey="1"
          style={{
            marginLeft: "30px",
          }}
          items={item}
      />
    </>
  )
}

export default MainProgram
