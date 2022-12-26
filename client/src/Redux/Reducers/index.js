import { combineReducers } from 'redux';
import BooksReducer from './BookReducer';

const rootReducer = combineReducers({
    book: BooksReducer,
});

export default rootReducer;