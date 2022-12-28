export const BookActions = (books) => {
    return {
        type: 'BOOKS',
        payload: books
    }
}
export const FeedBookActions = (books) => {
    return {
        type: 'FEED_BOOKS',
        payload: books
    }
}

export const EventsActions = (events) => {
    return {
        type: 'EVENTS',
        payload: events
    }
}