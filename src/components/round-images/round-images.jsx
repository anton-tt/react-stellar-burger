import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import styles from "./round-images.module.css";
import {  uuu} from "../../utils/utils.js";

function RoundImages({ingredients}) {
  const yyy = [
    'https://koshka.top/uploads/posts/2023-10/1696329610_koshka-top-p-malie-koshki-67.jpg',
    'https://gas-kvas.com/grafic/uploads/posts/2023-09/1695931383_gas-kvas-com-p-kartinki-s-kotami-10.jpg',
   'https://vplate.ru/images/article/orig/2019/04/interesnye-fakty-o-koshkah-i-kotah-40.jpg',
   'https://mykaleidoscope.ru/x/uploads/posts/2022-10/1666152147_2-mykaleidoscope-ru-p-sereznii-kot-krasivo-3.jpg',
   'https://gas-kvas.com/grafic/uploads/posts/2023-09/1695931383_gas-kvas-com-p-kartinki-s-kotami-9.jpg',
  'https://www.zastavki.com/pictures/originals/2018Animals___Cats_Large_gray_cat_with_a_surprised_look_123712_.jpg',
   'https://storge.pic2.me/upload/186/59930129033a9.jpg'


  

];

const ingredientImages = ingredients.map((item) => item.image_mobile);
const numberImages = ingredientImages.length;

const getImageStyles = (index, numberImages) => {
  if (numberImages > 6 && index === 6) {
    return styles.extra
  } else {
    return styles.image
  }
}


const renderSixImages = (array, numberImages) => {
return array.map((image, index) => (

    <img className={(numberImages > 6 && index === 5) ? styles.extra : styles.image} src={image} key={index} />
  ))
};


if (numberImages > 6) {
  const visibleImages = ingredientImages.slice(0, 6);
  const numberHiddenImages = numberImages - 6; 
  return (
    <>
    {renderSixImages(visibleImages, numberImages)}
    <p className={`${styles.surplus} text text_type_main-medium`}>{`+${numberHiddenImages}`}</p>
    
    </>
  );
} else {
  return (
    <>
    {renderSixImages(ingredientImages)}
    </>
  );
}


}
   


      
export default RoundImages;