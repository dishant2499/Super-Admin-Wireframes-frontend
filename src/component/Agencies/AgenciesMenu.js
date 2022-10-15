import React from "react"
import { Tabs } from "antd"
import { useEffect, useState } from "react"
import GetAgency from "./AgencyComp/getAgencies"
import GetAgent from "./AgentComp/getAgent";

const AgenciesMenu = ({onChange}) => {
  const item = [
    {
      label: `Agencies`,
      key: "agencies",
      children: <GetAgency />,
    },
    {
      label: `Agent`,
      key: "agent",
      children: <GetAgent />,
    },
  ];



  return (
    <>
      <Tabs
        defaultActiveKey="agencies"
        style={{
          marginLeft: "30px",
        }}
        onChange={onChange}
        items={item}
      />
    </>
  )
}

export default AgenciesMenu
