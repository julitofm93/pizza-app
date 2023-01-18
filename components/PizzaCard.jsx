import Image from "next/image";
import styles from "../styles/PizzaCard.module.css";
import Link from "next/link";

const PizzaCard = ({ pizza }) => {
  return (
    <div className={styles.container}>
      <Link href={`/product/${pizza._id}`} passHref>
        <Image src={pizza.img} alt="" width="400" height="400" />
      </Link>
      <h1 className={styles.title}>{pizza.title}</h1>
      <p className={styles.desc}>{pizza.desc}</p>
      <span className={styles.title}>${pizza.prices[0]}</span>
      <button className={styles.button}>Agregar</button>
    </div>
  );
};

export default PizzaCard;