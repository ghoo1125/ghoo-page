import React, { useState } from 'react';
import { SuccessButton } from '../Button';

export const ControlledFormPage = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [favoriteColor, setFavoriteColor] = useState('');

    return (
        <form>
            <h3>Please enter your info:</h3>
            <div>
                <input
                    type="text"
                    placeholder="Name"
                    valiue={name}
                    onChange={e => setName(e.target.value)}
                />
            </div>
            <div>
                <input
                    type="text"
                    placeholder="Email"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                />
            </div>
            <div>
                <input
                    type="text"
                    placeholder="Favorite Color"
                    value={favoriteColor}
                    onChange={e => setFavoriteColor(e.target.value)}
                />
            </div>
            <SuccessButton
                buttonColor="green"
                onClick={e => {
                    alert(`
                    Your name is ${name}
                    your email is ${email}
                    and your favorite color is ${favoriteColor}
                `);
                    e.preventDefault();
                }}>Submit</SuccessButton>
        </form >
    )
}