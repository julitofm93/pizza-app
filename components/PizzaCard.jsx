import Image from "next/image";
import styles from "../styles/PizzaCard.module.css";

const PizzaCard = () => {
  return (
    <div className={styles.container}>
        <Image src="/img/pizza.png" alt="" width="500" height="500"/>
        <h1 className={styles.title}>FIORI DI ZUCCA</h1>
        <span className={styles.price}>$19.90</span>
        <p className={styles.desc}>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eos itaque repellat cupiditate, assumenda nostrum inventore doloremque expedita unde corrupti delectus provident minus modi ullam pariatur aut tenetur illo, quisquam voluptas.
        </p>
    </div>    
  )
}

export default PizzaCard