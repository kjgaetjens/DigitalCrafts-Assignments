import * as actionTypes from './actionTypes'

export const fetchLocation = () => {
    return dispatch => {
        fetch('http://localhost:3001')
        .then(response => response.json())
        .then(json => {
            dispatch({type: actionTypes.VIEW_LOC, payload: json})
        })
    }
}