import {Menu} from 'antd';
import Program from "./Programs/Programs";
import Application from "./Programs/Application";
import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";
import { useNavigate } from "react-router-dom";
import {useEffect,useState} from "react";
import AutorizedAgency from "./Programs/AutorizedAgency";
import AutorizedMGA from "./Programs/AutorizedMGA";
import Commissions from "./Programs/Comissions";
import ProposalTemplete from "./Programs/ProposalTemplete";


const MainProgram= ()=>{
    const [current, setCurrent] = useState('programs');
     useEffect(()=>{
         navigate('/programs/programs')
     },[])

const navigate = useNavigate()


    const items = [
        {
            label: 'Programs',
            key: 'programs',

        },
        {
            label: 'Application',
            key: 'application',
        },
        {
            label: 'Autorized Agency',
            key: 'autorizedagency',
        },{
            label: 'Autorized MGA',
            key: 'autorizedmga',
        },{
            label: 'Commissions',
            key: 'commissions',
        },{
            label: 'Proposal Templete',
            key: 'proposaltemplete',
        },
        ]

    const onClick = (e) => {
        console.log('click ', e);
        setCurrent(e.key);

        navigate(`/programs/${e.key}`)
    };
    // const navigate =useNavigate()

    return (
        <>

                <Menu   mode="horizontal" items={items} selectedKeys={[current]} onClick={onClick}/>

                <Routes>
                    <Route path="/programs/programs" element={<Program />} />
                    <Route path="/programs/application" element={<Application />} />
                    <Route path="/programs/autorizedagency" element={<AutorizedAgency />} />
                    <Route path="/programs/autorizedmga" element={<AutorizedMGA />} />
                    <Route path="/programs/commissions" element={<Commissions />} />
                    <Route path="/programs/proposaltemplete" element={<ProposalTemplete />} />

                </Routes>

            </>

    )
}

export default MainProgram;