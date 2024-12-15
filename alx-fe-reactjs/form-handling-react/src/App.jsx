import React from 'react';
import RegistrationForm from './components/RegistrationForm';
import FormikForm from './components/FormikForm';

const App = () => {
    return (
        <div>
            <h1>Form Handling in React</h1>
            <RegistrationForm />
            <FormikForm />
        </div>
    );
};

export default App;
