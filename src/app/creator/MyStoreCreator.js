import ActionCreator from './action_creator.js';
import MyStoreAction from '../action/MyStoreAction.js';

class MyStoreCreator extends ActionCreator {
    addValue() {
        this._createAction(MyStoreAction.ACTION_ADD,1);
    }

    decValue() {
        this._createAction(MyStoreAction.ACTION_DEC,1);
    }
}

let myStoreCreator = new MyStoreCreator();

export default myStoreCreator;
