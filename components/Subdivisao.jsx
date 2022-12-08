import styles from '../styles/Subdivisao.module.css'

export default function Subdivisao({preta}) {
    console.log(preta)
    return (
        <div 
            style={{
                backgroundColor: preta ? "red": "white"
            }}
            className={styles.subdivisao}>
        </div>
    )
    
}
