import styles from "./ProductCard.module.css"

const ProductCard = (props) => {
    console.log({props});
    const { title, products=[]} = props;
    console.log({ products });
    return (
        <section className={styles.container}>
        <h2 className={styles.title}>{title}</h2>
        
        {/* <div className={styles.cardWrapper}>
            {products.map((video, idx) => {
            return <Card id={idx} imgUrl={video.imgUrl} />;
            })}
        </div> */}
        </section>
    );
};

export default ProductCard;