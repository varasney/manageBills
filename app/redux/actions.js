import { FETCH_BILLS, UPDATE_BILLS } from './actionTypes';
export function fetchBills(action) {
    return {
        type: FETCH_BILLS,
        payload: action.payload
    }
}

export function updateBills(data) {
    return {
        type: UPDATE_BILLS,
        payload: data
    }
}