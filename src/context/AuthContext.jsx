import { createContext, useState, useContext, useEffect } from "react";
import toast from 'react-hot-toast'

const AuthContext = createContext();

export const useAuth = () => {
    const context = useContext(AuthContext);
    if(!context){
        throw new Error('useAuth must be used within Authprovider');
    }
    return context;
};

export const AuthProvider = ({children}) =>{
// all components wrapped inside <AuthProvider>
// example : <AuthProvider>
                //  <App/>      {//App is a 'child'}
                // <Header/>    {//Header is a 'child'}
    //       </AuthProvider>

const [user, setUser] = useState(null);
const [loading, setLoading] = useState(true);


useEffect(()=>{
    const savedUser = localStorage.getItem('jobTrackerUser');
    if(savedUser){
        setUser(JSON.parse(savedUser));
    }
    setLoading(false);
},[]);  // '[]' dependecny array, mounting phase

const signUp = (userData) => {
    const users = JSON.parse(localStorage.getItem('jobTrackerUsers') || '[]');

    if (users.find(u => u.email === userData.email)){
        throw new Error('Email already exists');
    }


const newUser = {
    id: Date.now(),
    ...userData,
    createdAt: new Date().toISOString(),
    profilePicture: null,
    preferences: {
        emailNotifications: true,
        reminderTime : '09:00',
        theme : 'dark'
    }
};

users.push(newUser);
localStorage.setItem('jobTrackerUsers',JSON.stringify(users));
localStorage.setItem('jobTrackerUser',JSON.stringify(newUser));
setUser(newUser);

toast.success(`Welcome, ${newUser.name}! 🎉`,{
    duration: 4000,

})

return newUser;

};

const signIn = (email,password) =>{
    const users = JSON.parse(localStorage.getItem('jobTrackerUsers') || '[]');
    const user = users.find(u => u.email === email && u.password === password);

    if (!user){
        throw new Error('Invalid email or password')
    }

    localStorage.setItem('jobTrackerUser', JSON.stringify(user));
    setUser(user);

    toast.success(`Welcome back, ${user.name}! 👋`,{
        duration: 3000,
    })
    return user;
};

const logout = () =>{
    localStorage.removeItem('jobTrackerUser');
    setUser(null);
};

  const updateProfile = (updates) => {
    const updatedUser = { ...user, ...updates };
    
    const users = JSON.parse(localStorage.getItem('jobTrackerUsers') || '[]');
    const userIndex = users.findIndex(u => u.id === user.id);
    
    if (userIndex !== -1) {
      users[userIndex] = updatedUser;
      localStorage.setItem('jobTrackerUsers', JSON.stringify(users));
    }
    
    localStorage.setItem('jobTrackerUser', JSON.stringify(updatedUser));
    setUser(updatedUser);
  };

  const value = {
    user,
    loading,
    signUp,
    signIn,
    logout,
    updateProfile,
    isAuthenticated: !!user
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};