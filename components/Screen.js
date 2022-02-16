/*
 *  file: Screen.js
 *  author: Rinku Ansari <raf122@uregina.ca>
 *  version: 0.1
 *  date-created: feb-12-2022 
 *  last-modified: feb-15-2022
 */
import {
  StyleSheet,
  StatusBar
} from 'react-native';
import Constants from 'expo-constants';

  /**
       * screen
       * Purpose: Define the overall look of the app
``*/
const screen = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffef9f',
    borderRadius:20,
    marginTop:StatusBar.currentHeight
  },
  displaynum: {
    flex: 1,
    fontSize: 50,
  //  fontWeight: 'bold',
    justifyContent: 'center',
    color: '#70609f', // '#23907c',
    textAlign: 'right',
    textAlignVertical: 'center',
    //margin: 20,
    fontFamily: 'arial',
    textShadowColor: ' #64568f',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 4,
    alignSelf: 'stretch',
    textBreakStrategy: 'simple',
    lineHeight: 53,
    flexWrap: 'wrap'
  },
  numpad: {
    flex: 3,
    backgroundColor: '#ffef9f',
    flexDirection: 'column',
    justifyContent: 'space-evenly',
  },
  numpadrows: {
    flex: 1,
    flexDirection: 'row',
    padding: 4,
  },
});

export default screen;

