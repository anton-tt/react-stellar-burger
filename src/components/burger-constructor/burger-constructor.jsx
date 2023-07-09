import { ConstructorElement, CurrencyIcon, Button } from "@ya.praktikum/react-developer-burger-ui-components"
import { useState, useMemo } from "react";
import Filling from "../filling/filling.jsx";
import ModalBase from "../modal-base/modal-base.jsx";
import OrderDetails from "../order-details/order-details.jsx";
import styles from "./burger-constructor.module.css"
import { ingredientPropType } from "../../utils/prop-types.js";
import PropTypes from "prop-types";

function BurgerConstructor({ingredientsData}) {
 
  const [isOpenModal, setIsOpenModal] = useState(false);
  const openModal = () => {
    setIsOpenModal(true);
  }
  const closeModal = () => {
    setIsOpenModal(false);
  }
  const bunsData = useMemo(
    () => { return ingredientsData.find((item) => item.type === 'bun'); }, [ingredientsData]
  );
  const fillingData = useMemo(() => ingredientsData.filter((item) => item.type !== 'bun'), [ingredientsData]);

  return (
    <section className={`pt-25 pr-4 pl-4 ${styles.box}`}>
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