import { ConstructorElement, CurrencyIcon, Button } from "@ya.praktikum/react-developer-burger-ui-components"
import { useState, useMemo, useContext } from "react";
import Filling from "../filling/filling.jsx";
import ModalBase from "../modal-base/modal-base.jsx";
import OrderDetails from "../order-details/order-details.jsx";
import styles from "./burger-constructor.module.css"
import { AppContext } from "../../services/app-context.js";
import { addOrder } from "../../utils/api.jsx";
import { ingredientPropType } from "../../utils/prop-types.js";
import PropTypes from "prop-types";


function BurgerConstructor() {
 
  const ingredientsData = useContext(AppContext);

  const [orderNumber, setOrderNumber] = useState();
  const ingredientsId = ingredientsData.map((item) => item._id);
  const createOrder = () => {
    addOrder(ingredientsId)
    .then((res) => {  
      setOrderNumber(res.order.number);
    })
    .catch((err) => {
      console.log(err);
    }) 
  }

  const [isOpenModal, setIsOpenModal] = useState(false);
  const openModal = () => {
    setIsOpenModal(true);
    createOrder();
  }
  const closeModal = () => {
    setIsOpenModal(false);
    setOrderNumber(null);
  }
  const bunsData = useMemo(
    () => { return ingredientsData.find((item) => item.type === 'bun'); }, [ingredientsData]
  );
  const fillingData = useMemo(() => ingredientsData.filter((item) => item.type !== 'bun'), [ingredientsData]);
 
let isOrderNotNull = orderNumber !== null;


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
      <>
        {isOrderNotNull ? (
          <ModalBase closeModal={closeModal}>
            <OrderDetails orderNumber={orderNumber}/>
          </ModalBase>
        ) : (<h2>Загрузка...</h2>) }
      </> )
}
    </section>   
  );

}
      
BurgerConstructor.propTypes = { 
  ingredientsData: PropTypes.arrayOf(ingredientPropType).isRequired 
}      
      
export default BurgerConstructor;