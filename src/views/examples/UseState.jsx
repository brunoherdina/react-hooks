import './UseState.css'

import React, { useState } from 'react'
import PageTitle from '../../components/layout/PageTitle'
import SectionTitle from '../../components/layout/SectionTitle'

const UseState = (props) => {

    const [count, setCount ] = useState(0)
    const [name, setName ] = useState("")

    //Functions
    const incrementCount = () => {
        setCount(count + 1)
    }
    const decrementCount = () => {
        setCount(count - 1);
    }
   
    return (
        <div className="UseState">
            <PageTitle
                title="Hook UseState"
                subtitle="Estado em componentes funcionais!"
            />

            <SectionTitle title="Exercício #01"></SectionTitle>
            <div className="center">
                <span className="text">{count}</span>
                <div>
                    <button className="btn" onClick={() => decrementCount()}>-1</button>
                    <button className="btn" onClick={() => incrementCount()}>+1</button>
                </div>
            </div>

            <SectionTitle title="Exercício #02"></SectionTitle>
            <input type="text" className="input" value={name} onChange={e => setName(e.target.value)}/>
            <span className="text">{name}</span>
        </div>
    )
}

export default UseState

