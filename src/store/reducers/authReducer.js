const initstate = {}

const authReducer = (state = initstate, action) => {
    switch(action.type) {
        case 'LOGIN_ERROR':
            console.log('Login error')
            return { 
                ...state,
                authError: 'Login failed'
            }
        case 'LOGINN_SUCCESS':
            console.log('Login success')
            return {
                ...state,
                authError: null
            }
        case 'SIGNOUT_SUCCESS':
            console.log('signout success')
            return state
        case 'SIGNUP_SUCCESS':
            return {
                ...state,
                authError: null
            }
        case 'SIGNUP_ERROR':
            return {
                ...state,
                authError: action.err.message
            }
        default:
            return state
    }
}

export default authReducer;