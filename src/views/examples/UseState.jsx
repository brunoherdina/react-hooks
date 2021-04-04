import React, { useState } from 'react'
import PageTitle from '../../components/layout/PageTitle'
import SectionTitle from '../../components/layout/SectionTitle'

const UseState = (props) => {

    const [count, setCount ] = useState(0)
    const incrementCount = () => {
        setCount(count + 1)
    }
    const decrementCount = () => {
        setCount(count - 1);
    }
    const restartCount = () => {
        setCount(0)
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
                <div>
                    <button className="btn" onClick={() => restartCount()}>Zerar</button>
                </div>
            </div>

            <SectionTitle title="Exercício #02"></SectionTitle>
        </div>
    )
}

export default UseState

