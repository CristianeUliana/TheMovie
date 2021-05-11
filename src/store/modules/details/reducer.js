import produce from 'immer';

export default function details(state = [], action) {

    switch(action.type) {
        case '@films/SHOW_DETAILS':
            return produce(state, (draft) => {
                const { film } = action;
                draft.push(film);
            });

        default:
            return state;
    }
}   
