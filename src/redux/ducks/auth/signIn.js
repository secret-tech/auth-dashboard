import { createAsyncAction, createReducer } from '../../../utils/actions';

export const SIGN_IN = 'auth/signIn/SIGN_IN';

export const signIn = createAsyncAction(SIGN_IN);

const initialState = {};

export default createReducer({}, initialState);
