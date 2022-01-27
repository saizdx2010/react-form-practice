import React, { useState } from 'react';

export const InputField = () => {
    const [name, setName] = useState('');

    const handleChange = (e) => {
        setName(e.target.value)
    }
    return (
        <div>
            <form>
                <label htmlFor='name'>Name</label><br />
                <input name="name" id='name' type="text" value={name} onChange={handleChange}></input>
            </form>
        </div>
    )
}

