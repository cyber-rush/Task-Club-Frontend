import axios from "axios";
import UserContext from "./userContext";
import { useEffect, useState } from "react";

const UserProvider = ({ children }) => {

    const [user, setUser] = useState(null)

    useEffect(() => {
        if (!user) {
            axios.get('/profile').then(({ data }) => {
                setUser(data)
            })
        }
    }, [])

    const logout = async () => {
        try {
            await axios.post('/logout');
            setUser(null);
        } catch (error) {
            console.error('Logout failed:', error.message);
        }
    };

    return (
        <UserContext.Provider value={{ user, setUser, logout }}>
            {children}
        </UserContext.Provider>
    )
}


export default UserProvider

