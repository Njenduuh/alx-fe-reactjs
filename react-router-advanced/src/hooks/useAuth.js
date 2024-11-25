// src/hooks/useAuth.js
const useAuth = () => {
    // Simulating an authentication check
    const user = localStorage.getItem("user"); // Example: a "user" key in local storage
    return !!user; // Return true if a user exists, otherwise false
  };
  
  export default useAuth;
  