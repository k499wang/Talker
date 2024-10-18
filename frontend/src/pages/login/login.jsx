import React from 'react'
import useLoginUser from '../../hooks/useLoginUser'

const Login = () => {

    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');

    const {loginUser, loading} = useLoginUser();

    const handleLogin = async (e) => {
      e.preventDefault();
      if (email && password) {
        await loginUser(email, password);
      } else {
        alert('Please fill in both email and password');
      }
    }

    const navigateToSignup = () => {
      window.location.href = '/signup'; // Change the URL to this
    };

    return (
      <div className="flex justify-center items-center h-screen">
      <div className="bg-white rounded-lg p-8 shadow-lg shadow-blue-300/50 text-center w-1/2">
        <h1 className="text-2xl font-bold mb-4">Chat App</h1>
        
        <form>
        <div className="mb-4">
          <label htmlFor="email" className="block text-left">Email</label>
          <input type="text" id="email" className="w-full p-2 border border-gray-300 rounded-md" 
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required/>
        
        </div>

        <div className="mb-4">
          <label htmlFor="password" className="block text-left">Password</label>
          <input type="password" id="password" className="w-full p-2 border border-gray-300 rounded-md" 
          value={password}
          onChange={(e) => setPassword(e.target.value)} 
          required
          />
        </div>

        </form>
        
        <div>
        <button className="btn btn-primary mb-4"
        disabled={loading}
        onClick={handleLogin}
        >
        Login
        </button>
        </div>
        <div>
        <button className="btn btn-link" onClick={navigateToSignup}>
          Don't have an account?
        </button>
        </div>
      </div>
      </div>
    );
};

export default Login
