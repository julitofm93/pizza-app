import styles from "../../styles/Order.module.css";
import Image from "next/image";
import axios from "axios";

const Order = ({order}) => {
    
    const status = order.status;
    
    const statusClass = (index) =>{
        if (index - status < 1) return styles.done;
        if (index - status === 1) return styles.inProgress;
        if (index - status > 1) return styles.undone;
    };

  return (
    <div className={styles.container}>
        <div className={styles.left}>
            <div className={styles.row}>
            <table className={styles.table}>
                <tr className={styles.trTitle}>
                    <th>ID Orden</th>
                    <th>Cliente</th>
                    <th>Direccion</th>
                    <th>Total</th>
                </tr>
                <tr className={styles.tr}>
                    <td>
                        <span className={styles.id}>{order._id}</span>
                    </td>
                    <td>
                        <span className={styles.name}>
                            {order.title}
                        </span>
                    </td>
                    <td>
                        <span className={styles.address}>{order.address}</span>
                    </td>
                    <td>
                        <span className={styles.total}>${order.total}</span>
                    </td>
                </tr>
            </table>
            </div>
            <div className={styles.row}>
                <div className={statusClass(0)}>
                    <Image src="/img/paid.png" width={30} height={30} alt=""/>
                    <span>Pago</span>
                    <div className={styles.checkedIcon}>
                        <Image src="/img/checked.png" width={30} height={30} alt=""/>
                    </div>
                </div>
                <div className={statusClass(1)}>
                    <Image src="/img/bake.png" width={30} height={30} alt=""/>
                    <span>En Preparación</span>
                    <div className={styles.checkedIcon}>
                        <Image className={styles.checkedIcon} src="/img/checked.png" width={30} height={30} alt=""/>
                    </div>
                </div>
                <div className={statusClass(2)}>
                    <Image src="/img/bike.png" width={30} height={30} alt=""/>
                    <span>En Camino</span>
                    <div className={styles.checkedIcon}>
                        <Image className={styles.checkedIcon} src="/img/checked.png" width={30} height={30} alt=""/>
                    </div>
                </div>
                <div className={statusClass(3)}>
                    <Image src="/img/delivered.png" width={30} height={30} alt=""/>
                    <span>Entregado</span>
                    <div className={styles.checkedIcon}>
                        <Image src="/img/checked.png" width={30} height={30} alt=""/>
                    </div>
                </div>
            </div>
        </div>
        <div className={styles.right}>
        <div className={styles.wrapper}>
                <h2 className={styles.title}>TOTAL CARRITO</h2>
                <div className={styles.totalText}>
                    <b className={styles.totalTextTitle}>Subtotal:</b>${order.total}
                </div>
                <div className={styles.totalText}>
                    <b className={styles.totalTextTitle}>Descuento:</b>$9.90
                </div>
                <div className={styles.totalText}>
                    <b className={styles.totalTextTitle}>Total:</b>${order.total}
                </div>
                <button disabled className={styles.button}>PAID</button>
            </div>
        </div>
    </div>
  )
}

export const getServerSideProps = async ({ params }) => {
    const res = await axios.get(`http://localhost:3000/api/orders/${params.id}`);
    return {
        props: { order: res.data },
    };
};

export default Order;
