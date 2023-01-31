import React from "react";

const scaleNames ={
    c: 'Цельсия',
    f: 'Фаренгейта'
};

class TemperatureInput extends React.Component {
    constructor (props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        this.props.onTemperatureChange(e.target.value)
    }

    render() {
        const temperature = this.props.temperature;
        const scale = this.props.scale;
        return (
            <>
                <p>Введите температуру в градусах {scaleNames[scale]}</p>
                <input
                    value ={temperature} 
                    onChange={this.handleChange} 
                />
            </>
        )    
    }
}

export default TemperatureInput;