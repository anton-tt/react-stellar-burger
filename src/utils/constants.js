const urlBase = "https://norma.nomoreparties.space/api";

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

const WS_FEED_CONNECTION_START = "WS_FEED_CONNECTION_START";
const WS_FEED_CONNECTION_SUCCESS = "WS_FEED_CONNECTION_SUCCESS";
const WS_FEED_CONNECTION_ERROR = "WS_FEED_CONNECTION_ERROR";
const WS_FEED_CONNECTION_CLOSED = "WS_FEED_CONNECTION_CLOSED";
const WS_FEED_CONNECTION_FINISH = "WS_FEED_CONNECTION_FINISH";
const WS_FEED_GET_MESSAGE = "WS_FEED_GET_MESSAGE";
const WS_FEED_SEND_MESSAGE = "WS_FEED_SEND_MESSAGE";

const STRING_EMPTY = "";
const STATUS_CREATED = "created";
const STATUS_PENDING = "pending";
const STATUS_DONE = "done";
const ORDER_CREATED = "Создан";
const ORDER_PENDING = "Готовится";
const ORDER_DONE = "Выполнен";

const WS_HISTORY_CONNECTION_START = "WS_HISTORY_CONNECTION_START";
const WS_HISTORY_CONNECTION_SUCCESS = "WS_HISTORY_CONNECTION_SUCCESS";
const WS_HISTORY_CONNECTION_ERROR = "WS_HISTORY_CONNECTION_ERROR";
const WS_HISTORY_CONNECTION_CLOSED = "WS_HISTORY_CONNECTION_CLOSED";
const WS_HISTORY_CONNECTION_FINISH = "WS_HISTORY_CONNECTION_FINISH";
const WS_HISTORY_GET_MESSAGE = "WS_HISTORY_GET_MESSAGE";
const WS_HISTORY_SEND_MESSAGE = "WS_HISTORY_SEND_MESSAGE";
const INVALID_OR_MISSING_TOKEN = "Invalid or missing token";

const GET_ORDER = "GET_ORDER";
const GET_ORDER_SUCCESS = "GET_ORDER_SUCCESS";
const GET_ORDER_FAILED = "GET_ORDER_FAILED";
const GET_ORDER_RESET_DATA = "GET_ORDER_RESET_DATA";

const WS_FEED_URL = "wss://norma.nomoreparties.space/orders/all";
const WS_HISTORY_URL = "wss://norma.nomoreparties.space/orders";

export { urlBase,
    ADD_INGREDIENT, DELETE_INGREDIENT, MOVE_INGREDIENT, CLEAR_CONSTRUCTOR, CREATE_ORDER, CREATE_ORDER_SUCCESS, CREATE_ORDER_FAILED, 
    REMOVE_ORDER_NUMBER, ADD_PRICE, DELETE_PRICE, HOME_PAGE, REGISTER_PAGE, LOGIN_PAGE, PASSWORD_FORGOT_PAGE, PASSWORD_RESET_PAGE, 
    PROFILE_PAGE, ORDER_FEED_PAGE, ORDER_HISTORY_PAGE, ORDER_PAGE, INGREDIENTS_PATH, INGREDIENT_PAGE, NOT_FOUND_PAGE, ORDERS_PATH, 
    AUTHORIZATION_PATH, TOKEN_PATH, USER_PATH, LOGOUT_PATH, PASSWORD_RESET_BASE_PATH, PASSWORD_RESET_PATH, ACCESS_TOKEN, 
    REFRESH_TOKEN, FORGOT_MESSAGE_SUCCESS, RESET_MESSAGE_SUCCESS, UPDATE_TOKEN, UPDATE_TOKEN_SUCCESS, UPDATE_TOKEN_FAILED, WS_FEED_CONNECTION_START, 
    WS_FEED_CONNECTION_SUCCESS, WS_FEED_CONNECTION_ERROR, WS_FEED_CONNECTION_CLOSED, WS_FEED_CONNECTION_FINISH, WS_FEED_GET_MESSAGE, 
    WS_FEED_SEND_MESSAGE,STRING_EMPTY, STATUS_CREATED, STATUS_PENDING, STATUS_DONE, ORDER_CREATED, ORDER_PENDING, ORDER_DONE, 
    WS_HISTORY_CONNECTION_START, WS_HISTORY_CONNECTION_SUCCESS, WS_HISTORY_CONNECTION_ERROR, WS_HISTORY_CONNECTION_CLOSED, 
    WS_HISTORY_CONNECTION_FINISH, WS_HISTORY_GET_MESSAGE, WS_HISTORY_SEND_MESSAGE, GET_ORDER, GET_ORDER_SUCCESS, GET_ORDER_FAILED, 
    GET_ORDER_RESET_DATA, INVALID_OR_MISSING_TOKEN, WS_FEED_URL, WS_HISTORY_URL };