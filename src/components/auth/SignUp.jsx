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
    

    if (formData.password !== formData.confirmPassword){
        setError('Password do not match');
        return;
    }

    if (formData.password.length < 6){
        setError('Password must be at least 6 characters');
        return;
    }

    setLoading(true);
    try{
        await signUp({
            name:formData.name,
            email:formData.email,
            password:formData.password,
            phone: formData.phone,
            location: formData.location
        });
    }catch (err){
        setError(err.message);
    }finally{
        setLoading(false);
    }
    };
  return(<div className="auth-container">
    <div className="auth-card">
        <div className="auth-header">
            <h2>Create Account</h2>
            <p className="auth-subtitle"></p>
        </div>

        {error && (
            <div className="error-message">
                ⚠️ {error}
                </div>
        )}

        <form onSubmit={handleSubmit} className="auth-form">
            <div className="form-group">
                <label>Full name *</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="ex..Yashas"
                  disabled={loading}
                  />
            </div>

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
                <label>Phone</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="+91-8453453454"
                  disabled={loading}
                  />
            </div>

            <div className="form-group">
                <label>Location</label>
                <input
                  type="text"
                  name="location"
                  value={formData.location}
                  onChange={handleChange}
                  placeholder="Banglore, India"
                  disabled={loading}/>
            </div>

            <div className="form-group">
            <label>Password *</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
              minLength={6}
              placeholder="At least 6 characters"
              disabled={loading}
            />
          </div>

            <div className="form-group">
                <label>Confirm Password *</label>
                <input
                  type="password"
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  required
                  placeholder="Re-enter passwrord"
                  disabled={loading}/>
            </div>

            <button 
            type="submit"
            className="btn-primary auth-button"
            disabled={loading}
            >
                {loading ? 'Creating Account...' : 'Sign Up'}
            </button>
        </form>

        <p className="auth-switch">
            Already have an account ? {''}
            <button onClick={onSwitchToSignIn}
            className="link-button"
            disabled={loading}
            >
                Sign In
            </button>
        </p>
    </div>
  </div>
  );
};