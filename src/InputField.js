import React, { useState } from 'react';

export const InputField = (props) => {
    return (
        <div>
            <input name="name" id='name' type="text" value={props.value} onChange={props.handleChange}></input>
        </div>
    )
}

