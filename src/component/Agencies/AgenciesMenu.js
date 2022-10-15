import React from "react"
import { Tabs } from "antd"
import { useEffect, useState } from "react"
import GetAgency from "./AgencyComp/getAgencies"
import GetAgent from "./AgentComp/getAgent";

const AgenciesMenu = () => {
  const item = [
    {
      label: `Agencies`,
      key: "1",
      children: <GetAgency />,
    },
    {
      label: `Agent`,
      key: "2",
      children: <GetAgent />,
    },
  ];

  const onChange = (key) => {
    console.log(key)
  }

  return (
    <>
      <Tabs
        defaultActiveKey="1"
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
