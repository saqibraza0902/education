import { combineReducers } from 'redux';
import BooksReducer from './BookReducer';
import CoursesReducer from './CoursesReducer';
import EventsReducer from './EventsReducer';

const rootReducer = combineReducers({
    book: BooksReducer,
    event: EventsReducer,
    course: CoursesReducer
});

export default rootReducer;