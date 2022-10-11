import axios from "axios";

export class FormService {
    constructor(baseUrl) {
        this.baseUrl = baseUrl || '/api';
    }

    async sendFormData() {
        return axios({
            url: '/api/graphql',
            method: "POST",
            data: {
                query: `
                {
                    formData {
                        appliance
                        date
                        timestart
                        timeend
                    }
                }
                `
            }
        }).then(response => response.data.data.formData);
    }
}