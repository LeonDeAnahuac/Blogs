const initState = {
    blogs: [
        {id: '1', title: 'Primer blog', body: 'Cuerpo del primer blog'},
        {id: '2', title: 'Segundo blog', body: 'Cuerpo del segundo blog'},
        {id: '3', title: 'Tercer blog', body: 'Cuerpo del tercer blog'}
    ]
}

const rootReducer = (state = initState, action) => {
    if(action.type === 'DELETE_BLOG') {
        let newBlogs = state.blogs.filter(blog => {
            return action.id !== blog.id
        });
        return {
            ...state,
            blogs: newBlogs
        }
    }
    return state;
}

export default rootReducer;