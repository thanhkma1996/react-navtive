import React, {Component} from "react";
import {
    StyleSheet,Text,View
} from "react-native";

export default class Thanhkma extends React.Component {
        render(){
            return (
                <View style={aot.o}>
                    <Text> Thanh kma </Text>
                </View>
            );
        }
}

var aot = StyleSheet.create({
    o: {
        width:200,
        height:200,
        backgroundColor:'red'
    }
});