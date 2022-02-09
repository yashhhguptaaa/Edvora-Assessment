import styles from "./ProductCard.module.css"

import Card from "./card";

const ProductCard = (props) => {

    const { title, products=[]} = props;
    return (
        <section className={styles.container}>
            <h2 className={styles.title}>{title}</h2>
            <hr className={styles.hrStyling} />
            <div className={styles.productCardWrapper}>

                <div className={styles.cardWrapper}>
                    {products.map((product, idx) => {
                    return <Card key={idx} productDetails={product}  />;
                    })}
                </div>

            </div>
        </section>
    );
};

export default ProductCard;