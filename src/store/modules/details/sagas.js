import { all, takeLatest, select, call, put } from 'redux-saga/effects';

import { showDetails } from './actions';

//import apiDetails from '../../../services/apiDetails';


function* getDetails({item}) {

    const filmExists = yield select((state) => 
    state.details.find((film) => film.id == item.id)
    );
    
    if (!filmExists) {

        yield put(showDetails(item))
        
     }
}


export default all([
    takeLatest('@films/DETAILS_REQUEST', (getDetails)),
]);