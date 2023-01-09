import React from 'react';
import Calculator from '../containers/Calculator';
import {render, fireEvent} from '@testing-library/react';

describe('Calculator', () => {
  let container;
  beforeEach(() => {
    container = render(<Calculator/>)
  })

  it('should change running total on number enter', () => {
    const button4 = container.getByTestId('number4');
    const runningTotal = container.getByTestId('running-total');
    fireEvent.click(button4);
    expect(runningTotal.textContent).toEqual('4');
  })

  it('add 1 to 4 should equal 5', () => {
    const button1 = container.getByTestId('number1');
    const button4 = container.getByTestId('number4');
    const operatorAdd = container.getByTestId('operator-add');
    const runningTotal = container.getByTestId('running-total');
    const equalButton = container.getByTestId('operator-equals');
    fireEvent.click(button1);
    fireEvent.click(operatorAdd)
    fireEvent.click(button4);
    fireEvent.click(equalButton)
    expect(runningTotal.textContent).toEqual('5');

  })

  it('subtract 4 from 7 should equal 3', () => {
    const button4 = container.getByTestId('number4');
    const button7 = container.getByTestId('number7');
    const operatorSubtract = container.getByTestId('operator-subtract');
    const runningTotal = container.getByTestId('running-total');
    const equalButton = container.getByTestId('operator-equals');
    fireEvent.click(button7);
    fireEvent.click(operatorSubtract);
    fireEvent.click(button4);
    fireEvent.click(equalButton);
    expect(runningTotal.textContent).toEqual('3');
  })

  it('multiplying 3 by 5 should equal 15', () => {
    const button3 = container.getByTestId('number3');
    const button5 = container.getByTestId('number5');
    const multiplyButton = container.getByTestId('operator-multiply');
    const equalButton = container.getByTestId('operator-equals');
    const runningTotal = container.getByTestId('running-total');
    fireEvent.click(button3)
    fireEvent.click(multiplyButton)
    fireEvent.click(button5)
    fireEvent.click(equalButton)
    expect(runningTotal.textContent).toEqual('15')
  })

  it('divide 21 by 7 should equal 3', () => {
    const button7 = container.getByTestId('number7');
    const button3 = container.getByTestId('number3');
    const multiplyButton = container.getByTestId('operator-multiply')
    const divideButton = container.getByTestId('operator-divide')
    const equalButton = container.getByTestId('operator-equals')
    const runningTotal = container.getByTestId('running-total')
    fireEvent.click(button7)
    fireEvent.click(multiplyButton)
    fireEvent.click(button3)
    fireEvent.click(equalButton)
    fireEvent.click(divideButton)
    fireEvent.click(runningTotal)
    expect(runningTotal.textContent).toEqual('21')

  })

  it('concatenate multiple number button clicks - pressing 2 and 2 and 2 should equal 222', () => {
    const button2 = container.getByTestId('number2')
    const equalButton = container.getByTestId('operator-equals')
    const runningTotal = container.getByTestId('running-total')
    fireEvent.click(button2)
    fireEvent.click(button2)
    fireEvent.click(button2)
    fireEvent.click(equalButton)
    fireEvent.click(runningTotal)
    expect(runningTotal.textContent).toEqual('222')
  })

  it('chain multiple operations together - 5 multiplied by 5 multiplied by 5 should equal 125', () => {
    const button5 = container.getByTestId('number5')
    const multiplyButton = container.getByTestId('operator-multiply')
    const equalButton = container.getByTestId('operator-equals')
    const runningTotal = container.getByTestId('running-total')
    fireEvent.click(button5)
    fireEvent.click(multiplyButton)
    fireEvent.click(button5)
    fireEvent.click(multiplyButton)
    fireEvent.click(button5)
    fireEvent.click(equalButton)
    fireEvent.click(runningTotal)
    expect(runningTotal.textContent).toEqual('125')
  })

  it('clearing the running total without affecting the calculation', () => {
    const button5 = container.getByTestId('number5')
    const multiplyButton = container.getByTestId('operator-multiply')
    const equalButton = container.getByTestId('operator-equals')
    const runningTotal = container.getByTestId('running-total')
    const clear = container.getByTestId('clear')
    fireEvent.click(button5)
    fireEvent.click(multiplyButton)
    fireEvent.click(button5)
    fireEvent.click(multiplyButton)
    fireEvent.click(button5)
    fireEvent.click(equalButton)
    fireEvent.click(runningTotal)
    fireEvent.click(clear)
    fireEvent.click(runningTotal)
    expect(runningTotal.textContent).toEqual('0')
  })
})

