import dispatcher from '../dispatch/dispatcher.js';

/************************************************
 * EXTEND THIS CLASS FOR CREATE ACTIONS CREATORS
 ************************************************/

class ActionCreator {
    _createAction(actionType, data) {
        let payload = {
            actionType : actionType,
            data : data
        };
        dispatcher.dispatch(payload);
    }
}

export default ActionCreator;
