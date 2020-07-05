const initState = {
    blogs: [
        {id: '1', title: 'Primer blog', body: 'Cuerpo del primer blog'},
        {id: '2', title: 'Segundo blog', body: 'Cuerpo del segundo blog'},
        {id: '3', title: 'Tercer blog', body: 'Cuerpo del tercer blog'}
    ]
}

const rootReducer = (state = initState, action) => {
    return state;
}

export default rootReducer;