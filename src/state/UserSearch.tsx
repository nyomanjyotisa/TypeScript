import { useState } from 'react'
import React from 'react';

// Your component code here


const users = [

    { name: 'Sarah', age: 20 },
    { name: 'Alex', age: 20 },
    { name: 'Jackson', age: 22 },
]

const UserSearch: React.FC = () => {

    const [name, setName] = useState('');
    const [user, setUser] = useState<{ name: string, age: number } | undefined>();
    const onClick = () => {
        const foundUser = users.find((user) => {
            return user.name === name;
        })
        setUser(foundUser);
    };



    return <div>
        User Search

        <input value={name} onChange={e => setName(e.target.value)}></input>
        <button onClick={onClick}>Find User</button>
        <div>
            {user && user.name}
            {user && user.age}

        </div>
    </div>

};

export default UserSearch;