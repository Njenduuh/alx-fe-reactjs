import React, { useState } from 'react';

const RegistrationForm = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState({}); // Object to hold error messages

    const handleSubmit = (e) => {
        e.preventDefault();

        const newErrors = {};
        if (!username) newErrors.username = 'Username is required';
        if (!email) newErrors.email = 'Email is required';
        if (!password) newErrors.password = 'Password is required';

        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors); // Set error messages
            return;
        }

        setErrors({}); // Clear errors
        console.log('Form submitted:', { username, email, password });

        alert('User registered successfully!');
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>Registration Form (Controlled)</h2>
            {errors.username && <p style={{ color: 'red' }}>{errors.username}</p>}
            <div>
                <label>Username:</label>
                <input
                    type="text"
                    name="username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
            </div>
            {errors.email && <p style={{ color: 'red' }}>{errors.email}</p>}
            <div>
                <label>Email:</label>
                <input
                    type="email"
                    name="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
            </div>
            {errors.password && <p style={{ color: 'red' }}>{errors.password}</p>}
            <div>
                <label>Password:</label>
                <input
                    type="password"
                    name="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
            </div>
            <button type="submit">Register</button>
        </form>
    );
};

export default RegistrationForm;
