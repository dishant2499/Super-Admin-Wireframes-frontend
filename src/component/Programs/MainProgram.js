import {Tabs} from 'antd';
import Program from "./ProgramComp/Programs";
import Application from "./Application";
import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";
import { useNavigate } from "react-router-dom";
import {useEffect,useState} from "react";
import AutorizedAgency from "./AutorizedAgency";
import AutorizedMGA from "./AutorizedMGAComp/AutorizedMGA";
import Commissions from "./Comissions";
import ProposalTemplete from "./ProposalTemplete";


const MainProgram= ({onChange})=>{
    const [current, setCurrent] = useState('programs');
     // useEffect(()=>{
     //     navigate('/programs')
     // },[])

const navigate = useNavigate()


    const items = [
        {
            label: 'Programs',
            key: 'programs',
            children:<Program />

        },
        {
            label: 'Application',
            key: 'application',
            children:<Application />
        },
        {
            label: 'Autorized Agency',
            key: 'autorizedagency',
            children:<AutorizedAgency />
        },{
            label: 'Autorized MGA',
            key: 'autorizedmga',
            children:<AutorizedMGA />
        },{
            label: 'Commissions',
            key: 'commissions',
            children:<Commissions />
        },{
            label: 'Proposal Templete',
            key: 'proposaltemplete',
            children:<ProposalTemplete />
        },
        ]

    const onClick = (e) => {
        console.log('click ', e);
        setCurrent(e.key);
if(e.key === 'programs'){
    navigate(`/programs`)
}
else {
    navigate(`/programs/${e.key}`)
}
    };
    // const navigate =useNavigate()


    return (
        <>
            <Tabs items={items} style={{margin:'10px'}} defaultActiveKey="programs" onChange={onChange}/>
                {/*<Menu   mode="horizontal" items={items} selectedKeys={[current]} onClick={onClick}/>*/}

                {/*<Routes>*/}
                {/*    <Route path="/programs" element={<Program />} />*/}
                {/*    <Route path="/programs/application" element={<Application />} />*/}
                {/*    <Route path="/programs/autorizedagency" element={<AutorizedAgency />} />*/}
                {/*    <Route path="/programs/autorizedmga" element={<AutorizedMGA />} />*/}
                {/*    <Route path="/programs/commissions" element={<Commissions />} />*/}
                {/*    <Route path="/programs/proposaltemplete" element={<ProposalTemplete />} />*/}

                {/*</Routes>*/}

            </>

    )
}

export default MainProgram;