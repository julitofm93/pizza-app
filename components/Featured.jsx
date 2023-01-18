import styles from "../styles/Featured.module.css";
import Image from "next/image";
import { useState } from "react";
import { sliderItems } from "../public/data";

const Featured = () => {
  const [index, setIndex] = useState(0);

  const handleArrow = (direction) =>{
      if(direction==="l"){
          setIndex(index !== 0 ? index-1 : 2)
      }
      if(direction==="r"){
          setIndex(index !== 2 ? index+1 : 0)
      }
  }

  return (
    <div className={styles.container}>
      <div className={styles.arrowContainer} style={{ left: 0 }} onClick={()=>handleArrow("l")}>
        <Image src="/img/arrowl.png" alt="" layout="fill" objectFit="contain"/>
      </div>
      <div className={styles.wrapper} style={{transform:`translateX(${-100*index}vw)`}}>
        {sliderItems.map((item) => (
            <div className={styles.slider} key={item.id}>
            <div className={styles.infoContainer}>
                <p className={styles.desc}>{item.price}</p>
                <h1 className={styles.title}>{item.title}</h1>
                <p className={styles.desc}>{item.desc}</p>
                <button className={styles.button}>AHORA</button>
            </div>  
          <div className={styles.imgContainer} key={item.id}>
            <Image src={item.img} alt="" layout="fill" objectFit="contain" className={styles.img}/>
          </div>
          </div>
        ))}
      </div>
      <div className={styles.arrowContainer} style={{ right: 0 }} onClick={()=>handleArrow("r")}>
        <Image src="/img/arrowr.png" layout="fill" alt="" objectFit="contain"/>
      </div>
    </div>
  );
};

export default Featured;