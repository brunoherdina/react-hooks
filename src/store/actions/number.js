export function numberAdd2(dispatch) {
    dispatch({ type : 'numberAdd2' })
}

export function numberMultiplyBy7(dispatch) {
    dispatch({ type : 'numberMultiplyBy7' })
}

export function numberDivideBy25(dispatch) {
    dispatch({ type : 'numberDivideBy25' })
}

export function numberParseInt(dispatch) {
    dispatch({ type : 'numberParseInt' })
}

export function numberSum(dispatch, delta) {
    dispatch({ type : 'numberSum', payload : delta })
}