import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { auth } from '../firebase/config'
import { Spin } from 'antd';

export const AuthContext = React.createContext();


function AuthProvider({children}) {
    const [user, setUser] = useState({}); 
    const navigate = useNavigate();
    const [isLoading, setisLoading] = useState(true);

    React.useEffect(() =>{
        const unsubscibed = auth.onAuthStateChanged((user) => {
            // console.log({user});
            if (user) {
                const { displayName, email, uid, photoURL} = user;
                setUser({
                    displayName, email, uid, photoURL
                });
                setisLoading(false)
                navigate('/')
                return;
            }
            setisLoading(false)
            navigate('/login')
            
        })

        // clean fuction
        return(() => {
            unsubscibed();
        })

    })
        return (
    <AuthContext.Provider value={{ user }}>
        {isLoading ? <Spin/> : children }
    </AuthContext.Provider>
  )
}

export default AuthProvider