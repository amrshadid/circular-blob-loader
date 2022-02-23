import React, { Component } from 'react'
import {View,Animated,Easing,Text,StyleSheet,Image} from "react-native";
import layer1 from '../../assets/layer1.png';
import layer2 from '../../assets/layer2.png';
import layer3 from '../../assets/layer3.png';
import blackCircle from '../../assets/blackCircle.png';

export default class Loader extends Component {
  state = {
    spinAnim: new Animated.Value(0) ,
  };

  componentDidMount(){
    Animated.loop(Animated.timing(
       this.state.spinAnim,
     {
       toValue: 1,
       duration: 4000,
       easing: Easing.linear,
       useNativeDriver: true
     }
   )).start();
    }

  render() {
    const spin = this.state.spinAnim.interpolate({
      inputRange: [0, 1],
      outputRange: ['0deg', '360deg']
    });

    return (
      <>
          <View style={Style.container}>

              <Animated.View style={[Style.container,{transform: [{rotate: spin}]}]}>
                <Image style={Style.layers} source={layer1}/>
                <Image style={Style.layers} source={layer2}/>
                <Image style={Style.layers} source={layer3}/>
                <Image style={Style.blackCircle} source={blackCircle}/>
              </Animated.View>

              <Text style={Style.font}>Loading ...</Text>

          </View>
      </>
    )
  }
}

const Style = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:"center",
        alignItems:"center",
        backgroundColor:"black",
    },
    layers:{
      resizeMode:"contain",
      width:"100%",
      height: "100%",
      position:"absolute"
    },
    blackCircle:{
      position:"absolute"
    },
    font:{
        position:"absolute",
        color:"white",
        fontSize:20,
        fontFamily:"Verdana-Italic"
    }
})