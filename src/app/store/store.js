import Event from 'events';

/******************************************************************
 * EXTENDS THIS CLASS FOR CREATING A STORE
 * VIEWS CAN LISTEN FOR CHANGES OF A STORE USING addChangeListener
 * VIEW CAN STOP LISTEN FOR CHANGES USING removeChangeListener
 * A STORE CAN ALERT THAT IT HAS CHANGED BY USING emitChange
 ******************************************************************/

class Store extends Event.EventEmitter {
    addChangeListener(callback) {
        this.on('STORE_CHANGE_EVENT', callback);
    }

    removeChangeListener(callback) {
        this.removeListener('STORE_CHANGE_EVENT', callback);
    }

    emitChange() {
        this.emit('STORE_CHANGE_EVENT');
    }
}

export default Store;