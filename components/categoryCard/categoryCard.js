import styles from "./CategoryCard.module.css";

const CategoryCard = () => {
    return (
        <div className={styles.container}>
            <div className={styles.wrapper}>

                <div className={styles.searchOption}>
                    <span className={styles.searchTitle}>Search</span>
                    <div className={styles.hrContainer}>
                        <hr />
                    </div>
                    
                </div>
                
                <div className={styles.productsDropdown}>
                    <span></span>
                    
                </div>
                <div className={styles.stateDropdown}></div>
                <div className={styles.cityDropdown}></div>
            </div>
        </div>
    )
};

export default CategoryCard;