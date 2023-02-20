const initialState = {
    books: [],
    feedBooks: [],
    cartBooks: []
}
const BooksReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'BOOKS':
            return {
                books: action.payload
            }
        case 'FEED_BOOKS':
            return {
                feedBooks: action.payload
            }
        case 'PRODUCT':
            console.log(action.payload)
            return {
                cartBooks: action.payload
            }
        default:
            return {
                ...state
            }
    }
}

export default BooksReducer