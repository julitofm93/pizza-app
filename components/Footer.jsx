import Image from "next/image"
import styles from "../styles/Footer.module.css"

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <Image src="/img/bg.png" layout="fill" alt=""/>
      </div>
      <div className={styles.item}>
        <div className={styles.card}>
          <h2 className={styles.motto}>
            WELL BAKED SLICE OF PIZZA
          </h2>
        </div>
        <div className={styles.card}>
          <h2 className={styles.title}>ENCONTRÁ NUESTRAS SUCURSALES</h2>
          <p className={styles.text}>
            1654 Av. Crovara #304. 
            <br /> Tablada, 1766
            <br /> 11 56512645
          </p>
          <p className={styles.text}>
            1654 Av. Crovara #304. 
            <br /> Tablada, 1766
            <br /> 11 56512645
          </p>
        </div>
        <div className={styles.card}>
          <h2 className={styles.title}>HORARIOS</h2>
          <p className={styles.text}>
            LUNES A VIERNES
            <br /> 9:00 - 24:00
          </p>
        </div>
      </div>
    </div>
  )
}

export default Footer