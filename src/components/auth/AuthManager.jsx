import { useState } from 'react';
import SignIn from './SignIn';
import SignUp from './SignUp';

export default function AuthManager(){
    const [showSignIn, setShowSignIn] = useState(true);

    return(
        <>
        {showSignIn ? (<SignIn onSwitchToSignUp={() => setShowSignIn(false)}/>
        ): (
            <SignUp onSwitchToSignIn={() => setShowSignIn(true)}/>
        )}
        
        </>
    );
}