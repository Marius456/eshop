import { createContext, useContext, useState } from "react";
import { LoginForm } from "../components/LoginForm";
import { useLocalStorage } from "../hooks/useLocalStorage"
import { getUser } from "../services/UserService"


const LoginContext = createContext({})

export function useLogin() {
    return useContext(LoginContext)
}

export function LoginProvider({ children }) {
    const [currentUser, setCurrentUser] = useLocalStorage("login", {})
    const [isLoginOpen, setIsLoginOpen] = useState(false)

    const openLogin = () => setIsLoginOpen(true)
    const closeLogin = () => setIsLoginOpen(false)


    const storeUser = getUser(1)

    const [user, setUser] = useState({ name: "", email: "" })
    const [error, setError] = useState("")

    const Login = details => {
        if (details.email === storeUser.email && details.password === storeUser.password) {
            setCurrentUser({
                name: storeUser.name,
                email: details.email
            })
        } else {
            setError("Details do not match!")
        }
    }

    const Logout = () => {
        setCurrentUser({ name: "", email: "" })
    }

    return <LoginContext.Provider
        value={{
            Login,
            Logout,
            openLogin,
            closeLogin,
            currentUser,
            error
        }}>
        {children}
        <LoginForm isLoginOpen={isLoginOpen} />
    </LoginContext.Provider>
}