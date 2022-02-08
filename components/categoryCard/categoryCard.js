import styles from "./CategoryCard.module.css";

import Image from "next/image";

const CategoryCard = () => {
    return (
        <div className={styles.container}>
            <div className={styles.wrapper}>

                <div className={styles.searchOption}>
                    {/* <input styles={{backgroundColor:"black"}} type="search" /> */}
                    <span className={styles.searchTitle}>Filters</span>
                    <div className={styles.hrContainer}>
                        <hr />
                    </div>
                    
                </div>
                
                <div className={styles.productsDropdown}>
                    <span className={styles.productsTitle}>Products</span>
                    <div className={styles.dropDownImage}>

                        <Image
                            src={"/static/expand_more.svg"}
                            alt="Expand more icon"
                            width="24px"
                            height="24px"
                        />

                    </div>
                </div>

                <div className={styles.stateDropdown}>
                    <span className={styles.productsTitle}>Products</span>
                    <div className={styles.dropDownImage}>

                        <Image
                            src={"/static/expand_more.svg"}
                            alt="Expand more icon"
                            width="24px"
                            height="24px"
                        />

                    </div>
                </div>
                <div className={styles.cityDropdown}>
                    <span className={styles.productsTitle}>Products</span>
                    <div className={styles.dropDownImage}>

                        <Image
                            src={"/static/expand_more.svg"}
                            alt="Expand more icon"
                            width="24px"
                            height="24px"
                        />

                    </div>
                </div>
            </div>
        </div>
    )
};

export default CategoryCard;