import React from "react";

class Training extends React.Component {
    constructor () {
        super();
        this.state = {name: 'Иван', age: 25};
        this.showMessage = this.showMessage.bind(this)
    }
    
    async showMessage () {
        await this.setState(() => {
            this.state.name = 'Олег'
        })
        return (alert(`hello ${this.state.name}`))
    }

    render() {
		return (
        <div>
            <button onClick={this.showMessage}>{this.state.age}</button>   
        </div>);
	}
}

export default Training;