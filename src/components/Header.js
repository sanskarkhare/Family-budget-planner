import React from 'react'

export const Header = ({ handleLogout }) => {
    return (
        <>
        <h1>
            Family Budget Planner
        </h1>
        <div className="myButton">
        <button onClick={handleLogout}>LOGOUT</button>
        </div>
        </>
    )
}
