import { apiConnector } from "../apiConnector";
import { mapsEndpoints } from "../apis";


export const getLocationSuggestion = async (input, token) => {
  try {
    const response = await apiConnector(
      "GET",
      mapsEndpoints.GET_LOCATION_SUGGESTIONS,
      null,
      { Authorization: `Bearer ${token}` },
      input
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching location suggestions:", error);
    throw error;
  }
};
