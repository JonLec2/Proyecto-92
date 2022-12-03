import React from "react";
import {
  Text,
  View,
  StyleSheet,
  ImageBackground,
  Image,
  SafeAreaView,
  StatusBar,
  TextInput,
} from "react-native";
import * as Font from "expo-font";
import { RFValue } from "react-native-responsive-fontsize";
import {BoxShadow} from 'react-native-shadow'

let customFonts = {
  "Inter-Black": require("../assets/Fonts/SourceSansPro-Regular.ttf"),
};

const image = require("../assets/background.png");
const user = require("../assets/icons/user2.png");
const shadowOpt = {
	width:100,
	height:100,
	color:"#000",
	border:2,
	radius:3,
	opacity:0.2,
	x:3,
	y:3,
	style:{marginVertical:5}
}

export default class App extends React.Component {
  state = {
    fontsLoaded: false,
  };

  

  async _loadFontsAsync() {
    await Font.loadAsync(customFonts);
    this.setState({ fontsLoaded: true });
  }

  componentDidMount() {
    this._loadFontsAsync();
  }

  render() {
    if (!this.state.fontsLoaded) {
      return null;
    }

    return (
      <View style={styles.container}>
        <ImageBackground source={image} resizeMode="cover" style={styles.image}>
          <SafeAreaView style={styles.droidSafeArea} />
          <BoxShadow setting={shadowOpt}>
          <View style={styles.cuadrado}> 
          <Image source={user} style={styles.userimage} />
          </View>
          </BoxShadow>
          <Text style={styles.titletext}>Iniciar Sesion</Text>
          <TextInput></TextInput>
        </ImageBackground>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  image: {
    flex: 1,
    alignItems: "center",
  },

  droidSafeArea: {
    marginTop:
      Platform.OS === "android" ? StatusBar.currentHeight : RFValue(35),
  },

  userimage: {
    width: 126,
    height: 126,
    marginTop: RFValue(45),
  },

  titletext: {
    fontFamily: "Inter-Black",
    fontSize: RFValue(32),
    color: "white",
    marginTop: 20,
  },

cuadrado:{
  backgroundColor:"red",
  height:100,
  width:100,
  shadowColor: "#000",

  
}

});
