import { Image , View , Text  } from "react-native";

const ScreenTwo = (props) => {
  console.log("prosplds", props);

  const render = () => {
    return (
      <View
        style={{
          flex: 1,
          display: "flex",
          backgroundColor: "#fff",
          paddingTop: 23,
          paddingLeft: 23,
          marginTop: 50,
        }}
      >
        {props?.datas?.item?.urlToImage && (
          <Image
            style={{
              width: 100,
              height: 100,
              borderRadius: 50,
              alignContent: "center",
              justifyContent: "center",
              marginLeft: "25%",
            }}
            source={{ uri: props?.datas?.item?.urlToImage }}
          />
        )}
        <View
          style={{ display: "flex", flexDirection: "column", marginTop: 20 }}
        >
          <Text style={{ fontSize: 17, fontWeight: "900", marginBottom: 5 }}>
            Title:
          </Text>
          <Text style={{ marginLeft: 15, width: "75%" }}>
            {props?.datas?.item?.title}
          </Text>
        </View>
        <View
          style={{ display: "flex", flexDirection: "column", marginTop: 20 }}
        >
          <Text style={{ fontSize: 17, fontWeight: "900", marginBottom: 5 }}>
            Author:
          </Text>
          <Text style={{ marginLeft: 15, width: "75%" }}>
            {props?.datas?.item?.author ? props?.datas?.item?.author : "--"}
          </Text>
        </View>

        <View
          style={{ display: "flex", flexDirection: "column", marginTop: 20 }}
        >
          <Text style={{ fontSize: 17, fontWeight: "900", marginBottom: 5 }}>
            Description:
          </Text>
          <Text style={{ marginLeft: 15, width: "75%" }}>
            {props?.datas?.item?.description}
          </Text>
        </View>
        <View
          style={{ display: "flex", flexDirection: "column", marginTop: 20 }}
        >
          <Text style={{ fontSize: 17, fontWeight: "900", marginBottom: 5 }}>
            content:
          </Text>
          <Text style={{ marginLeft: 15, width: "75%" }}>
            {props?.datas?.item?.content}
          </Text>
        </View>
        <View
          style={{ display: "flex", flexDirection: "column", marginTop: 20 }}
        >
          <Text style={{ fontSize: 17, fontWeight: "900", marginBottom: 5 }}>
            publishedAt:
          </Text>
          <Text style={{ marginLeft: 15, width: "75%" }}>
            {props?.datas?.item?.publishedAt}
          </Text>
        </View>
      </View>
    );
  };
  return render();
};
export default ScreenTwo;
