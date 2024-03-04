import { TResponseRegisterUserData } from "../services/types/user-register";
import { TResponseLoginUserData } from "../services/types/user-login";
import { TResponseGetUserData } from "../services/types/user-get";
import { TResponseUpdateUserData } from "../services/types/user-update";
import { TResponseGetOrderData } from "../services/types/order-get";
import { TResponseOrderData } from "../services/types/order-details";
import { TResponseIngredientData } from "../services/types/burger-ingredients";

export type TRequestOptions = {
    method: string;
    headers: {'Content-Type': string;
              authorization?: string;
            },
    body?: string;   
  };
  
export type TResponseData = 
  {success: boolean} 
  & { accessToken: string;
      refreshToken: string; }
  & { message: string }
  & { user: TResponseRegisterUserData | TResponseLoginUserData | TResponseGetUserData | TResponseUpdateUserData}
  & { data: Array<TResponseIngredientData> }
  & { orders: Array<TResponseGetOrderData> }
  & { name: string; 
      order: TResponseOrderData; };