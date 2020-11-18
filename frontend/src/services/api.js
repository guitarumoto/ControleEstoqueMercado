const axios = require("axios");

module.exports = {
    api(){
        const api = axios.create({
            baseURL:'http://localhost:8000',
        });

        return api;
    }
}