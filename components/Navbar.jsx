import styles from "../styles/Navbar.module.css"
import Image from "next/image"
import {useSelector} from "react-redux";
import Link from "next/link";

const Navbar = () => {

  const quantity = useSelector((state) => state.cart.quantity);
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <div className={styles.callButton}>
          <Image src="/img/phone-call.png" alt="" width="32" height="32"/>
        </div>
        <div className={styles.texts}>
          <div className={styles.text}>ORDENA AHORA!</div>
          <div className={styles.text}>15 5651 2645</div>
        </div>
      </div>
      <div className={styles.item}>
        <ul className={styles.list}>
          <Link href="/" passHref>
            <li className={styles.listItem}>Home</li>
          </Link>
          <li className={styles.listItem}>Productos</li>
          <li className={styles.listItem}>Menu</li>
          <Image src="/img/logo.png" alt="" width="160px" height="69px"/>
          <li className={styles.listItem}>Eventos</li>
          <li className={styles.listItem}>Blog</li>
          <li className={styles.listItem}>Contacto</li>
        </ul>
      </div>
      <Link href="/cart" passHref>
      <div className={styles.item}>
        <div className={styles.cart}>
        <Image src="/img/cart.png" alt="" width="30px" height="30px"/>
        <div className={styles.counter}>{quantity}</div>
        </div>
      </div>
      </Link>
    </div>
  )
}

export default Navbar