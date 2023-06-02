import { useTheme } from 'next-themes'
import styles from '../src/styles/components/dark_mode.module.scss'

import Sun from '@mui/icons-material/LightMode';
import Moon from '@mui/icons-material/DarkMode';

export default function Home() {
    const { resolvedTheme, theme, setTheme } = useTheme()
  return (
    <main className={styles.container}>
        <button
            onClick={() => {
              setTheme(resolvedTheme === "light" ? "dark" : "light");
            }}
            type="button"
            className='thememode'
          >
            {theme === "light" ? <Moon /> : <Sun />}
          </button>
    </main>
  )
}
