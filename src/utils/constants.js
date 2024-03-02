const urlBase = "https://norma.nomoreparties.space/api";

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
const ORDER_PAGE = `${ORDER_FEED_PAGE}/:number`;
const INGREDIENTS_PATH = "/ingredients";
const INGREDIENT_PAGE = `${INGREDIENTS_PATH}/:id`;
const NOT_FOUND_PAGE = "*";

const ORDERS_PATH = "/orders";
const AUTHORIZATION_PATH = "/auth";
const TOKEN_PATH = "/token";
const USER_PATH = "/user";
const LOGOUT_PATH = "/logout";
const PASSWORD_RESET_BASE_PATH = "/password-reset";
const PASSWORD_RESET_PATH = "/reset";

const ACCESS_TOKEN = "accessToken";
const REFRESH_TOKEN = "refreshToken";

const FORGOT_MESSAGE_SUCCESS = "Reset email sent";
const RESET_MESSAGE_SUCCESS = "Password successfully reset";

const UPDATE_TOKEN = "UPDATE_TOKEN";
const UPDATE_TOKEN_SUCCESS = "UPDATE_TOKEN_SUCCESS";
const UPDATE_TOKEN_FAILED = "UPDATE_TOKEN_FAILED";

const STRING_EMPTY = "";
const STATUS_CREATED = "created";
const STATUS_PENDING = "pending";
const STATUS_DONE = "done";
const ORDER_CREATED = "Создан";
const ORDER_PENDING = "Готовится";
const ORDER_DONE = "Выполнен";

const INVALID_OR_MISSING_TOKEN = "Invalid or missing token";

const WS_FEED_URL = "wss://norma.nomoreparties.space/orders/all";
const WS_HISTORY_URL = "wss://norma.nomoreparties.space/orders";

export { urlBase, ADD_PRICE, DELETE_PRICE, HOME_PAGE, REGISTER_PAGE, LOGIN_PAGE, PASSWORD_FORGOT_PAGE, PASSWORD_RESET_PAGE, 
    PROFILE_PAGE, ORDER_FEED_PAGE, ORDER_HISTORY_PAGE, ORDER_PAGE, INGREDIENTS_PATH, INGREDIENT_PAGE, NOT_FOUND_PAGE, ORDERS_PATH, 
    AUTHORIZATION_PATH, TOKEN_PATH, USER_PATH, LOGOUT_PATH, PASSWORD_RESET_BASE_PATH, PASSWORD_RESET_PATH, ACCESS_TOKEN, 
    REFRESH_TOKEN, FORGOT_MESSAGE_SUCCESS, RESET_MESSAGE_SUCCESS, UPDATE_TOKEN, UPDATE_TOKEN_SUCCESS, UPDATE_TOKEN_FAILED, 
    STRING_EMPTY, STATUS_CREATED, STATUS_PENDING, STATUS_DONE, ORDER_CREATED, ORDER_PENDING, ORDER_DONE, 
    INVALID_OR_MISSING_TOKEN, WS_FEED_URL, WS_HISTORY_URL };