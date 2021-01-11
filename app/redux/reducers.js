import { TOTAL_BUDGET as TBUDGET, DEFAULT_BILL_LIST } from '../utils/constants';
import { FETCH_BILLS, UPDATE_BILLS, TOTAL_BUDGET, UPDATE_TOTAL_BUDGET } from './actionTypes';
const INITIAL_STATE = {
    billList: DEFAULT_BILL_LIST,
    TOTAL_BUDGET: TBUDGET
}
export default function (state = INITIAL_STATE, action) {
    switch (action.type) {
        case FETCH_BILLS:
            return { ...state, billList: action.payload };
        case UPDATE_BILLS:
            return { ...state, billList: action.payload };
        case TOTAL_BUDGET:
            return { ...state };
        case UPDATE_TOTAL_BUDGET:
            return { ...state, TOTAL_BUDGET: action.payload };
        default:
            return state;
    }
}