import { ConstructorElement, CurrencyIcon, Button } from "@ya.praktikum/react-developer-burger-ui-components"
import { useState, useMemo } from "react";
import { ingredientPropType } from "../../utils/prop-types.js";
import Filling from "../filling/filling.jsx";
import ModalBase from "../modal-base/modal-base.jsx";
import OrderDetails from "../order-details/order-details.jsx";
import styles from "./burger-constructor.module.css"
import PropTypes from "prop-types";

function BurgerConstructor({ingredientsData}) {
 
  const [isOpenModal, setIsOpenModal] = useState(false);
  const openModal = () => {
    setIsOpenModal(true);
  }
  const closeModal = () => {
    setIsOpenModal(false);
  }
  const {bunsData} = ingredientsData.filter((item) => item.name === 'Краторная булка N-200i');
  const fillingData = useMemo(() => ingredientsData.filter((item) => item.type !== 'bun'));
  
  return (
    <section className={`pt-25 pr-4 pl-4 ${styles.box}`}>
      <div className={`pb-10 ${styles.list}`}>
        <div className="pl-8 pb-4">
          {bunsData ? (
          <ConstructorElement 
            type="top"
            isLocked={true}
            text= {`${bunsData[0].name} (верх)`}
            price={bunsData[0].price}
            thumbnail={bunsData[0].image}
          />
          ) : null} 
        
        </div>  
        <Filling fillingData ={fillingData} />
        <div className="pl-8">
        
        {bunsData ? (
          <ConstructorElement 
            type="bottom"
            isLocked={true}
            text= {`${bunsData[0].name} (низ)`}
            price={bunsData[0].price}
            thumbnail={bunsData[0].image}
          />
          ) : null} 
        </div> 
      </div>

      <div className={styles.result}>
        <div className={`pr-10 ${styles.calculation}`}>
          <p className="text text_type_digits-medium">610</p>
          <CurrencyIcon type="primary" />
        </div>
        <Button htmlType="button" type="primary" size="large" onClick={openModal}>
          Оформить заказ
        </Button>
      </div>
      { isOpenModal && (
        <ModalBase closeModal={closeModal}>
          <OrderDetails/>
        </ModalBase>)
      }
    </section>   
  );
 
}
      
BurgerConstructor.propTypes = { 
  ingredientsData: PropTypes.arrayOf(ingredientPropType).isRequired 
}      
      
export default BurgerConstructor;