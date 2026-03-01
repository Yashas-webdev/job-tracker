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

const signUp = (userData) => {
    const users = JSON.parse(localStorage.getItem('jobTrackerUsers') || '[]');

    if (users.find(u => u.email === userData.email)){
        throw new Error('Email already exists');
    }


const newUser = {
    id: Date.now(),
    ...userData,
    createAt: new Date().toISOString(),
    profilePicture: null,
    preference: {
        emailNotifications: true,
        reminderTime : '09:00',
        theme : 'dark'
    }
};

users.push(newUser);
localStorage.setItem('jobTrackerUsers',JSON.stringify(users));
localStorage.setItem('jobTrackerUser',JSON.stringify(newUser));
setUser(newUser);

return newUser;

}

const value = {
    user,
    loading,
    singUp,
    signIn,
    logout,
    updateProfile,
    isAuthenticated: !!user
};

return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>