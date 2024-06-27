import React, {useEffect, useState} from 'react'
import Table from 'react-bootstrap/Table';
import OrganizationService from "../service/OrganizationService";
import {Link} from "react-router-dom";
import Header from "../common/Header";

const OrganizationComponent = () => {
    const [organization, setOrganization] = useState([]);

    useEffect(() => {
        fetchUsers();
    }, []);

    const fetchUsers = () => {
        console.log("Starting fetchUsers");
        OrganizationService.getAllUsers(1, 10).then((res) => {
            let content = res.data.data.content;
            setOrganization(content);
        })
    };

    return (
        <div className="container" style={{maxWidth:"1477px"}}>
            <Header/>
            <div className="row py-4">
                <div className="col-md-6 ">
                    <h3>Organization</h3>
                </div>
                <div className="col-md-6 text-end">
                    <Link to="/organization/addOrganization" className="btn btn-primary">Create</Link>
                </div>
            </div>
            <div className="card border-0 shadow p-1"  style={{display:"flex",width:"max-content"}}>
                <table className="table table-striped">
                    <thead className="text-center">
                    <tr>
                        <th>Organization Name</th>
                        <th>Email</th>
                        <th>Location</th>
                        <th>Contact No</th>
                        <th>Action</th>

                    </tr>
                    </thead>
                    <tbody className="text-center">
                    {
                        organization.map(
                            org =>
                                <tr key={org.id}>
                                    <td> {org.name} </td>
                                    <td> {org.email}</td>
                                    <td> {org.location}</td>
                                    <td> {org.contactNumber}</td>
                                    <td>
                                        <Link to={`/organization/updateOrganization/${org.id}`} className="btn btn-info">Update</Link>
                                        <Link  className="btn btn-danger">Delete</Link>
                                        <Link style={{marginLeft: "10px"}} className="btn btn-info">View</Link>
                                    </td>
                                </tr>
                        )
                    }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default OrganizationComponent;
