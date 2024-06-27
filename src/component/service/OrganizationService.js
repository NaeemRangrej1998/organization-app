import axios from "axios";

class OrganizationService{
    static BASE_URL = "http://localhost:8080/organization"
     getAllUsers(pageNo = 1, pageSize = 10) {
        try {
            return  axios.get(`${OrganizationService.BASE_URL}/getAllUsers`, {
                params: {
                    pageNo: pageNo,
                    pageSize: pageSize
                }
            });
        } catch (err) {
            console.error('Error fetching users:', err);
            throw err;
        }
    }

    updateOrganization = (id,data) => {
        return axios.put(`${OrganizationService.BASE_URL}/updateOrgnanization/${id}`, data);
    };
    createEmployee = (data) => {
        return axios.post(`${OrganizationService.BASE_URL}/addOranization`, data);
    };
    fetchOrganizationById = (id) => {
        return axios.get(`${OrganizationService.BASE_URL}/${id}`);
    };


}
export default new OrganizationService;