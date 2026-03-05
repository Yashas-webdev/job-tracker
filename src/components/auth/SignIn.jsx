import { useState } from "react";
import { useAuth } from "../../context/AuthContext";
import './Auth.css'

export default function SignIn({onSwitchToSignUp}){
    const { signIn } = useAuth();
    const [formData, setFromData] = useState({
        email:'',
        password:''
    });
    const [error,setError] = useState('')
    const [loading, setLoading]= useState(false);

    const handleChange = (e) =>{
        const {name,value} = e.target;
        setFromData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        setLoading(true);

        try{
            await signIn(formData.email, formData.password);
        }catch (err){
            setError(err.message)
        }finally{
            setLoading(false);
        }
    };

     return (
    <div className="auth-container">
      <div className="auth-card">
        <div className="auth-header">
          <h2>Welcome Back! 👋</h2>
          <p className="auth-subtitle">Sign in to continue tracking your applications</p>
        </div>

        {error && (
          <div className="error-message">
            ⚠️ {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="auth-form">
          <div className="form-group">
            <label>Email *</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="john@example.com"
              disabled={loading}
              autoComplete="email"
            />
          </div>

          <div className="form-group">
            <label>Password *</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
              placeholder="Enter your password"
              disabled={loading}
              autoComplete="current-password"
            />
          </div>

          <button 
            type="submit" 
            className="btn-primary auth-button" 
            disabled={loading}
          >
            {loading ? 'Signing In...' : 'Sign In'}
          </button>
        </form>

        <p className="auth-switch">
          Don't have an account?{' '}
          <button 
            onClick={onSwitchToSignUp} 
            className="link-button"
            disabled={loading}
          >
            Sign Up
          </button>
        </p>
      </div>
    </div>
  );
}