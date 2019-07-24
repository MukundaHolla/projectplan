const initState = {
    projects: [
        {id: '1', title: 'Mukunda Holla', content: 'vue.js developer'},
        {id: '2', title: 'Namrata', content: 'vue.js developer'},
        {id: '3', title: 'Modi', content: 'vue.js developer'}
        
    ]
}

const projectReducer = (state = initState, action) => {
    return state;
}

export default projectReducer;