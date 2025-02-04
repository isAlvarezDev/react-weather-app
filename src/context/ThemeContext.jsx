import { useState, useEffect, createContext } from "react"

export const ThemeContext = createContext()
const THEME_KEY = 'theme'

export const ThemeProvider = ({ children }) => {
    const [isDark, setIsDark] = useState(true)

    const saveThemeToLocalStorage = (theme) => localStorage.setItem(THEME_KEY, JSON.stringify(theme)) 

    useEffect(() => {
        const savedTheme = JSON.parse(localStorage.getItem(THEME_KEY))
        if(savedTheme !== null) {
            setIsDark(savedTheme)
            return
        }

        const isSystemThemeDark = window.matchMedia('(prefers-color-scheme: dark)').matches
        setIsDark(isSystemThemeDark === true)
    }, [])
    return <ThemeContext.Provider value={{ isDark, setIsDark, saveThemeToLocalStorage }}>
        {children}
    </ThemeContext.Provider>
}