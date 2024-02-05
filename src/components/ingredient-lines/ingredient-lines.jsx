import { CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./ingredient-lines.module.css";

function IngredientLines({bunData, fillingData}) {
  
  if (bunData) {
    return ( 
      <ul className={styles.components}>
        <li className={styles.element} key={bunData._id}>
          <div className={styles.component}>
            <img className={styles.image} src={bunData.image_mobile} />    
            <p  className="pl-4 text text_type_main-small"> {bunData.name} </p>
          </div>
          <div  className={styles.component}>  
            <p className={`text text_type_digits-default ${styles.count}`}> 2 x {bunData.price} </p>    
            <CurrencyIcon type="primary"/>
          </div>
        </li>

        { fillingData?.map((element) => {
          return ( 
            <li className={styles.element} key={element._id}>
              <div className={styles.component}>
                <img  className={styles.image} src={element.image_mobile} />    
                <p className="pl-4 text text_type_main-small"> {element.name} </p>
              </div>
              <div  className={styles.component}>
                <p className={`text text_type_digits-default ${styles.count}`}> 1 x {element.price} </p>
                <CurrencyIcon type="primary"/> 
              </div>
            </li>);
          })
        }   
      </ul>
    );
  } else {
    return null;
  }

}

export default IngredientLines;