import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'

const calcStyle = StyleSheet.create({
  rootContainer: {
    flex: 1
  },
  resultContainer: {
    flex: 2,
    backgroundColor: '#193441'
  },
  resultText: {
    color: 'white',
    fontSize: 55,
    fontWeight: 'bold',
    textAlign: 'right',
    padding: 20
  },
  inputsContainer: {
    flex: 8,
    backgroundColor: '#3E606F'
  },
  inputButton: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 0.5,
    borderColor: '#91AA9D'
  },
  inputButtonText: {
    color: 'white',
    fontSize: 22
  },
  inputRow: {
    flex: 1,
    flexDirection: 'row'
  }
})

export default class App extends Component {


  render() {
    return <View style={calcStyle.rootContainer}>
      <View style={calcStyle.resultContainer}>
        <Text style={calcStyle.resultText}>0</Text>
      </View>
      <View style={calcStyle.inputsContainer}>
        <View style={calcStyle.inputRow}>
          <View style={calcStyle.inputButton}>
            <Text style={calcStyle.inputButtonText}>1</Text>
          </View>
          <View style={calcStyle.inputButton}>
            <Text style={calcStyle.inputButtonText}>2</Text>
          </View>
          <View style={calcStyle.inputButton}>
            <Text style={calcStyle.inputButtonText}>3</Text>
          </View>
          <View style={calcStyle.inputButton}>
            <Text style={calcStyle.inputButtonText}>/</Text>
          </View>
        </View>
        <View style={calcStyle.inputRow}>
          <View style={calcStyle.inputButton}>
            <Text style={calcStyle.inputButtonText}>4</Text>
          </View>
          <View style={calcStyle.inputButton}>
            <Text style={calcStyle.inputButtonText}>5</Text>
          </View>
          <View style={calcStyle.inputButton}>
            <Text style={calcStyle.inputButtonText}>6</Text>
          </View>
          <View style={calcStyle.inputButton}>
            <Text style={calcStyle.inputButtonText}>*</Text>
          </View>
        </View>
        <View style={calcStyle.inputRow}>
          <View style={calcStyle.inputButton}>
            <Text style={calcStyle.inputButtonText}>7</Text>
          </View>
          <View style={calcStyle.inputButton}>
            <Text style={calcStyle.inputButtonText}>8</Text>
          </View>
          <View style={calcStyle.inputButton}>
            <Text style={calcStyle.inputButtonText}>9</Text>
          </View>
          <View style={calcStyle.inputButton}>
            <Text style={calcStyle.inputButtonText}>-</Text>
          </View>
        </View>
        <View style={calcStyle.inputRow}>
          <View style={calcStyle.inputButton}>
            <Text style={calcStyle.inputButtonText}>0</Text>
          </View>
          <View style={calcStyle.inputButton}>
            <Text style={calcStyle.inputButtonText}>.</Text>
          </View>
          <View style={calcStyle.inputButton}>
            <Text style={calcStyle.inputButtonText}>+</Text>
          </View>
          <View style={calcStyle.inputButton}>
            <Text style={calcStyle.inputButtonText}>=</Text>
          </View>
        </View>

      </View>
    </View>
  }
}