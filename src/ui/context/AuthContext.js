import React from 'react'

const AuthContext = React.createContext({
    isAuthenticated: true,
login: () => {},
logout: () => {}
})

export default AuthContext;