import styles from "./orders-stat.module.css";
import { useState, useMemo } from "react";
function OrdersStat({stats}) {
  //console.log(stats);
  //const {total, totalToday} = stats;
  // console.log(stats[totalOrders]);
  //console.log(totalTodayOrders);
  const {totalOrders, totalTodayOrders, readyOrdersData, unreadyOrdersData} = stats;
  /*console.log(readyOrdersData);
  console.log(unreadyOrdersData);*/
  const readyNumbers = useMemo(() => {
    return readyOrdersData.map((orderNumber, index) => {
      return <li className={`text text_type_digits-default ${styles.done}`} key={index}>{orderNumber}</li>
    });
  }, [readyOrdersData]);
  const unreadyNumbers = useMemo(() => {
    return unreadyOrdersData.map((orderNumber) => {
    return <li className={`text text_type_digits-default`}>{orderNumber}</li>
  });
}, [unreadyOrdersData]);

    return (
      <section className={styles.section}>

        <div  className={styles.board}>
          <div className={styles.list}>
            <p className="text text_type_main-medium pb-6"> Готовы: </p>
            <ul className={styles.numbers}>
            {readyNumbers}
            </ul>
          </div>
          <div className={styles.list}>
            <p className="text text_type_main-medium pb-6"> В работе: </p>
            <ul className={styles.numbers}>
            {unreadyNumbers}
            </ul>
          </div>
        </div>

        <div className="pt-15">
          <p className="text text_type_main-medium"> Выполнено за всё время: </p>
          <p className="text text_type_digits-large">{totalOrders}</p>
        </div>

        <div  className="pt-15">
          <p className="text text_type_main-medium"> Выполнено за сегодня: </p>
          <p className="text text_type_digits-large">{totalTodayOrders}</p>
        </div>

      </section> 
    );

}

export default OrdersStat;