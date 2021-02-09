import React , { useState, useEffect } from 'react';
import fire from './fire';
import './App.css';
import { Header } from './components/Header';
import { Balance } from './components/Balance';
import { IncomeExpenses } from './components/IncomeExpenses';
import { TransactionList } from './components/TransactionList';
import { AddTransaction } from './components/AddTransaction';
import { GlobalProvider } from './context/GlobalState';
import  Login from './Login';





function App() {
  
  

    const [user, setUser] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [emailError, setEmailError] = useState('')
    const [passwordError, setPasswordError] = useState('')
    const [hasAccount, setHasAccount] = useState(false);

    const clearInputs = () => {
      setEmail('');
      setPassword('');
    }

    const clearErrors = () => {
      setEmailError('');
      setPasswordError('');
    }

    const handleLogin = () => {
      clearErrors();
      fire
        .auth()
        .signInWithEmailAndPassword(email, password)
        .catch((err) => {
          switch(err.code) {
            case "auth/invalid-email":
            case "auth/user-disabled":
            case "auth/user-not-found":
                setEmailError(err.message)
                break;
            case "auth/wrong-password":
                setPasswordError(err.message)
                break;
                  
          }
        })
    }

    const handleSignup = () => {
      clearErrors();
      fire
        .auth()
        .createUserWithEmailAndPassword(email, password)
        .catch((err) => {
          switch(err.code) {
            case "auth/email-already-in-use":
            case "auth/invalid-email":
                setEmailError(err.message)
                break;
            case "auth/weak-password":
                setPasswordError(err.message)
                break;
                  
          }
        })
    }

    const handleLogout = () => {
      fire.auth().signOut();
    }

    const authListener = () => {
      fire.auth().onAuthStateChanged((user) => {
        if(user){
          clearInputs();
          setUser(user);
        }
        else {
          setUser('');
        }
      })
    }

    useEffect(() => {
      authListener()
    }, [])

    useEffect(() => {
      handleLogout()
    }, [])

    return(
      <div className="App">
      { user ? (
        <>
      <GlobalProvider> 
      <Header handleLogout={handleLogout}/>
      <div className="container">
        <Balance />
        <IncomeExpenses/>
        <TransactionList />
        <AddTransaction />
      </div>
      </GlobalProvider>
    </>
      ) : (
        <Login
          user={user}
          email={email}
          setEmail={setEmail}
          password={password}
          setPassword={setPassword}
          handleLogin={handleLogin}
          handleSignup={handleSignup}
          hasAccount={hasAccount}
          setHasAccount={setHasAccount}
          emailError={emailError}
          passwordError={passwordError}
        />
      )}
        
        
      </div>
    )
}

export default App;
