import axios from 'axios'

export const LOADING = 'LOADING'
export const SUCCESS = 'SUCCESS'
export const ERROR = 'ERROR'

//We are passing in the searchQuery function in for the anime name that we want to search up.
export const aniList = (search) => (dispatch) => {
    //dispatch gives thunk a function to get all of the shit started.
    dispatch({type: LOADING})
    axios.get(`https://api.jikan.moe/v3/search/anime?q=${search}`)
    .then(res => {
        dispatch({type: SUCCESS, payload: res.data})
    })
    .catch(err => dispatch({type: ERROR, payload: err.message}))
}