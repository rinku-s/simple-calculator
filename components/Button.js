/*
 *  file: ButtonStyle.js
 *  author: Rinku Ansari <raf122@uregina.ca>
 *  version: 0.1
 *  date-created: feb-12-2022 
 *  last-modified: feb-15-2022
 */

import {
  StyleSheet
} from 'react-native';

  /**
       * buttonStyle
       * Purpose: Design the look of Pressable button
       * buttonText
       * Purpose: Design the look of text inside Pressable
*/
const buttonStyle = StyleSheet.create({
  button: {
    flex: 1,
    borderRadius: 18,
    justifyContent: 'space-evenly',
    alignContent: 'center',
    padding: 20,
    marginHorizontal: 5,
    borderWidth: 0.5,
    borderColor: '#8BBEE8FF',
  },
  buttonText: {
    textAlign: 'center',
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
    textShadowColor: '#0f8a3e',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 4,
  },
});

export default buttonStyle;

