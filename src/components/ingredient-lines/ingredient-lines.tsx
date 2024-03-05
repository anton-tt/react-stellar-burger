import { CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import { TResponseIngredientData } from "../../services/types/burger-ingredients";
import styles from "./ingredient-lines.module.css";

type TIngredientLinesProps = {
  bunData: TResponseIngredientData | undefined;
  fillingData: Array<TResponseIngredientData | undefined> | undefined;
};

function IngredientLines({bunData, fillingData}: TIngredientLinesProps) {

  let fillingIds: Array<string | undefined> = [];

  const countElement = (elementId: string | undefined) => {
    return fillingData?.filter(item => item?._id === elementId).length
  }
  
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
          const elementId = element?._id;
          if (!fillingIds.includes(elementId)) {
            fillingIds = [...fillingIds, elementId];
            return ( 
              <li className={styles.element} key={elementId}>
                <div className={styles.component}>
                  <img  className={styles.image} src={element?.image_mobile} />    
                  <p className="pl-4 text text_type_main-small"> {element?.name} </p>
                </div>
                <div  className={styles.component}>
                  <p className={`text text_type_digits-default ${styles.count}`}> 
                    {countElement(element?._id)} x {element?.price} 
                  </p>
                  <CurrencyIcon type="primary"/> 
                </div>
              </li>);
          }
          })
        }   
      </ul>
    );
  } else {
    return null;
  }

}

export default IngredientLines;