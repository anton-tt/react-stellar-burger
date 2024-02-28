import { UPDATE_USER, UPDATE_USER_SUCCESS, UPDATE_USER_FAILED, UPDATE_USER_RESET_DATA } from "../const";
import { TRequestUserData, TResponseUserData, IUpdateUserAction, IUpdateUserSuccessAction, IUpdateUserFailedAction, 
  IUpdateUserResetDataAction } from "../types/user-update";
import { updateUserData } from "../../utils/apiWithAuthorization.jsx";
import { AppDispatch } from "../types/types";

const updateUserFeed = (): IUpdateUserAction => ({
  type: UPDATE_USER
});

const updateUserSuccess = (success: boolean, user: TResponseUserData): IUpdateUserSuccessAction => ({
  type: UPDATE_USER_SUCCESS,
  success,
  user
});

const updateUserFailed = (): IUpdateUserFailedAction => ({
  type: UPDATE_USER_FAILED
});

const resetData = (): IUpdateUserResetDataAction => ({
  type: UPDATE_USER_RESET_DATA
});

export function updateUser(userData: TRequestUserData) {
  
  return function (dispatch: AppDispatch) {
    dispatch(updateUserFeed());
    updateUserData(userData)
    .then((res) => {  
      if (res && res.success) {
        dispatch(updateUserSuccess(res.success, res.user));
      } else {
        dispatch(updateUserFailed());
      }
    }).catch((err) => {
      dispatch(updateUserFailed());
      console.log(err);
    }) 
  }

}

export function resetUpdateUserData() { 
  return (resetData());
}