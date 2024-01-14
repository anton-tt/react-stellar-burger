const urlBase = "https://norma.nomoreparties.space/api/";

const GET_INGREDIENTS = "GET_INGREDIENTS";
const GET_INGREDIENTS_SUCCESS = "GET_INGREDIENTS_SUCCESS";
const GET_INGREDIENTS_FAILED = "GET_INGREDIENTS_FAILED";

const ADD_INGREDIENT_DETAILS = "ADD_INGREDIENT_DETAILS";
const REMOVE_INGREDIENT_DETAILS = "REMOVE_INGREDIENT_DETAILS";

const ADD_INGREDIENT = "ADD_INGREDIENT";
const DELETE_INGREDIENT = "DELETE_INGREDIENT";
const MOVE_INGREDIENT = "MOVE_INGREDIENT";
const CLEAR_CONSTRUCTOR = "CLEAR_CONSTRUCTOR";

const CREATE_ORDER = "CREATE_ORDER";
const CREATE_ORDER_SUCCESS = "CREATE_ORDER_SUCCESS";
const CREATE_ORDER_FAILED = "CREATE_ORDER_FAILED";
const REMOVE_ORDER_NUMBER = "REMOVE_ORDER_NUMBER";

const ADD_PRICE = "ADD_PRICE";
const DELETE_PRICE = "DELETE_PRICE";

const HOME_PAGE = "/";
const REGISTER_PAGE = "/register";
const LOGIN_PAGE = "/login";
const PASSWORD_FORGOT_PAGE = "/forgot-password";
const PASSWORD_RESET_PAGE = "/reset-password";
const PROFILE_PAGE = "/profile";
const ORDER_FEED_PAGE = "/feed";
const ORDER_HISTORY_PAGE = "/profile/orders";
const INGREDIENT_PAGE = "/ingredients/:id";
const NOT_FOUND_PAGE = "*";

const ACCESS_TOKEN = "accessToken";
const REFRESH_TOKEN = "refreshToken";

const REGISTER_USER = "REGISTER_USER";
const REGISTER_USER_SUCCESS = "REGISTER_USER_SUCCESS";
const REGISTER_USER_FAILED = "REGISTER_USER_FAILED";
const REGISTER_USER_RESET_DATA = "REGISTER_USER_RESET_DATA";

const LOGIN_USER = "LOGIN_USER";
const LOGIN_USER_SUCCESS = "LOGIN_USER_SUCCESS";
const LOGIN_USER_FAILED = "LOGIN_USER_FAILED";
const LOGIN_USER_RESET_DATA = "LOGIN_USER_RESET_DATA";

const LOGOUT_USER = "LOGOUT_USER";
const LOGOUT_USER_SUCCESS = "LOGOUT_USER_SUCCESS";
const LOGOUT_USER_FAILED = "LOGOUT_USER_FAILED";
const LOGOUT_USER_RESET_DATA = "LOGOUT_USER_RESET_DATA";

const FORGOT_PASSWORD = "FORGOT_PASSWORD";
const FORGOT_PASSWORD_SUCCESS = "FORGOT_PASSWORD_SUCCESS";
const FORGOT_PASSWORD_FAILED = "FORGOT_PASSWORD_FAILED";
const FORGOT_MESSAGE_SUCCESS = "Reset email sent";
const FORGOT_PASSWORD_RESET_DATA = "FORGOT_PASSWORD_RESET_DATA";

const RESET_PASSWORD = "RESET_PASSWORD";
const RESET_PASSWORD_SUCCESS = "RESET_PASSWORD_SUCCESS";
const RESET_PASSWORD_FAILED = "RESET_PASSWORD_FAILED";
const RESET_MESSAGE_SUCCESS = "Password successfully reset";
const RESET_PASSWORD_RESET_DATA = "RESET_PASSWORD_RESET_DATA";

const GET_USER = "GET_USER";
const GET_USER_SUCCESS = "GET_USER_SUCCESS";
const GET_USER_FAILED = "GET_USER_FAILED";
const GET_USER_RESET_DATA = "GET_USER_RESET_DATA";

const UPDATE_USER = "UPDATE_USER";
const UPDATE_USER_SUCCESS = "UPDATE_USER_SUCCESS";
const UPDATE_USER_FAILED = "UPDATE_USER_FAILED";
const UPDATE_USER_RESET_DATA = "UPDATE_USER_RESET_DATA";

export { urlBase, GET_INGREDIENTS, GET_INGREDIENTS_SUCCESS, GET_INGREDIENTS_FAILED, ADD_INGREDIENT_DETAILS, REMOVE_INGREDIENT_DETAILS, 
    ADD_INGREDIENT, DELETE_INGREDIENT, MOVE_INGREDIENT, CLEAR_CONSTRUCTOR, CREATE_ORDER, CREATE_ORDER_SUCCESS, CREATE_ORDER_FAILED, 
    REMOVE_ORDER_NUMBER, ADD_PRICE, DELETE_PRICE, HOME_PAGE, REGISTER_PAGE, LOGIN_PAGE, PASSWORD_FORGOT_PAGE, PASSWORD_RESET_PAGE, 
    PROFILE_PAGE, ORDER_FEED_PAGE, ORDER_HISTORY_PAGE, NOT_FOUND_PAGE, INGREDIENT_PAGE, ACCESS_TOKEN, REFRESH_TOKEN, REGISTER_USER, 
    REGISTER_USER_SUCCESS, REGISTER_USER_FAILED, REGISTER_USER_RESET_DATA, LOGIN_USER, LOGIN_USER_SUCCESS, LOGIN_USER_FAILED, 
    LOGIN_USER_RESET_DATA, LOGOUT_USER, LOGOUT_USER_SUCCESS, LOGOUT_USER_FAILED, LOGOUT_USER_RESET_DATA, FORGOT_PASSWORD, 
    FORGOT_PASSWORD_SUCCESS, FORGOT_PASSWORD_FAILED, FORGOT_MESSAGE_SUCCESS, FORGOT_PASSWORD_RESET_DATA, RESET_PASSWORD, 
    RESET_PASSWORD_SUCCESS, RESET_PASSWORD_FAILED, RESET_MESSAGE_SUCCESS, RESET_PASSWORD_RESET_DATA, GET_USER, GET_USER_SUCCESS, 
    GET_USER_FAILED, GET_USER_RESET_DATA, UPDATE_USER, UPDATE_USER_SUCCESS, UPDATE_USER_FAILED, UPDATE_USER_RESET_DATA };