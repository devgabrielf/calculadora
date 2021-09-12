import React, { Component } from 'react'
import './Calculator.css'

import Button from '../components/Button'
import Display from '../components/Display'

const initialState = {
    displayVisibility: 1,
    displayValue: '0',
    clearDisplay: false,
    operation: null,
    values: [0, null],
    current: 0,
    fontSize: "big"
}

export default class Calculator extends Component {

state = { ...initialState }

    clearAll() {
        this.setState({ ...initialState })
    }

    clearCurrent() {
        const displayValue = '0'
        const i = this.state.current
        const values = [...this.state.values]
        values[i] = 0
        this.setState({ displayValue, values })
    }

    setOperation(operation) {
        if (operation !== '=' && (this.state.current === 0 || this.state.values[1] === null)) {
            this.setState({ displayVisibility: 0, operation, current: 1, clearDisplay: true })
            setTimeout(() => this.setState({ displayVisibility: 1 }), 50)
        } else if(operation !== "=" || this.state.operation === "=" || this.state.values[1] !== null) {
            console.log('to aqui')
            const equals = operation === '='
            const currentOperation = this.state.operation

            const values = [...this.state.values]
            switch (currentOperation) {
                case '+':
                    values[0] = parseFloat(values[0]) + parseFloat(values[1])
                    break
                case '-':
                    values[0] = parseFloat(values[0]) - parseFloat(values[1])
                    break
                case '×':
                    values[0] = parseFloat((parseFloat(values[0]) * parseFloat(values[1])).toFixed(8))
                    break
                case '÷':
                    values[0] = parseFloat((parseFloat(values[0]) / parseFloat(values[1])).toFixed(8))
                    break
                case '%':
                    values[0] = parseFloat((parseFloat(values[1] * parseFloat(values[0]) / 100)).toFixed(8))
                    break
                default:
            }
            values[1] = null

            if (values[0].toString().length > 15) {
                this.setState({
                    displayValue: "limite excedido",
                    operation: null,
                    current: 0,
                    clearDisplay: true,
                    values: [0, null],
                    fontSize: "big"
                })
            } else {
                if (values[0].toString().length > 10) {
                    this.setState({ fontSize: "small" })
                } else {
                    this.setState({ fontSize: "big" })
                }

                this.setState({
                    displayValue: values[0].toString().replace('.', ','),
                    operation: equals ? null : operation,
                    current: equals ? 0 : 1,
                    clearDisplay: true,
                    values
                })
            }
        }
    }

    addDigit(n) {
        if (this.state.displayValue.length < 15 || this.state.clearDisplay) {
            if (n === ',' && this.state.displayValue.includes(',')) {
                return
            }

            const clearDisplay = this.state.displayValue === '0'
                || this.state.clearDisplay
            let currentValue = this.state.displayValue
            let displayValue = currentValue + n

            if (n !== ',') {
                currentValue = clearDisplay ? '' : this.state.displayValue
                displayValue = currentValue + n
                const i = this.state.current
                const newValue = parseFloat(displayValue.replace(',', '.'))
                const values = [...this.state.values]
                values[i] = newValue
                this.setState({ values })
            }

            if (displayValue.length > 10) {
                this.setState({ fontSize: "small" })
            }
            this.setState({ displayValue, clearDisplay: false })
        }
    }

    changeSign() {
        let displayValue = ''
        if (this.state.displayValue[0] !== '0') {
            if (this.state.displayValue[0] !== '-') {
                displayValue = '-' + this.state.displayValue
                const i = this.state.current
                const newValue = this.state.values[i] * (-1)
                const values = [...this.state.values]
                values[i] = newValue
                this.setState({ values })
            } else {
                displayValue = this.state.displayValue.substring(1)
                const i = this.state.current
                const newValue = this.state.values[i] * (-1)
                const values = [...this.state.values]
                values[i] = newValue
                this.setState({ values })
            }
            this.setState({ displayValue })
        }
    }

    render() {
    const clearAll = () => this.clearAll()
    const clearCurrent = () => this.clearCurrent()
    const addDigit = n => this.addDigit(n)
    const setOperation = o => this.setOperation(o)
    const changeSign = () => this.changeSign()
        return (
            <div className="calculator">
                <Display value={this.state.displayValue.repeat(this.state.displayVisibility)} fontSize={this.state.fontSize} />
                <Button label="AC" click={clearAll} ac />
                <Button label="C" click={clearCurrent} />
                <Button label="%"click={setOperation} operation />
                <Button label="÷"click={setOperation} operation right />
                <Button label="7" click={addDigit}/>
                <Button label="8" click={addDigit}/>
                <Button label="9" click={addDigit}/>
                <Button label="×" click={setOperation} operation right />
                <Button label="4" click={addDigit}/>
                <Button label="5" click={addDigit}/>
                <Button label="6" click={addDigit}/>
                <Button label="-" click={setOperation} operation right />
                <Button label="1" click={addDigit}/>
                <Button label="2" click={addDigit}/>
                <Button label="3" click={addDigit}/>
                <Button label="+" click={setOperation} operation right />
                <Button label="+/-" click={changeSign} bottom />
                <Button label="0" click={addDigit} bottom />
                <Button label="," click={addDigit} bottom />
                <Button label="=" click={setOperation} operation bottom right />
            </div>
        )
    }
}