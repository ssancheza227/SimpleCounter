/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState, useEffect} from 'react';
import type {Node} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Button
} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
const App: () => Node = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  const [counter, setCounter] = useState(0);
  const [enableIncrement] = useState(false);
  const [enableDecrement, setDisableDecrement] = useState(true);

  const onIncrement = () => {
    setCounter(counter+1);
  }

  const onDecrement = () => {
      setCounter(counter-1);
  }

  useEffect(() => {
    if(counter > 0) {
      setDisableDecrement(false);
    }else {
      setDisableDecrement(true)
    }
  },[counter])

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}>
        <View
          style={[{
            backgroundColor: isDarkMode ? Colors.black : Colors.white,
          }, styles.container]}>
            <Text style={styles.text}>Counter: <Text>{counter}</Text></Text>
            <View style={styles.containerButton}>
              <Button title='Increment' onPress={() => onIncrement()} disabled={enableIncrement}/>
            </View>
            <Button title='Decrement' onPress={() => onDecrement()} disabled={enableDecrement}/>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    color: Colors.black
  },
  container: {padding: 24},
  containerButton: {marginVertical:16}
})

export default App;
