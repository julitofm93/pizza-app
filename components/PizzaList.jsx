import styles from "../styles/PizzaList.module.css";
import PizzaCard from "./PizzaCard.jsx";

const PizzaList = ({ pizzaList }) => {
  return (
    <div className={styles.container}>
        <h1 className={styles.title}>Mejor Pizza en la Ciudad</h1>
        <p className={styles.desc}>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatum accusamus ipsa modi quae natus molestiae deserunt quo, beatae, quis reiciendis commodi veritatis eum iste fugiat adipisci ullam sit asperiores fugit?
        </p>
        <div className={styles.wrapper}>
        {pizzaList?.map((pizza) => (
          <PizzaCard key={pizza._id} pizza={pizza} />
        ))}
        </div>
    </div>
  )
}

export default PizzaList

