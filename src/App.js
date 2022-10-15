
import './App.css';
import Index from "./component/index"
import { BrowserRouter } from 'react-router-dom';
import 'antd/dist/antd.css';


function App() {
  return (
      <BrowserRouter>
   <Index/>
      </BrowserRouter>
  );
}

export default App;
