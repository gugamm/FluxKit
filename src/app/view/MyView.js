import React from 'react';
import MyStore from '../store/MyStore.js';
import MyStoreCreator from '../creator/MyStoreCreator.js';

/***********************************
 * THIS IS JUST A COMPONENT EXAMPLE
 ***********************************/

class MyView extends React.Component {

    constructor(props) {
        super(props);
        this.state = {value : MyStore.getValue()};
        this._handleChange = this.handleChange.bind(this);
    }

    handleChange() {
        this.setState({value : MyStore.getValue()});
    }

    componentDidMount() {
        MyStore.addChangeListener(this._handleChange);
    }

    componentWillUnmount() {
        MyStore.removeChangeListener(this._handleChange);
    }

    handleAdd() {
        MyStoreCreator.addValue();
    }

    handleDec() {
        MyStoreCreator.decValue();
    }

    render() {
        return (
            <div>
                <p>Value : {this.state.value}</p>
                <input type="button" value="ADD" onClick={this.handleAdd} />
                <input type="button" value="DEC" onClick={this.handleDec} />
            </div>
        );
    }
}

export default MyView;
