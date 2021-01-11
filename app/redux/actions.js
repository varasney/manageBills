import { FETCH_BILLS, UPDATE_BILLS, TOTAL_BUDGET, UPDATE_TOTAL_BUDGET } from './actionTypes';
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

export function getTotalBudget(action) {
    return {
        type: TOTAL_BUDGET,
        // payload: action.payload
    }
}

export function updateTotalBudget(data) {
    return {
        type: UPDATE_TOTAL_BUDGET,
        payload: data
    }
}

