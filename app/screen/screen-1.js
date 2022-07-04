import axios from "axios";
import { useEffect, useState } from "react";
import {
  Text , 
  View, 
  TextInput,
  StyleSheet,
  StatusBar,
  SafeAreaView,
  FlatList,
  Image ,
  TouchableOpacity
} from "react-native";
import { Actions } from "react-native-router-flux";

const ScreenOne = (props) => {
  const [news, setNews] = useState([]);
  useEffect(() => {
    // getNews()
  }, []);

  const getNews = (value) => {
    axios
      .get(
        `https://newsapi.org/v2/everything?q=${value}&from=2022-07-01&sortBy=popularity&apiKey=b573622e0a154828aca64bdd0a47533a`
      )
      .then((res) => {
        if (res?.data?.articles) {
          setNews(res?.data?.articles);
        }
      })
      .catch((err) => {});
  };
  const Item = (details) => {
    console.log("titletitle", details);
    return (
      <TouchableOpacity
        onPress={() => Actions.second({ datas: details })}
        style={styles.item}
      >
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            paddingTop: 10,
          }}
        >
          <Image
            style={{ width: 50, height: 50, borderRadius: 25 }}
            source={{ uri: details.item.urlToImage }}
          />
          <Text style={[styles.title, { marginLeft: 10, width: "75%" }]}>
            {details.item.title}
          </Text>
        </View>
      </TouchableOpacity>
    );
  };
  const renderItem = ({ item }) => {
    const backgroundColor = "#f9c2ff";
    const color = "black";

    return (
      <Item
        item={item}
        backgroundColor={{ backgroundColor: "blue" }}
        textColor={{ color }}
      />
    );
  };
  const noData = () => {
    return (
      <View
        style={[
          styles.container,
          { justifyContent: "center", display: "flex" },
        ]}
      >
        <Text
          style={{
            textAlign: "center",
            marginTop: "55%",
            fontSize: 15,
            color: "#273c75",
          }}
        >
          No data available
        </Text>
      </View>
    );
  };
  const render = () => {
    return (
      <View style={{ flex: 1 }}>
        <SafeAreaView style={styles.container}>
          <TextInput
            style={styles.textInputStyle}
            onChangeText={(e) => (e.length > 1 ? getNews(e) : setNews([]))}
            maxLength={20}
            underlineColorAndroid="transparent"
            placeholder="Search Here"
          />

          <FlatList
            ListEmptyComponent={noData}
            data={news}
            renderItem={renderItem}
            keyExtractor={(item) => item.id}
          />
        </SafeAreaView>
      </View>
    );
  };
  return render();
};
export default ScreenOne;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    backgroundColor: "#dfe6e9",
    borderRadius: 15,
  },
  title: {
    fontSize: 16,
  },
  textStyle: {
    padding: 10,
  },
  textInputStyle: {
    marginTop: 25,
    height: 40,
    width: 350,
    borderWidth: 1,
    paddingLeft: 10,
    borderColor: "#273c75",
    backgroundColor: "#FFFFFF",
    marginLeft: 23,
    borderRadius: 30,
  },
});
