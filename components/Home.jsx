import React, { useState } from "react";
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  useColorScheme,
  View,
  Image,
  Button,
} from "react-native";
import { useStore } from "./Store";
export default function Home({ navigation }) {
  const mode = useStore((state) => state.mode);
  const setMode=useStore((state)=>state.setMode)

  const IMAGES = [
    require("../assets/1.gif"), // statically analyzed
    require("../assets/2.gif"),
    require("../assets/3.gif"),
    require("../assets/4.gif"),
    require("../assets/5.gif"),
    require("../assets/6.gif"),
    require("../assets/7.gif"),
    require("../assets/8.gif"),
    require("../assets/9.gif"),
    require("../assets/10.gif"),
  ];
  const styles = StyleSheet.create({
    container: {
      flex: 1,

      backgroundColor: mode?"#212529":"white",
      justifyContent: "center",
      alignItems: "center",
      alignContent: "center",
    },
    card: {
      width: "90%",
      height: "60%",

      padding: "5%",
      backgroundColor: mode?"#2a2e32":"white",
      borderRadius: 20,
      overflow: "hidden",
      shadowColor: "black",
      shadowOffset: {
        width: 0,
        height: 0,
      },
      shadowOpacity: 0.36,
      shadowRadius: 6.68,

      elevation: 11,
    },
    cat: {
      resizeMode: 'contain',
      alignSelf:"center",
      aspectRatio: 1,
      width:"100%",
      flex:1
     
    },
    onlypaws: {
      color: mode?"white":"black",
      fontSize: 30,
      textAlign: "center",
      fontWeight: "bold",
      padding:"1%"
    },
    greetings: {
      textAlign: "center",
      fontSize: 20,
      padding: 5,
      margin: 10,
      color: "white",
      borderRadius: 10,
      fontWeight: "500",
      backgroundColor: "rgba(0,0,0,0.8)",
    },

    poison: {
      fontSize: 15,
      color: mode?"white":"black",
      fontWeight: "900",
    },
    options: {
      margin: 5,
      flex: 1,
      justifyContent: "space-evenly",
      alignContent: "center",
      alignItems: "center",
    },
    buttons: {
      flex: 1,
      justifyContent: "center",

      borderRadius: 20,
      color: "red",
      width: "100%",
      margin: 5,
      backgroundColor: "rgba(0,0,0,0.8)",
      color: "white",
    },
  });
  let greetings = [
    "Witch🧙‍♀️🧹",
    "Bubba♥️",
    "Lizard Queen🦎👑",
    "Bhadwi👽",
    "Master👹🥵",
    "Beautiful✨",
  ];

  

  return (
    <>
      <View style={styles.container}>
      
        <View style={styles.card}>
        <View style={{
          alignSelf:"flex-end",
          margin:"2%"
        }}>
          <TouchableOpacity onPress={()=>{
            setMode()
          }}><Image style={{
            width:32,
            height:32
          }}
          source={mode?require("../assets/night.png"):require("../assets/day.png")}
          ></Image></TouchableOpacity>
        </View>
          <Text style={styles.onlypaws}>
            OnlyPaws
            <Image
              style={{
                width: 50,
                height: 50,
              }}
              source={require("../assets/paw.png")}
            ></Image>
          </Text>
          <Image style={styles.cat} source={IMAGES[Math.floor(Math.random() * 10)]}></Image>
          <View style>
            <Text style={styles.greetings}>
              Welcome {greetings[Math.floor(Math.random() * 6)]}
            </Text>
          </View>
          <Text style={styles.poison}>Select your Poison☠️</Text>
          <View style={styles.options}>
            <TouchableOpacity
              onPress={() => navigation.navigate("Cats")}
              style={styles.buttons}
            >
              <Text
                style={{
                  color: "white",
                  color: "white",
                  fontSize: 20,
                  textAlign: "center",
                }}
              >
                Cats🐱
              </Text>
            </TouchableOpacity>
            <TouchableOpacity 
               onPress={() => navigation.navigate("Dogs")}
            style={styles.buttons}>
              <Text
                style={{
                  color: "white",
                  fontSize: 20,
                  textAlign: "center",
                }}
              >
                Dogs🐶
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </>
  );
}
