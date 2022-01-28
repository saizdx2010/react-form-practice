import React from "react";

export const Submit = (props) => {
    return (
        <form onSubmit={props.onSubmit}>
            <input onClick={props.onClick} value="Submit" type="submit" />
        </form>
    )
}