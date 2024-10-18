import React from 'react'
import { createContext, useState } from 'react'; // Import the createContext and useState hooks from React

export const AuthContext = createContext(); // Create a context object
// Create a provider for components to consume and subscribe to changes
// The provider component accepts a value prop to be passed to consuming components that are descendants of this Provider.
// One Provider can be connected to many consumers. Providers can be nested to override values deeper within the tree.
// All consumers that are descendants of a Provider will re-render whenever the Provider’s value prop changes.
// The context object is passed as an argument to the useContext hook.

export const useAuth = () => {
    return React.useContext(AuthContext);
}
// The useAuth hook is a custom hook that returns the context value of the AuthContext.


// The AuthContextProvider component is a wrapper component that provides the context to all the components in the application.
// Our entire application will be able to use these values
export const AuthContextProvider = ({children}) => {
    const [authUser, setAuthUser] = useState(JSON.parse(localStorage.getItem('authUser')) || null); 
    return <AuthContext.Provider value={{authUser, setAuthUser}}>
        
        {children}
        </AuthContext.Provider>
}