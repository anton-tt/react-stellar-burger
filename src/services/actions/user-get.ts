import { GET_USER, GET_USER_SUCCESS, GET_USER_FAILED, GET_USER_RESET_DATA } from "../const";
import { TResponseGetUserData, IGetUserAction, IGetUserSuccessAction, IGetUserFailedAction, 
  IGetUserResetDataAction } from "../types/user-get";
import { getUserData } from "../../utils/apiWithAuthorization";
import { AppDispatch } from "../types/types";

const getUserFeed = (): IGetUserAction => ({
  type: GET_USER
});

const getUserSuccess = (success: boolean, user: TResponseGetUserData): IGetUserSuccessAction => ({
  type: GET_USER_SUCCESS,
  success,
  user
});

const getUserFailed = (): IGetUserFailedAction => ({
  type: GET_USER_FAILED
});

const resetData = (): IGetUserResetDataAction => ({
  type: GET_USER_RESET_DATA
});

export function getUser() {
  
  return function (dispatch: AppDispatch) {
    dispatch(getUserFeed());
    getUserData()
    .then((res) => {  
      if (res && res.success) {
        dispatch(getUserSuccess(res.success, res.user));
      } else {
        dispatch(getUserFailed());
      }
    }).catch((err) => {
      dispatch(getUserFailed());
      console.log(err);
    }) 
  }

}

export function resetGetUserData() { 
  return (resetData());
}