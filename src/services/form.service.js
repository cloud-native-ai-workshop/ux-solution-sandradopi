import axios from "axios";

export class FormService {

    constructor(baseUrl) {
        this.baseUrl = baseUrl || '/api';
        console.log(this.baseUrl)
    }

    async sendFormData(xtate) {

        return axios({
            url: '/api/graphql',
            method: "POST",
            body: JSON.stringify(state),
        }).then(response => response.data.data.formData);
    }
    
}