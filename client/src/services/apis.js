const BASE_URL = 'http://localhost:3000';


export const userEndpoints = {
    USER_SIGNUP: BASE_URL+ '/users/register',
    USER_LOGIN: BASE_URL + '/users/login',
    USER_PROFILE: BASE_URL + '/users/profile',
    USER_LOGOUT: BASE_URL + '/users/logout'
}

export const captainEndpoints = {
    CAPTAIN_SIGNUP: BASE_URL+ '/captains/register',
    CAPTAIN_LOGIN: BASE_URL + '/captains/login',
    CAPTAIN_PROFILE: BASE_URL + '/captains/profile',
    CAPTAIN_LOGOUT: BASE_URL + '/captains/logout'
}

export const mapsEndpoints = {
    GET_LOCATION_SUGGESTIONS: BASE_URL + '/maps/suggestions',
}

export const rideEndpoints = {
    GET_FARE: BASE_URL + '/rides/fare',
    CREATE_RIDE: BASE_URL + '/rides/create'
}