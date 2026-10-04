import ApiClient from '../clients/apiClient.js';

export default class UserService {

    constructor(request) {
        this.apiClient = new ApiClient(request);
    }

    async createUser(userData) {
        return await this.apiClient.post('/api/users', {
            data: userData
        });
    }

    async getUser(userId) {
        return await this.apiClient.get(`/api/users/${userId}`);
    }

    async updateUser(userId, userData) {
        return await this.apiClient.put(`/api/users/${userId}`, {
            data: userData
        });
    }

    async deleteUser(userId) {
        return await this.apiClient.delete(`/api/users/${userId}`);
    }
}