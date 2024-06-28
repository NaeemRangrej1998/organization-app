import React, {useEffect, useState} from 'react'
import Table from 'react-bootstrap/Table';
import OrganizationService from "../service/OrganizationService";
import {Link, useNavigate} from "react-router-dom";
import Header from "../common/Header";
import {Button, Modal} from "react-bootstrap";

const OrganizationComponent = () => {
    const navigate=useNavigate();
    const [organization, setOrganization] = useState([]);
    const [show, setShow] = useState(false);
    const [isDeletedId, setIsDeletedId] = useState();
    const handleClose = () => setShow(false);
    const handleDeleteOrganization = () => {
        OrganizationService.deleteOrganizationById(isDeletedId).then((res) => {
            console.log(res.data.status)
            if (res.data.status==200){
                navigate('/organization')
            }
        })
    };
    const handleShow = (id) => {
        console.log("handleShow",id)
        setIsDeletedId(id)
        setShow(!show)

    };
    useEffect(() => {
        fetchUsers();
    }, []);

    const fetchUsers = () => {
        console.log("Starting fetchUsers");
        OrganizationService.getAllOrganization(1, 10).then((res) => {
            let content = res.data.data.content;
            setOrganization(content);
        })
    };

    return (<div className="container" style={{maxWidth: "1477px"}}>
        <Header/>
        <div className="row py-4">
            <div className="col-md-6 ">
                <h3>Organization</h3>
            </div>
            <div className="col-md-6 text-end">
                <Link to="/organization/addOrganization" className="btn btn-primary">Create</Link>
            </div>
        </div>
        <div className="card border-0 shadow p-1" style={{display: "flex", width: "max-content"}}>
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
                {organization.map(org => <tr key={org.id}>
                    <td> {org.name} </td>
                    <td> {org.email}</td>
                    <td> {org.location}</td>
                    <td> {org.contactNumber}</td>
                    <td>
                        <Link to={`/organization/updateOrganization/${org.id}`}
                              className="btn btn-info">Update</Link>
                        <button onClick={()=>handleShow(org.id)} className="btn btn-danger">Delete</button>
                        <Link style={{marginLeft: "10px"}} className="btn btn-info">View</Link>
                    </td>
                    {show && <Modal show={show} onHide={handleClose} backdrop="static" keyboard={false}>
                        <Modal.Header closeButton>
                            <Modal.Title>Modal title</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            I will not close if you click outside me. Do not even try to press
                            escape key.
                        </Modal.Body>
                        <Modal.Footer>
                            <Button variant="secondary" onClick={handleClose}>
                                Close
                            </Button>
                            <Button variant="primary" onClick={handleDeleteOrganization}>
                                Understood
                            </Button>
                        </Modal.Footer>
                    </Modal>}
                </tr>)

                }
                </tbody>
            </table>
        </div>

    </div>);
};

export default OrganizationComponent;
