import { useMemo } from "react";
import styles from "./round-images.module.css";
import { TResponseIngredientData } from "../../services/types/burger-ingredients";


type TIngredients = {
  ingredients: Array<TResponseIngredientData | undefined> ;
};

function RoundImages({ingredients}: TIngredients) {


  const ingredientImages = useMemo(() => ingredients.map((item) => item?.image_mobile), [ingredients]);
  const numberImages = ingredientImages.length;

  const renderSixImages = (images: Array<string | undefined>, numberImages: number) => {
    return images.map((image, index) => (
      <img className={(numberImages > 6 && index === 5) ? styles.extra : styles.image} src={image} key={index} />
    ))
  };

  if (numberImages > 6) {
    const visibleImages = ingredientImages.slice(0, 6);
    const numberHiddenImages = numberImages - 6;
    return (
      <>
        { renderSixImages(visibleImages, numberImages) }
        <p className={`${styles.surplus} text text_type_main-medium`}> {`+${numberHiddenImages}`} </p>
      </>
    );

  } else {
    return (
      <>
        { renderSixImages(ingredientImages, 0) }
      </>
    );
 }


}
        
export default RoundImages;