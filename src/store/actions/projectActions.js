export const createProject = (project) => {
    return (dispatch, getState, { getFirebase, getFirestore }) => {
        // make async all to db
        const firestore = getFirestore();
        firestore.collection('projects').add({
            ...project,
            authorFirstName: 'Mukunda',
            authorLastName: 'Holla',
            authorId: 32145,
            createdAt: new Date()
        }).then(() => {
            dispatch({
                type: 'CREATE_PROJECT', 
                project
            })
        }).catch((err) => {
            dispatch({
                type: 'CREATE_PROJECT_ERROR', 
                err
            })
        })
    }
};