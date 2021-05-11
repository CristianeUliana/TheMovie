export function detailsRequest(item) {
    return{
        type: '@films/DETAILS_REQUEST',
        item,
    };
}




export function showDetails(film) {
    return {
        type: '@films/SHOW_DETAILS',
        film,
    };
}