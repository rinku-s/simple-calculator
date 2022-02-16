/*
 *  file: App.js
 *  author: Rinku Ansari <raf122@uregina.ca>
 *  version: 0.1
 *  date-created: feb-12-2022
 *  last-modified: feb-15-2022
 */

import React, { useState, useEffect } from 'react';
import { Text, View, Pressable } from 'react-native';

import screen from './components/Screen.js';
import buttonStyle from './components/Button.js';

export default function App() {
  const [expression, setExpression] = useState(0);
  /**
   * handleUserInput
   * Purpose: This function accepts user input and displays it on the screen. The input is compared with "CLEAR" , "DEL" or "=" button to perform operations accordingly.
   * Parameter(s):
   *  <1> userInput: string value to entered by user
   *
   * Precondition(s):
   * <1> expression and setExpression must be initialized and
   * <2> count must be a number
   *
   * Returns: N/A
   *
   * Side effect:
   * <1> Text  will change
   * <2> if userInput is 'CLEAR', the screen will be cleared and 0 will be dsplayed.
   * <3> if userInput is 'DEL', the last number or operator entered by user will be deleted
   * <4> else, function calculateOutput is called
   */
  const handleUserInput = (userInput) => {
    if (userInput == 'CLEAR') setExpression(0);
    else if (userInput == 'DEL') {
      if (expression.length > 1) {
        setExpression(
          String(expression).substr(0, String(expression).length - 1)
        );
      } else {
        setExpression(0);
      }
    } else {
      if (expression == 0) setExpression(userInput);
      else setExpression(expression + '' + userInput);
      calculateOutput(expression + '' + userInput, userInput);
    }
  };

  /**
   * calculateOutput
   * Purpose: this function calculates and displays the output of mathematical expressions entered by user.
   *
   * Parameter(s):
   *  <1> userInputExpression: the complete user expression entered by the user.
   *
   * Precondition(s):
   * <1> setExression must be declared and initialized
   *
   * Returns: N/A
   *
   * Side effect:
   * <1> if userInput is '=' then the function calculates the result of the mathematical expression  using the Javascript function eval(). It is noted that eval() can be used for evil as noted by many articles and forums on the internet. However, since the input in this applicaton is restricted, eval() is safe to use and is responsible for reduced lines of code.
   * <2> if the expression was valid, result will be displayed on screen
   * <3> else 'ERR' will be displayed.
   */
  const calculateOutput = (userInputExpression, currentUserInput) => {
    console.log('In calculateOutput with ' + userInputExpression);
    if (currentUserInput == '=') {
      var tempResult = userInputExpression.replace('=', '');
      try {
        tempResult = eval(tempResult);
        setExpression(userInputExpression + '\n' + tempResult);
      } catch (e) {
        setExpression('ERR');
        console.log('Error: ' + e);
      }
    }
  };

  return (
    /**
     * Text
     * Purpose: Display input expression from the user
     * Prop(s):
     * <1> style: specifies the Style Sheet to be used
     * <2> adjustsFontSizeToFit: specifies that font size         * must be scaled to fit the component
     *
     * Pressable
     * Purpose: Used as buttons for user input
     * Prop(s):
     * <1> pressed: a boolean value that is true when user provides input and false otherwise
     *  <2> backgroundColor: specifies the color of the button in pressed and unpressed state
     * <3> onPress: specifies the action to be performed          * on press, which is to call the function                    * handleUserInput()
     */
    <View style={screen.container}>
      <Text
        style={[screen.displaynum, { padding: 15 }]}
        adjustsFontSizeToFit={true}>
        {expression}
      </Text>

      <View style={screen.numpad}>
        <View style={screen.numpadrows}>
          <Pressable
            style={({ pressed }) => [
              {
                backgroundColor: pressed ? '#ff0000' : '#ff809f',
              },
              buttonStyle.button,
            ]}
            onPress={() => handleUserInput('CLEAR')}>
            <Text style={buttonStyle.buttonText}>CLEAR</Text>
          </Pressable>
          <Pressable
            style={({ pressed }) => [
              {
                backgroundColor: pressed ? '#ff668c' : '#FFD6E0',
              },
              buttonStyle.button,
            ]}
            onPress={() => handleUserInput('DEL')}>
            <Text style={buttonStyle.buttonText}>DEL</Text>
          </Pressable>
        </View>
        <View style={screen.numpadrows}>
          <Pressable
            style={({ pressed }) => [
              {
                backgroundColor: pressed ? '#7BF1A8' : '#c1fba4',
              },
              buttonStyle.button,
            ]}
            onPress={() => handleUserInput(1)}>
            <Text style={buttonStyle.buttonText}>1</Text>
          </Pressable>
          <Pressable
            style={({ pressed }) => [
              {
                backgroundColor: pressed ? '#7BF1A8' : '#c1fba4',
              },
              buttonStyle.button,
            ]}
            onPress={() => handleUserInput(2)}>
            <Text style={buttonStyle.buttonText}>2</Text>
          </Pressable>
          <Pressable
            style={({ pressed }) => [
              {
                backgroundColor: pressed ? '#7BF1A8' : '#c1fba4',
              },
              buttonStyle.button,
            ]}
            onPress={() => handleUserInput(3)}>
            <Text style={buttonStyle.buttonText}>3</Text>
          </Pressable>
          <Pressable
            style={({ pressed }) => [
              {
                backgroundColor: pressed ? '#7BF1A8' : '#887BB0',
              },
              buttonStyle.button,
            ]}
            onPress={() => handleUserInput('*')}>
            <Text style={buttonStyle.buttonText}>*</Text>
          </Pressable>
        </View>

        <View style={screen.numpadrows}>
          <Pressable
            style={({ pressed }) => [
              {
                backgroundColor: pressed ? '#7BF1A8' : '#c1fba4',
              },
              buttonStyle.button,
            ]}
            onPress={() => handleUserInput(4)}>
            <Text style={buttonStyle.buttonText}>4</Text>
          </Pressable>
          <Pressable
            style={({ pressed }) => [
              {
                backgroundColor: pressed ? '#7BF1A8' : '#c1fba4',
              },
              buttonStyle.button,
            ]}
            onPress={() => handleUserInput(5)}>
            <Text style={buttonStyle.buttonText}>5</Text>
          </Pressable>
          <Pressable
            style={({ pressed }) => [
              {
                backgroundColor: pressed ? '#7BF1A8' : '#c1fba4',
              },
              buttonStyle.button,
            ]}
            onPress={() => handleUserInput(6)}>
            <Text style={buttonStyle.buttonText}>6</Text>
          </Pressable>
          <Pressable
            style={({ pressed }) => [
              {
                backgroundColor: pressed ? '#7BF1A8' : '#887BB0',
              },
              buttonStyle.button,
            ]}
            onPress={() => handleUserInput('/')}>
            <Text style={buttonStyle.buttonText}>/</Text>
          </Pressable>
        </View>

        <View style={screen.numpadrows}>
          <Pressable
            style={({ pressed }) => [
              {
                backgroundColor: pressed ? '#7BF1A8' : '#c1fba4',
              },
              buttonStyle.button,
            ]}
            onPress={() => handleUserInput(7)}>
            <Text style={buttonStyle.buttonText}>7</Text>
          </Pressable>
          <Pressable
            style={({ pressed }) => [
              {
                backgroundColor: pressed ? '#7BF1A8' : '#c1fba4',
              },
              buttonStyle.button,
            ]}
            onPress={() => handleUserInput(8)}>
            <Text style={buttonStyle.buttonText}>8</Text>
          </Pressable>
          <Pressable
            style={({ pressed }) => [
              {
                backgroundColor: pressed ? '#7BF1A8' : '#c1fba4',
              },
              buttonStyle.button,
            ]}
            onPress={() => handleUserInput(9)}>
            <Text style={buttonStyle.buttonText}>9</Text>
          </Pressable>
          <Pressable
            style={({ pressed }) => [
              {
                backgroundColor: pressed ? '#7BF1A8' : '#887BB0',
              },
              buttonStyle.button,
            ]}
            onPress={() => handleUserInput('-')}>
            <Text style={buttonStyle.buttonText}>-</Text>
          </Pressable>
        </View>
        <View style={screen.numpadrows}>
          <Pressable
            style={({ pressed }) => [
              {
                backgroundColor: pressed ? '#7BF1A8' : '#c1fba4',
              },
              buttonStyle.button,
            ]}
            onPress={() => handleUserInput('.')}>
            <Text style={buttonStyle.buttonText}>.</Text>
          </Pressable>
          <Pressable
            style={({ pressed }) => [
              {
                backgroundColor: pressed ? '#7BF1A8' : '#c1fba4',
              },
              buttonStyle.button,
            ]}
            onPress={() => handleUserInput(0)}>
            <Text style={buttonStyle.buttonText}>0</Text>
          </Pressable>
          <Pressable
            style={({ pressed }) => [
              {
                backgroundColor: pressed ? '#8BBEE8FF' : '#6C5D9B',
              },
              buttonStyle.button,
            ]}
            onPress={() => handleUserInput('=')}>
            <Text style={buttonStyle.buttonText}>=</Text>
          </Pressable>
          <Pressable
            style={({ pressed }) => [
              {
                backgroundColor: pressed ? '#7BF1A8' : '#887BB0',
              },
              buttonStyle.button,
            ]}
            onPress={() => handleUserInput('+')}>
            <Text style={buttonStyle.buttonText}>+</Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
}
