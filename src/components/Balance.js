import React from 'react'

export const Balance = ({income, expense}) => {
    return (
        <div>
            <h3>
                CURRENT BALANCE
            </h3>
            <h1>
                {`$${income + expense}`}
            </h1>
        </div>
    )
}
