import React from 'react'

export const JumboInfo = ({ label, info }) => {
    return (
        <>
            <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    flexDirection: 'row',
            }}>
                <h4>{label}: </h4>
                <p style={{
                    marginBottom: '0',
                    width:' 100%',
                    textAlign: 'right'
                }}>{info}</p>
            </div>
        </>
    )
}
