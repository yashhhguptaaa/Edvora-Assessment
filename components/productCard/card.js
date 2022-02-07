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

  const handleOnError = () => {
    console.log("Some error")
    setImgSrc('https://images.unsplash.com/photo-1594908900066-3f47337549d8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80');
  };

  const scale = id === 0 ? { scaleY: 1.1 } : { scale : 1.1};

  return (
    <div className={styles.container} >
      {/* <div className={cls(styles.imgMotionWrapper,classMap[size])} whileHover={{...scale}}> */}
      <div className={styles.imgMotionWrapper} >
        <Image src={props.image} alt="" layout="fill" className={styles.cardImg} 
        onError={handleOnError}
        />
      </div>
    </div>
  );
};

export default Card;
