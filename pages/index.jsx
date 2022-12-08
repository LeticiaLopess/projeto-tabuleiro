import Subdivisao from '../components/subdivisao'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Subdivisao preta={true} />
      <Subdivisao />
      <Subdivisao preta={true}/>
    </div>
  )
}


