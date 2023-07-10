import { DragIcon, ConstructorElement  } from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./filling.module.css";
import { ingredientPropType } from "../../utils/prop-types.js";
import PropTypes from "prop-types";

function Filling({fillingData}) {
  
  return (
    <ul className={`pr-2 ${styles.filling} `}>
      { fillingData.map((element) => {
        return  (
          <li className={`pb-4 ${styles.string}`} key = {element._id}>     
            <DragIcon type="primary" />
            <ConstructorElement
              text= {element.name}
              price={element.price}
              thumbnail={element.image}
            />
          </li>
        )})
      }  
    </ul>
  )
  
}

Filling.propTypes = { 
  fillingData: PropTypes.arrayOf(ingredientPropType).isRequired 
}   

export default Filling;