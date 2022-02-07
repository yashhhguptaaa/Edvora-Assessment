import Image from "next/image";
import { useState } from "react";
import styles from "./card.module.css";

// import cls from "classnames";
// import { motion } from "framer-motion";

const Card = (props) => {
  

//   const [imgSrc, setImgSrc] = useState(imgUrl);

//   const classMap = {
//     large: styles.lgItem,
//     medium: styles.mdItem,
//     small: styles.smItem,
//   };

  console.log("props:",props)
  const handleOnError = () => {
    console.log("Some error")
    setImgSrc('https://images.unsplash.com/photo-1594908900066-3f47337549d8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80');
  };

//   const scale = id === 0 ? { scaleY: 1.1 } : { scale : 1.1};

  return (
    <div className={styles.container} >
      {/* <div className={cls(styles.imgMotionWrapper,classMap[size])} whileHover={{...scale}}> */}
      <div className={styles.headComponent}>

        <div className={styles.imgMotionWrapper} >
            <img src={props.productDetails.image} alt="" layout="fill" className={styles.cardImg} 
            onError={handleOnError} width="200" height="100"
            />
        </div>

        <div className={styles.productNameBrand}>
            <h4 className={styles.productNameElement}>{props.productDetails.product_name}</h4>
            <h4 className={styles.productBrandElement}>{props.productDetails.brand_name}</h4>
            <p className={styles.costElement}>$ {props.productDetails.price}</p>
        </div>

      </div>

      <div className={styles.middleComponent}>

      </div>

      <div className={styles.bottomComponent}>

      </div>

      
    </div>
  );
};

export default Card;
