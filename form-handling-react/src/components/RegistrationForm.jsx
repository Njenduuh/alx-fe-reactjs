import React, { useState } from 'react';

const RegistrationForm = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [error, setError] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        // Basic validation
        if (!username || !email || !password) {
            setError('All fields are required.');
            return;
        }

        setError('');
        console.log('Form submitted:', { username, email, password });

        // Simulate API interaction here
        alert('User registered successfully!');
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>Registration Form (Controlled)</h2>
            {error && <p style={{ color: 'red' }}>{error}</p>}
            <div>
                <label>Username:</label>
                <input
                    type="text"
                    name="username"
                    value={username} // Controlled value
                    onChange={(e) => setUsername(e.target.value)} // Update state
                />
            </div>
            <div>
                <label>Email:</label>
                <input
                    type="email"
                    name="email"
                    value={email} // Controlled value
                    onChange={(e) => setEmail(e.target.value)} // Update state
                />
            </div>
            <div>
                <label>Password:</label>
                <input
                    type="password"
                    name="password"
                    value={password} // Controlled value
                    onChange={(e) => setPassword(e.target.value)} // Update state
                />
            </div>
            <button type="submit">Register</button>
        </form>
    );
};

export default RegistrationForm;
