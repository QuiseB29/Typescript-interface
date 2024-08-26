import React from 'react';
import UserInfo from './components/UserInfo'; 
import Card from './components/Card';
const App: React.FC = () => {
    // Example user data
    const user = {
        name: 'John Doe',
        age: 30,
        email: 'john.doe@example.com'
    };

    return (
        <div>
            <h1>Welcome to the User Info App</h1>
            <Card>
                <UserInfo 
                    name={user.name}
                    age={user.age}
                    email={user.email}
                />
            </Card>
        </div>
    );
};

export default App;
