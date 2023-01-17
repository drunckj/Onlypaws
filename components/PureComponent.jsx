import React, { memo } from "react";

import { useEffect, useState, useRef } from "react";
import {
  Text,
  Image,
  ScrollView,
  View,
  StyleSheet,
  Button,
  FlatList,
} from "react-native";
import { useStore } from "./Store";
import { Video, AVPlaybackStatus } from "expo-av";
import { SafeAreaView } from "react-native-safe-area-context";
const PostCard = ({ item }) => {
  const mode = useStore((state) => state.mode);
  const setMode=useStore((state)=>state.setMode)
    const [showdefault,setshowdefault]=useState(true)
  const styles = StyleSheet.create({
    card: {
      flex: 1,
      flexDirection: "column",
      width: "95%",
      height: "100%",
      minHeight: 500,
      paddingBottom: 5,
      backgroundColor: mode?"#2a2e32":"white",
      borderRadius: 10,
      justifyContent: "space-evenly",
      alignContent: "center",
      alignItems: "center",
      shadowColor: "black",
      shadowOffset: {
        width: 0,
        height: 0,
      },
      marginVertical: 10,
      shadowOpacity: 0.36,
      shadowRadius: 6.68,
      elevation: 11,
      alignSelf: "center",
    },
    header: {
      padding: 10,
      backgroundColor: "white",
      //   flex: 1,
      width: "100%",
      height: 90,
      alignItems: "center",
      borderBottomLeftRadius: 20,
      borderBottomRightRadius: 20,
    },
    headertext: {
      fontSize: 30,
      fontWeight: "bold",
      color: "black",
    },
    paw: {
      width: 50,
      height: 50,
    },
    main: {
      flex: 1,
      alignContent: "center",
      justifyContent: "center",
      alignItems: "center",
      width: "100%",
    },
    footerText: {
      fontSize: 15,
      fontWeight: "900",
      fontFamily: "Roboto",
      color: mode?"white":"black",
      textAlign: "justify",
    },
    footer: {
      flex: 1,
      width: "100%",
      height: "10%",
      margin: "1%",
      
      paddingHorizontal:"10%",
      justifyContent: "center",
      alignContent: "center",
      alignItems: "center",
    },
  });
  if (item.data.is_video) {
    return (
      <View style={styles.card}>
        <Video
          style={{
            resizeMode: 'contain',
            
            aspectRatio: 1,
            width:"100%"
          }}
          source={{
            uri: item.data.media.reddit_video.hls_url,
          }}
          useNativeControls
          resizeMode="contain"
        />
        <Text style={styles.footerText}>{item.data.title}</Text>
      </View>
    );
  } else if (
    item.data.preview !== undefined &&
    item.data.url.slice(-3) !== "jpg" &&
    item.data.url.slice(-3) !== "png"
  ) {
    
    let str;
    if (item.data.domain === "i.redd.it") {
      str = String(item.data.url.replace(/amp;/g, ""))
      
      return (
        <View style={styles.card}>
          <Image
            style={{
              resizeMode: 'contain',
              
              aspectRatio: 1,
              width:"100%"
            }}
            source={{
              uri:str
            }}
            onLoadEnd={()=>{setshowdefault(false)}}
          />

          <View style={styles.footer}>
            <Text style={styles.footerText}>{item.data.title}</Text>
          </View>
        </View>
      );
    } else if (item.data.preview.reddit_video_preview !== undefined) {
      
      str = item.data.preview.reddit_video_preview.hls_url.replace(/amp;/g, "");
 
      return (
        <View style={styles.card}>
          <Video
            style={{
                resizeMode: 'contain',
                
                aspectRatio: 1,
                width:"100%"
            }}
            source={{
              uri: String(str),
            }}
            useNativeControls
            resizeMode="contain"
          />
          <View style={styles.footer}>
            <Text style={styles.footerText}>{item.data.title}</Text>
          </View>
        </View>
      );
    }
  } else if (
    item.data.post_hint === "image" &&
    (item.data.url.slice(-3) === "jpg" || item.data.url.slice(-3) === "png")
  ) {
    let str = item.data.preview.images[0].resolutions[
      item.data.preview.images[0].resolutions.length - 1
    ].url.replace(/amp;/g, "");
    return (
      <View style={styles.card}>
        <Image
          style={{
            resizeMode: 'contain',
            
            aspectRatio: 1,
            width:"100%"
            
          }}
          source={{
            uri: String(str),
          }}
        />
        <View style={styles.footer}>
          <Text style={styles.footerText}>{item.data.title}</Text>
        </View>
      </View>
    );
  }
};

export default memo(PostCard);
