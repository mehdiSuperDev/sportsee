
import axios from "axios";

const baseURL = "http://localhost:3000"

class UserService {

    static async getInformation(id) {
        try {
            return axios.get(`${baseURL}/user/${id}`);
        } catch (error) {
            throw new Error("Unable to fetch user information");
        }
    }

    static async getActivity(id) {
        try {
            return axios.get(`${baseURL}/user/${id}/activity`);
        } catch (error) {
            throw new Error("Unable to fetch user activity");
        }
    }

    static async getSessions(id) {
        try {
            return axios.get(`${baseURL}/user/${id}/average-sessions`);
        } catch (error) {
            throw new Error("Unable to fetch user sessions");
        }
    }

    static async getPerformance(id) {
        try {
            return axios.get(`${baseURL}/user/${id}/performance`);
        } catch (error) {
            throw new Error("Unable to fetch user performance");
        }
    }
 }

 export default UserService;