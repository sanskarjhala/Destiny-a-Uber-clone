import { apiConnector } from "../apiConnector";
import { rideEndpoints } from "../apis";


export const getFare = async (data, token) => {
    try {
        const response = await apiConnector(
            "GET",
            rideEndpoints.GET_FARE,
            null,   
            { Authorization: `Bearer ${token}` },
            data
        );
        return response.data;
    } catch (error) {
        console.error("Error fetching fare:", error);
        throw error;
    }
}

export const createRideApi = async (data, token) => {
    try {
        const response = await apiConnector(
            "POST",
            rideEndpoints.CREATE_RIDE,
            data,
            { Authorization: `Bearer ${token}` }
        );
        return response.data;
    } catch (error) {
        console.error("Error creating ride:", error);
        throw error;
    }
}