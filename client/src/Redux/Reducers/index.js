import { combineReducers } from 'redux';
import BooksReducer from './BookReducer';
import EventsReducer from './EventsReducer';

const rootReducer = combineReducers({
    book: BooksReducer,
    event: EventsReducer
});

export default rootReducer;