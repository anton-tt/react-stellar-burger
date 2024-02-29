import { useState, useMemo } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { useDrop } from "react-dnd";
import { useNavigate, useLocation} from "react-router-dom";
import { ConstructorElement, CurrencyIcon, Button } from "@ya.praktikum/react-developer-burger-ui-components";
//import { TStore } from "../../services/store.js";
import Filling from "../filling/filling";
import ModalBase from "../modal-base/modal-base.jsx";
import OrderDetails from "../order-details/order-details.jsx";
import { REFRESH_TOKEN, LOGIN_PAGE } from "../../utils/constants.js";
import { TResponseIngredientData } from "../../services/types/burger-ingredients";
import { createOrder, removeOrderNumber } from "../../services/actions/order-details.js";
import { addIngredient } from "../../services/actions/burger-constructor";
import styles from "./burger-constructor.module.css";

import rootReducer from "../../services/reducers/root-reducer.js";
function BurgerConstructor() {
  type TStore = ReturnType<typeof rootReducer>;

  const dispatch = useDispatch();

  const navigate = useNavigate();

  const location = useLocation();

  const refreshToken = localStorage.getItem(REFRESH_TOKEN);

  const getConstructorData = (store: TStore) => store.constructorData;
  const { bunsData, fillingData } = useSelector(getConstructorData);
  
  const ingredientsId = useMemo(() => {
    let allId: Array<string> = [];
    if (fillingData.length > 0)  {
      fillingData.forEach(item => {
        allId = [...allId, item._id];
      })
    }
    if (bunsData !== undefined)  {
      allId = [...allId, bunsData._id]
    }
    return allId;
  }, [fillingData, bunsData]);

  const totalPrice = useMemo(() => {
    let price = 0;
    if (bunsData !== undefined) {
      price += bunsData.price * 2;
    }
    if (fillingData.length > 0) {
      let fillingPrice = 0;
      fillingData.forEach((element) => {
        fillingPrice += element.price
      });
      price += fillingPrice;
    } 
    return price;
  }, [bunsData, fillingData]);

  const [isOpenModal, setIsOpenModal] = useState(false);
  const openModal = () => {
    setIsOpenModal(true);
    dispatch(createOrder(ingredientsId));
  }
  const closeModal = () => {
    setIsOpenModal(false);
    dispatch(removeOrderNumber());
  }

  const onDropHandler = (ingredientData: TResponseIngredientData) => {
    dispatch(addIngredient(ingredientData));
  }
  
  const [{isHover}, dropTarget] = useDrop({
    accept: "ingredient",
    drop(ingredientData: TResponseIngredientData) {
      onDropHandler(ingredientData);
    },
    collect: monitor => ({
        isHover: monitor.isOver(),
    })
  });

  const isNotAcceptableOrder = useMemo(() => {
    let isNotAcceptableOrder = true;
    if (bunsData !== undefined) {
      isNotAcceptableOrder = false;
    }
    return isNotAcceptableOrder;
  }, [bunsData]); 

  const highlightBox = isHover ? (styles.box_highlight) : null; 

  const onClick = refreshToken ? openModal : () => navigate(LOGIN_PAGE, { state: {from: location} });

  return (
    <section className={`pt-25 pr-4 pl-4 ${styles.box} ${highlightBox}`} ref={dropTarget}> 
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
        
        <ul className={`pr-2 ${styles.fillings}`} >
        { (fillingData.length > 0) && (fillingData.map((element) => {
          return  ( 
            <Filling ingredientData={element}/>
          )})) 
        }  
        </ul> 
        
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
        <Button htmlType="button" type="primary" size="large" onClick={onClick} disabled ={isNotAcceptableOrder}>
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
     
export default BurgerConstructor;