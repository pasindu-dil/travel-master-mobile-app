import { View, Text } from 'react-native'
import React, { useContext, useState } from 'react'
import AuthContext from '@/context/AuthContext'

type Props = {
    children: JSX.Element
}

const AuthProvider = ({ children }: Props) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false)

    return (
        <AuthContext.Provider value={{ isAuthenticated, setIsAuthenticated }}>{children}</AuthContext.Provider>
    )
}

export default AuthProvider