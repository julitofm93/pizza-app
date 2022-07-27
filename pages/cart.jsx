import styles from "../styles/Cart.module.css"
import Image from "next/image";

const Cart = () => {
  return (
    <div className={styles.container}>
        <div className={styles.left}>
            <table className={styles.table}>
                <tr className={styles.trTitle}>
                    <th>Producto</th>
                    <th>Nombre</th>
                    <th>Extras</th>
                    <th>Precio</th>
                    <th>Cantidad</th>
                    <th>Total</th>
                </tr>
                <tr className={styles.tr}>
                    <td>
                        <div className={styles.imgContainer}>
                            <Image 
                                src="/img/pizza.png"
                                layout="fill"
                                objectFit="cover"
                                alt=""
                            />
                        </div>
                    </td>
                    <td>
                        <span className={styles.name}>CORALZO</span>
                    </td>
                    <td>
                        <span className={styles.extras}>
                            Doble ingrediente, salsa picante
                        </span>
                    </td>
                    <td>
                        <span className={styles.price}>$19.90</span>
                    </td>
                    <td>
                        <span className={styles.quantity}>2</span>
                    </td>
                    <td>
                        <span className={styles.total}>$39.90</span>
                    </td>
                </tr>
            </table>
        </div>
        <div className={styles.right}>
            <div className={styles.wrapper}>
                <h2 className={styles.title}>TOTAL CARRITO</h2>
                <div className={styles.totalText}>
                    <b className={styles.totalTextTitle}>Subtotal:</b>$79.90
                </div>
                <div className={styles.totalText}>
                    <b className={styles.totalTextTitle}>Descuento:</b>$9.90
                </div>
                <div className={styles.totalText}>
                    <b className={styles.totalTextTitle}>Total:</b>$70.00
                </div>
                <button className={styles.button}>COMPRAR AHORA</button>
            </div>
        </div>
    </div>
  )
}

export default Cart