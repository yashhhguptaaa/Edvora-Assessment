import Image from "next/image";
import { useState } from "react";
import styles from "./card.module.css";

import cls from "classnames";
import moment from "moment";
// import { motion } from "framer-motion";

const Card = (props) => {

  return (
    <div className={cls("glass",styles.container)} >
      {/* <div className={cls(styles.imgMotionWrapper,classMap[size])} whileHover={{...scale}}> */}
      <div className={styles.headComponent}>

        <div className={styles.imgMotionWrapper} >
            <img src={props.productDetails.image} alt="" layout="fill" className={styles.cardImg}  
            />
        </div>

        <div className={styles.productNameBrandCost}>
            <h4 className={styles.productNameElement}>{props.productDetails.product_name.substring(0,13)+".."}</h4>
            <h4 className={styles.productBrandElement}>{props.productDetails.brand_name}</h4>
            <p className={styles.costElement}>$ {props.productDetails.price}</p>
        </div>

      </div>

      <div className={styles.middleComponent}>
        <h4 className={styles.productAddress}>{props.productDetails.address.state.length > 10 ? props.productDetails.address.state.substring(0,8) + 
        "..": props.productDetails.address.state}</h4>
        <h4 className={styles.productDate}><span className={styles.dateTitle}>Date</span>: {moment(props.productDetails.date).format('DD/MM/YYYY')}</h4>
      </div>

      <div className={styles.bottomComponent}>
        <h4 className={styles.productDescription}>{props.productDetails.discription}</h4>
      </div>

      
    </div>
  );
};

export default Card;
