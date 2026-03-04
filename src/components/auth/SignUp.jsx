import { useState } from "react";
import { useAuth } from "../../context/AuthContext";
import './Auth.css';

export default function SignUp({ onSwitchToSignIn }){
    const { signUp } = useAuth();

    const [formData, setFromData] = useState({
        name:'',
        email:'',
        password:'',
        confirmPassword:'',
        Phone:'',
        location:''
    });

    const [error,setError] = useState('');
    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        const { name, value} = e.target;
        setFromData(prev => ({
            ...prev,
            [name]:value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
    }
}