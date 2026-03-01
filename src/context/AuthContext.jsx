import { createContext, useState, useContext, useEffect } from "react";

const AuthContext = createContext();

export const useAuth = () => {
    const context = useContext(AuthContext);
    if(!context){
        throw new Error('useAuth must be used within Authprovider');
    }
    return context;
}

export const AuthProvider = ({children})
// all components wrapped inside <AuthProvider>
// example : <AuthProvider>
                //  <App/>      {//App is a 'child'}
                // <Header/>    {//Header is a 'child'}
    //       </AuthProvider>

const [uesr, setUser] = useState(null);
const [loading, setLoading] = useState(true);


useInsertionEffect(()=>{
    const savedUser = localStorage.getItem('jobTrackerUser');
    if(savedUser){
        setUser(JSON.parse(savedUser));
    }
    setLoading(false);
},[]);