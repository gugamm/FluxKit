import Store from './store.js';
import dispatcher from '../dispatch/dispatcher.js';
import MyStoreAction from '../action/MyStoreAction.js';

let value = 0;

function addValue() {
    value++;
}

function decValue() {
    value--;
}

class MyStore extends Store {
    getValue() {
        return value;
    }
}

let myStore = new MyStore();

myStore.dispatchIndex = dispatcher.register(function(payload) {
   switch(payload.actionType) {
       case MyStoreAction.ACTION_ADD :
           addValue();
           myStore.emitChange();
           break;
       case MyStoreAction.ACTION_DEC :
           decValue();
           myStore.emitChange();
   }
});

export default myStore;
