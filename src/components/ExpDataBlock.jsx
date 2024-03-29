import React from 'react'
import { useCountUp } from 'react-countup'
import { useSelector } from 'react-redux'

export const ExpDataBlock = ({ subEs, subEn, number = 0, suffix = "", prefix = "" }) => {

    const { countUp } = useCountUp({ 
        end: number,
        suffix: suffix,
        prefix: prefix
    })

    const { lang } = useSelector(state => state.i18n)
    return (
        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', textAlign: 'center' }}>
            <h1 style={{ color: '#00e295'}}>{countUp}</h1>
            <p>{lang === 'ES' ? subEs : subEn}</p>
        </div>
    )
}
