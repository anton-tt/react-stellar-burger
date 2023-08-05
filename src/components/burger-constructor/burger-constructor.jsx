import { ConstructorElement, CurrencyIcon, Button } from "@ya.praktikum/react-developer-burger-ui-components"
import { useState, useMemo } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { useDrop } from "react-dnd";
import Filling from "../filling/filling.jsx";
import ModalBase from "../modal-base/modal-base.jsx";
import OrderDetails from "../order-details/order-details.jsx";
import styles from "./burger-constructor.module.css";
import { createOrder } from "../../services/actions/order-details.js";
import { addIngredient } from "../../services/actions/burger-constructor.js";
import { addPrice } from "../../services/actions/order-price.js";
import { ingredientPropType } from "../../utils/prop-types.js";
import PropTypes from "prop-types";

function BurgerConstructor() {

  const { bunsData, fillingData } = useSelector((store) => store.constructorData);
  const dispatch = useDispatch();
  
  const ingredientsId = useMemo(() => {
    let allId = [];
    if (fillingData.length > 0)  {
      allId = fillingData.filter((item) => item._id)
    }
    if (bunsData !== undefined)  {
      allId = [...allId, bunsData._id]
    }
  return allId;
  }, [fillingData, bunsData]);
  
  const [isOpenModal, setIsOpenModal] = useState(false);
  const openModal = () => {
    setIsOpenModal(true);
    dispatch(createOrder(ingredientsId));
  }
  const closeModal = () => {
    setIsOpenModal(false);
  }

  const onDropHandler = (ingredientData) => {
    dispatch(addIngredient(ingredientData));
    dispatch(addPrice(ingredientData, bunsData));
  }
  
  const [, dropTarget] = useDrop({
    accept: "ingredient",
    drop(ingredientData) {
      onDropHandler(ingredientData);
    }/*,
    collect: monitor => ({         {isHover}
        isHover: monitor.isOver(),
    })*/
  });

  const isNotAcceptableOrder = useMemo(() => { //!!!!!!!!!!!!!!!!!
    let isNotAcceptableOrder = true;
    if (bunsData !== undefined) {
      isNotAcceptableOrder = false;
    }
    return isNotAcceptableOrder;
  }, [bunsData]); 

  const { totalPrice } = useSelector((store) => store.orderPrice);

  return (
    <section className={`pt-25 pr-4 pl-4 ${styles.box}`} ref={dropTarget}>
      <div className={`pb-10 ${styles.list}`}>
        <div className="pl-8 pb-4">
          {bunsData ? (
          <ConstructorElement 
            type="top"
            isLocked={true}
            key={bunsData._id}
            text= {`${bunsData.name} (верх)`}
            price={bunsData.price}
            thumbnail={bunsData.image}
          />
          ) : null} 
        
        </div>  
        <Filling fillingData ={fillingData} />
        <div className="pl-8">
        
        {bunsData ? (
          <ConstructorElement 
            type="bottom"
            isLocked={true}
            key={bunsData._id}
            text= {`${bunsData.name} (низ)`}
            price={bunsData.price}
            thumbnail={bunsData.image}
          />
          ) : null} 
        </div> 
      </div>

      <div className={styles.result}>
        <div className={`pr-10 ${styles.calculation}`}>
          <p className="text text_type_digits-medium"> {totalPrice} </p>
          <CurrencyIcon type="primary" />
        </div>
        <Button htmlType="button" type="primary" size="large" onClick={openModal} disabled ={isNotAcceptableOrder}>
          Оформить заказ
        </Button>
      </div>
      
      { isOpenModal && (
        <>
          <ModalBase closeModal={closeModal}>
            <OrderDetails/>
          </ModalBase>
        </> )
      }
    </section>   
  );

}
      
BurgerConstructor.propTypes = { 
  ingredientsData: PropTypes.arrayOf(ingredientPropType).isRequired 
}      
      
export default BurgerConstructor;

/*
//const ingredientsData = [...fillingData, bunsData];

import { OrderContext } from "../../services/app-context.js";
import { AppContext } from "../../services/app-context.js";
import { addOrder } from "../../utils/api.jsx";

const [orderNumber, setOrderNumber] = useState();
  const ingredientsId = ingredientsData.map((item) => item._id); 
  const createOrder = () => {
    addOrder(ingredientsId)
    .then((res) => {  
      setOrderNumber(res.order.number);
    })
    .catch((err) => {
      console.log(err);
    });
    
  const openModal = () => {
    setIsOpenModal(true);
    createOrder(ingredientsId);
  }
  const closeModal = () => {
    setIsOpenModal(false);
    //setOrderNumber();
  }  

 let isOrderNotUndefined = orderNumber !== undefined;

 { isOpenModal && (
        <>
          {isOrderNotUndefined ? (
          <ModalBase closeModal={closeModal}>
          <OrderContext.Provider value={orderNumber}>
            <OrderDetails/>
          </OrderContext.Provider>
        </ModalBase>
     ) : (<h2>Загрузка...</h2>) }
    </> )
  }

useEffect(()=> {
    dispatch(getIngredientsList())
  }, []);
const { ingredientsData, ingredientsRequest, ingredientsFailed } = useSelector((store) => store.ingredientsData);

const ingredientsData = useContext(AppContext);
const ingredientsId = useMemo(() => {
    if(fillingData.length > 0) {
    ingredientsData.filter((item) => item._id)}}, [ingredientsData]);
const dispatch = useDispatch();

  const bunsData = useMemo(
    () => { return ingredientsData.find((item) => item.type === 'bun'); }, [ingredientsData]
  );
  const fillingData = useMemo(() => ingredientsData.filter((item) => item.type !== 'bun'), [ingredientsData]);
 
const priceInitialState = { totalPrice: 0 };
function reducerPrice(state, action) {
  switch (action.type) {
    case "addIngredient":
      return { totalPrice: state.totalPrice + action.priceIngredient };
    case "removeIngredient":
      return { totalPrice: state.totalPrice - action.priceIngredient };
    default:
      throw new Error(`Wrong type of action: ${action.type}`);
  }
}
  const [priceState, dispatchPrice] = useReducer(reducerPrice, priceInitialState);


  const handleIncrementClick = () => {
    // при вызове dispatch достаточно указать тип действия
dispatch({ type: "addIngredient" });
};

const handleDecrementClick = () => {
dispatch({ type: "removeIngredient" });
};


  useEffect( () => {
    bunsData && (dispatchPrice({ type: "addIngredient", priceIngredient: bunsData.price * 2 }));
    fillingData.forEach((item) => {
      dispatchPrice({ type: "addIngredient", priceIngredient: item.price });   
    });
  }, [fillingData, bunsData])

*/