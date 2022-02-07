import styles from "./ProductCard.module.css"

const ProductCard = (props) => {
    const { title, videos=[], size } = props;
    console.log({ videos });
    return (
        <section className={styles.container}>
        <h2 className={styles.title}>{title}</h2>
        <div className={styles.cardWrapper}>
            {videos.map((video, idx) => {
            return <Card id={idx} imgUrl={video.imgUrl} size={size} />;
            })}
        </div>
        </section>
    );
};

export default ProductCard;