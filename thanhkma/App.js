import React from 'react';
import { StyleSheet, Text, View , ScrollView} from 'react-native';
import Cate from './components/cate';

export default class App extends React.Component {
  render() {
      return (
        <View style={styles.container}>
          <Text>Hello Word</Text>
          <ScrollView>
            <Cate />
            <Cate />
            <Cate />
            <Cate />
            <Cate />
            <Cate />
          </ScrollView>
        </View>
      );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
});
