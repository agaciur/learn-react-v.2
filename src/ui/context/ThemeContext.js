import React from "react"
const ThemeContext = React.createContext({
  theme: 'danger',
  changeTheme: () => {},
})

export default ThemeContext
