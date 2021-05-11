import { all, takeLatest, select, call, put } from 'redux-saga/effects';

import { showDetails } from './actions';

import apiDetails from '../../../services/apiDetails';


function* getDetails({id, mediaType}) {

    const filmExists = yield select((state) => 
    state.details.find((film) => film.id == id)
    );
    console.log(id)
    console.log(mediaType)
    if (filmExists) {
        yield put(showDetails(film))

    } else {
        
        const response = yield call(apiDetails.get);

        const data = response.data

        console.log(data)

        yield put(showDetails(data))
        
     }
}


export default all([
    takeLatest('@films/DETAILS_REQUEST', (getDetails)),
]);