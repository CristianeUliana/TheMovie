export function detailsRequest(id, mediaType) {
    return{
        type: '@films/DETAILS_REQUEST',
        id,
        mediaType,
    };
}




export function showDetails(film) {
    return {
        type: '@films/SHOW_DETAILS',
        film,
    };
}