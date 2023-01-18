import styles from "../styles/Add.module.css"

const AddButton = ({setClose}) => {
  return (
    <div onClick={()=>setClose(false)} className={styles.mainAddButton}>
        Agregar Producto
    </div>
  )
}

export default AddButton