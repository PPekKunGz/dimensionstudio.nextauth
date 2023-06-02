import styles from '../styles/pages/welcome.module.scss'
import Btn from '../../components/props/btn'
import Btns from '../../components/props/btns'
import DarkMode from 'components/dark_mode'

export default function Home() {
  return (
    <main className={styles.container}>
      <div className={styles.main}>
        <div className={styles.title}>Welcome</div>
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center'
        }}><DarkMode /></div>
        <img src="/undraw-welcome.svg" alt="undraw-welcome.svg" />
        <Btn text="Register" />
        <Btns text="Login" />
      </div>
    </main>
  )
}
