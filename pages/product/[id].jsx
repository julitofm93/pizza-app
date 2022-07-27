import styles from "../../styles/Product.module.css";
import Image from "next/image";
import { useState } from "react";

const Product = () => {
    const [size, setSize] = useState(0);
    const pizza = {
        id: 1,
        img: "/img/pizza.png",
        name: "MUZZARELLA",
        price:[19.0, 23.9, 27.9],
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea porro obcaecati perferendis libero facilis eveniet minima expedita commodi culpa odio odit minus, aut at sit error ipsam placeat rerum in."
    };

  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <div className={styles.imgContainer}>
            <Image src={pizza.img} layout="fill" alt="" objectFit="contain"/>
        </div>
      </div>
      <div className={styles.right}>
        <h1 className={styles.title}>{pizza.name}</h1>
        <span className={styles.price}>${pizza.price[size]}</span>
        <p className={styles.desc}>{pizza.desc}</p>
        <h3 className={styles.choose}>Elegí el tamaño</h3>
        <div className={styles.sizes}>
            <div className={styles.size} onClick={()=>setSize(0)}>
                <Image src="/img/size.png" layout="fill" alt=""/>
                <span className={styles.number}>Small</span>
            </div>
            <div className={styles.size} onClick={()=>setSize(1)}>
                <Image src="/img/size.png" layout="fill" alt=""/>
                <span className={styles.number}>Medium</span>
            </div>
            <div className={styles.size} onClick={()=>setSize(2)}>
                <Image src="/img/size.png" layout="fill" alt=""/>
                <span className={styles.number}>Large</span>
            </div>
        </div>
        <h3 className={styles.choose}>Agregá ingredientes</h3>
        <div className={styles.ingredients}>
            <div className={styles.option}>
                <input 
                    type="checkbox" 
                    id="double" 
                    name="double" 
                    className={styles.checkbox} 
                />
                <label htmlFor="double">Doble ingredientes</label>
            </div>
            <div className={styles.option}>
                <input 
                    type="checkbox" 
                    id="cheese" 
                    name="cheese" 
                    className={styles.checkbox} 
                />
                <label htmlFor="cheese">Extra Queso</label>
            </div>
            <div className={styles.option}>
                <input 
                    type="checkbox" 
                    id="cheese" 
                    name="cheese" 
                    className={styles.checkbox} 
                />
                <label htmlFor="cheese">Extra Queso</label>
            </div>
            <div className={styles.option}>
                <input 
                    type="checkbox" 
                    id="spicy" 
                    name="spicy" 
                    className={styles.checkbox} 
                />
                <label htmlFor="spicy">Extra Picante</label>
            </div>
            <div className={styles.option}>
                <input 
                    type="checkbox" 
                    id="garlic" 
                    name="garlic" 
                    className={styles.checkbox} 
                />
                <label htmlFor="garlic">Extra Ajo</label>
            </div>
        </div>
        <div className={styles.add}>
            <input type="number" defaultValue={1} className={styles.quantity}/>
            <button className={styles.button}>Agregar al Carrito</button>
        </div>
      </div>
    </div>
  )
}

export default Product
