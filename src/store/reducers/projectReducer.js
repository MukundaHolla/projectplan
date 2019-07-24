const initState = {
    projects: [
        {id: '1', title: 'Mukunda Holla', content: 'vue.js developer'},
        {id: '2', title: 'Namrata', content: 'vue.js developer'},
        {id: '3', title: 'Modi', content: 'vue.js developer'}
        
    ]
}

const projectReducer = (state = initState, action) => {
    switch(action.type) {
        case 'CREATE_PROJECT':
            console.log('created project', action.project); 
            return state
        case 'CREATE_PROJECT_ERROR':
            console.log('created project error', action.err); 
            return state
        default:
            return state
    }
}

export default projectReducer;