import logo from './logo.svg';
// import './App.css';
import OrganizationManagePage from "./component/userpages/OrganizationManagePage";
import {Route, Routes} from "react-router-dom";
import AddOrganization from "./component/userpages/AddOrganization";
import UpdateOrganization from "./component/userpages/UpdateOrganization";

function App() {
    return (

        <div className="App">
            <Routes>
                <Route path='/organization' element={<OrganizationManagePage/>}/>
                <Route path='/organization/addOrganization' element={<AddOrganization/>}/>
                <Route path='/organization/updateOrganization/:id' element={<UpdateOrganization/>}/>
            </Routes>
        </div>
    );
}

export default App;
