import * as React from 'react'
import useDarkMode from 'use-dark-mode'
import { ThemeProvider } from 'styled-components'
import { light, dark } from '~/components/Theme'

interface Props {
  children: React.ReactNode | string
}

export default function DarkMode({ children }: Props) {
  const darkMode = useDarkMode(false, { storageKey: null, onChange: null })
  const [theme, setTheme] = React.useState(light)

  React.useEffect(() => {
    setTheme(darkMode.value ? dark : light)
  }, [darkMode, darkMode.value])

  return <ThemeProvider theme={theme}>{children}</ThemeProvider>
}
