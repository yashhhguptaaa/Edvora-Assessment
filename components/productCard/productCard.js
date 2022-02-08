import styles from "./ProductCard.module.css"

import Card from "./card";

const ProductCard = (props) => {
    // console.log({props});
    const { title, products=[]} = props;
    // console.log({ products });
    return (
        <section className={styles.container}>
            <h2 className={styles.title}>{title}</h2>
            <hr style={{width:"66rem",marginLeft:"1.5rem"}}/>
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