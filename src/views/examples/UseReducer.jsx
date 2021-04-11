import React, { useReducer, useState } from 'react'
import PageTitle from '../../components/layout/PageTitle'
import { initialState, reducer } from '../../store'
import { numberAdd2, numberMultiplyBy7, numberDivideBy25, numberParseInt, numberSum, login } from '../../store/actions'


const UseReducer = (props) => {

    const [ state, dispatch ] = useReducer(reducer, initialState)
    const [ delta, setDelta ] = useState(0)

    return (
        <div className="UseReducer">
            <PageTitle
                title="Hook UseReducer"
                subtitle="Uma outra forma de ter estado em componentes funcionais!"
            />
            <div className="center">
                { state.user ?
                    <span className="text">{state.user.name}</span> :
                    <span className="text">Sem usuário</span>
                }
                <span className="text">{state.number}</span>
                <div>
                
                    <button className="btn"
                    onClick={() => numberAdd2(dispatch)}
                    >+2</button>

                    <button className="btn"
                    onClick={() => numberMultiplyBy7(dispatch)}
                    >x7</button>

                    <button className="btn"
                    onClick={() => numberDivideBy25(dispatch)}
                    >/25</button>

                    <button className="btn"
                    onClick={() => numberParseInt(dispatch)}
                    >Arredondar</button>

                    <button className="btn"
                    onClick={() => login(dispatch, 'Bruno')}
                    >Login</button>

                </div>

                <hr/>
                    
                <input type="number" className="input" value={delta} onChange={e => setDelta(parseInt(e.target.value))}/>
                <button className="btn" onClick={() =>numberSum(dispatch, delta)}>Somar</button>
            </div>
        </div>
    )
}

export default UseReducer
