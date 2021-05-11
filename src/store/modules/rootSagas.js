import { all } from 'redux-saga/effects';

import details from './details/sagas';

export default function* rootSaga(){
    return yield all([details])
}