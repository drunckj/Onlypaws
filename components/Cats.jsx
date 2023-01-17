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
import PostCard from "./PureComponent"
export default function Cats() {
  const mode = useStore((state) => state.mode);
  const setMode=useStore((state)=>state.setMode)
  const video = useRef(null);
  const [data, setData] = useState([]);
  const [status, setStatus] = useState({});
  useEffect(() => {
    fetch("https://api.reddit.com/r/IllegallySmolCats.json?sort=new&limit=50")
      .then((response) => response.json())
      .then((json) => {
        setData((data) => data.concat(json.data.children));
      });
    fetch("https://api.reddit.com/r/cats.json?sort=hot&limit=50")
      .then((response) => response.json())
      .then((json) => {
        setData((data) => data.concat(json.data.children));
      });

    fetch("https://api.reddit.com/r/chonkers.json?sort=hot&limit=20")
    .then((response) => response.json())
    .then((json) =>{
        setData(data => data.concat(json.data.children))

    })
  }, []);

  function removeamp(item) {
    return item.repl;
  }
  const styles = StyleSheet.create({
    card: {
      flex: 1,

      width: "95%",
      height: 900,
      paddingBottom: 5,
      backgroundColor: mode?"#2a2e32":"white",
      borderRadius: 10,
      justifyContent: "space-evenly",
      alignContent: "center",
      alignItems: "center",
      shadowColor: "black",
      shadowOffset: {
        width: 0,
        height: 5,
      },
      marginVertical: 10,
      shadowOpacity: 0.36,
      shadowRadius: 6.68,
      elevation: 11,
      alignSelf: "center",
    },
    header: {
      padding: 10,
      backgroundColor: mode?"#2a2e32":"white",
      //   flex: 1,
      width: "100%",
      height: 90,
      alignItems: "center",
      borderBottomLeftRadius: 20,
      borderBottomRightRadius: 20,
      elevation:10,
      shadowColor: "shadow",
      shadowOffset: {
        width: 0,
        height: 5,
      },
    },
    headertext: {
      fontSize: 30,
      fontWeight: "bold",
      color: mode?"white":"black",
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
      height:200,
    },
    footerText: {
      fontSize: 15,
      fontWeight: "900",
      fontFamily: "Roboto",
      textAlign: "justify",
    },
  });
  function shuffle(array) {
    let currentIndex = array.length,
      randomIndex;

    // While there remain elements to shuffle.
    while (currentIndex != 0) {
      // Pick a remaining element.
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex],
        array[currentIndex],
      ];
    }

    return array;
  }
  const renderItem = ({ item }) => {
    return(<PostCard item={item}/>)
  };
  return (
    <>
      <SafeAreaView
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: mode?"#212529":"white",
        }}
      >
        <View style={styles.header}>
          <Text style={styles.headertext}>
            OnlyPaws
            <Image
              style={styles.paw}
              source={require("../assets/paw.png")}
            ></Image>
          </Text>
        </View>
        <FlatList
          style={{
            flex: 1,
            width: "100%",
            marginTop:"2%"
          }}
          initialNumToRender={5}
          data={shuffle(data)}
          renderItem={renderItem}
        />

        {/* <View style={styles.container}>
      <Video
        ref={video}
        style={{
            width:400,
            height:400
        }}
        source={{
          uri: 'https://v.redd.it/abrn0uedh9481/HLSPlaylist.m3u8?a=1676462220%2CZDNkNDIzYjg4YjI3MWVlN2I2M2M3ODBlOTNjYTQ1NWRkMzJmZDRjZDMxNzhkNWEyZTlhMWNmOGI4MGVjYTVhOQ%3D%3D&amp;v=1&amp;f=sd',
        }}
        
        
        resizeMode="contain"
        isLooping
        onPlaybackStatusUpdate={status => setStatus(() => status)}
      />
      
    </View> */}
      </SafeAreaView>
    </>
  );
}
