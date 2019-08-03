/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Fragment} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import Thanhkma from './components/test.js';

const App = () => {
  return (
        <View style={ao.bao}>
            <View style={ao.dong}>
                <View style={ao.cot}>
                  <Text style={ao.number}>1</Text>
                  <Text style={ao.text}>abc</Text>
                </View>
                <View style={ao.cot}>
                  <Text style={ao.number}>2</Text>
                  <Text style={ao.text}>abc</Text>
                </View>
                <View style={ao.cot}>
                  <Text style={ao.number}>3</Text>
                  <Text style={ao.text}>abc</Text>
                </View>
            </View>
            <Thanhkma />
            <View style={ao.dong}>
                <View style={ao.cot}>
                 <Text style={ao.number}>4</Text>
                  <Text style={ao.text}>abc</Text>
                </View>
                <View style={ao.cot}>
                 <Text style={ao.number}>5</Text>
                  <Text style={ao.text}>abc</Text>
                </View>
                <View style={ao.cot}>
                  <Text style={ao.number}>6</Text>
                  <Text style={ao.text}>abc</Text>
                </View>
            </View>

            <View style={ao.dong}>
                <View style={ao.cot}>
                  <Text style={ao.number}>7</Text>
                  <Text style={ao.text}>abc</Text>
                </View>
                <View style={ao.cot}>
                   <Text style={ao.number}>8</Text>
                  <Text style={ao.text}>abc</Text>
                </View>
                <View style={ao.cot}>
                   <Text style={ao.number}>9</Text>
                  <Text style={ao.text}>abc</Text>
                </View>
           </View>

            <View style={ao.dong}>
                 <View style={ao.cot}></View>
                <View style={ao.cot}>
                  <Text style={ao.number}>0</Text>
                </View>
                <View style={ao.cot}>
                </View>
            </View>
        </View>
  );
};

// Khai báo component

// export default class ovuong extends Component {
//       render() {
//         <View style={ao.teo}></View>
//       }
// }


var ao = StyleSheet.create({
    bao : {
      flex:1,
    },
    teo : {
      width:108,
      height:108,
      backgroundColor:'red'
    },
    dong : {
      flex:1,
      borderBottomColor:'grey',
      borderBottomWidth:1,
      flexDirection:'row'
    },
    cot : {
      flex:1,
      borderRightWidth:1,
      borderRightColor:'grey',
      alignItems:'center',
      justifyContent:'center'
    },

    number : {
      fontSize:25,
      color:'black'
    },
    text : {
      fontSize:16,
      color:'black'
    }


});



export default App;
