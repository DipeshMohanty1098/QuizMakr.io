import React from 'react';

class Test extends React.Component{
    state = {
        test: null,
    }

    oc = (e) => {
        this.setState({
        test: e.target.value,
        })
        
    }

    render() {
        return (
            <input onChange={this.oc}></input>
        )
    }
}

export default Test;