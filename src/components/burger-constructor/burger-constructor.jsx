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
    }
  });

  const isNotAcceptableOrder = useMemo(() => {
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

        <ul className={`pr-2 ${styles.fillings}`} >
        { fillingData.map((element) => {
          return  ( 
            <Filling ingredientData={element} />
          )})
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
     
export default BurgerConstructor;