import React from 'react'
import {useForm} from "react-hook-form";
import OrganizationService from "../service/OrganizationService";
import {useNavigate} from "react-router-dom";
import Header from "../common/Header";

const AddOrganization = () => {

    const {register, handleSubmit, watch, formState: {errors}} = useForm();
    const navigate=useNavigate();
    const formSubmit = async (data) => {
        try {
            const response = await OrganizationService.createOrganization(data);
            setTimeout(() => {
                navigate('/organization')
            }, 2000);
            console.log('Organization added successfully:', response.data);
            // You can add any additional success handling here, such as showing a success message or redirecting the user
        } catch (error) {
            console.error('Error adding organization:', error);
            // You can add error handling here, such as showing an error message to the user
        }
    }
    return (<>
        <Header/>
        <div className="container">
                <div className="card border-0 shadow p-3 my-3">
                    <form onSubmit={handleSubmit(formSubmit)}>
                        <div className="mb-3">
                            <label>OrganizationName</label>
                            <input {...register('name', {required: true})} type="text"
                                   className={`form-control ${errors.name && `is-invalid`}`}
                                   placeholder="Enter OrganizationName"/>
                            {errors.name && <p className="invalid-feedback">This is Invalid Field</p>}
                        </div>
                        <div className="mb-3">
                            <label>Email</label>
                            <input {...register('email', {
                                required: true, pattern: {
                                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                    message: 'Please enter a valid email address'
                                }
                            })} type="text" className="form-control"
                                   placeholder="Enter Organization Email"/>
                        </div>
                        <div className="mb-3">
                            <label>Location</label>
                            <input {...register('location', {required: true})} type="text" className="form-control"
                                   placeholder="Enter Organization Location"/>
                        </div>
                        <div className="mb-3">
                            <label>Contact No:</label>
                            <input {...register('contactNumber', {required: true})} type="number" className="form-control"
                                   placeholder="Enter Organization Contact No"/>
                        </div>
                        <button className="btn btn-primary" type="submit">Save</button>
                    </form>
                </div>
            </div>
        </>)
}

export default AddOrganization
