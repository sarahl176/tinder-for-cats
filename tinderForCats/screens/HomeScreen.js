import * as WebBrowser from "expo-web-browser";
import React from "react";
import Swiper from "react-native-swiper";
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Button,
  Dimensions
} from "react-native";

const { width, height } = Dimensions.get("window");

const animals = [
  {
    name: "aiko",
    species: "cat",
    imgUrl:
      "https://upload.wikimedia.org/wikipedia/commons/6/66/An_up-close_picture_of_a_curious_male_domestic_shorthair_tabby_cat.jpg"
  },
  {
    name: "ryker",
    species: "dog",
    imgUrl:
      "https://www.medicalnewstoday.com/content/images/articles/322/322868/golden-retriever-puppy.jpg"
  },
  {
    name: "lucky",
    species: "dog",
    imgUrl:
      "https://boygeniusreport.files.wordpress.com/2016/11/puppy-dog.jpg?quality=98&strip=all&w=782"
  }
];

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.container}>
        <Swiper style={styles.wrapper} showsButtons>
          {animals.map(card => {
            return (
              <View style={styles.card}>
                <Text>{card.name}</Text>
                <Image
                  style={styles.cardImage}
                  source={{
                    uri: card.imgUrl
                  }}
                />
              </View>
            );
          })}
        </Swiper>
      </View>

      <View style={styles.tabBarInfoContainer}>
        <View style={styles.tabBarButton}>
          <Button title="Save" />
        </View>

        <View style={styles.tabBarButton}>
          <Button style={styles.tabBarButton} title="Block" />
        </View>

        <View style={styles.tabBarButton}>
          <Button style={styles.tabBarButton} title="Profile" />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    paddingTop: 20
  },
  cardImage: {
    width: width * 0.9,
    height: height * 0.75,
    borderRadius: 10
  },
  card: {
    flex: 1,
    borderColor: "#E8E8E8",
    alignItems: "center"
  },
  developmentModeText: {
    marginBottom: 20,
    color: "rgba(0,0,0,0.4)",
    fontSize: 14,
    lineHeight: 19,
    textAlign: "center"
  },
  contentContainer: {
    paddingTop: 30
  },
  welcomeContainer: {
    alignItems: "center",
    marginTop: 10,
    marginBottom: 20
  },
  welcomeImage: {
    width: 100,
    height: 80,
    resizeMode: "contain",
    marginTop: 3,
    marginLeft: -10
  },
  getStartedContainer: {
    alignItems: "center",
    marginHorizontal: 50
  },
  homeScreenFilename: {
    marginVertical: 7
  },
  codeHighlightText: {
    color: "rgba(96,100,109, 0.8)"
  },
  codeHighlightContainer: {
    backgroundColor: "rgba(0,0,0,0.05)",
    borderRadius: 3,
    paddingHorizontal: 4
  },
  getStartedText: {
    fontSize: 17,
    color: "rgba(96,100,109, 1)",
    lineHeight: 24,
    textAlign: "center"
  },
  tabBarInfoContainer: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    ...Platform.select({
      ios: {
        shadowColor: "black",
        shadowOffset: { width: 0, height: -3 },
        shadowOpacity: 0.1,
        shadowRadius: 3
      },
      android: {
        elevation: 20
      }
    }),
    alignItems: "center",
    backgroundColor: "#fbfbfb",
    paddingVertical: 20,
    display: "flex",
    flexDirection: "row",
    justifyContent: "center"
  },
  tabBarButton: {
    flex: 1
  },
  tabBarInfoText: {
    fontSize: 17,
    color: "rgba(96,100,109, 1)",
    textAlign: "center"
  },
  navigationFilename: {
    marginTop: 5
  },
  helpContainer: {
    marginTop: 15,
    alignItems: "center"
  },
  helpLink: {
    paddingVertical: 15
  },
  helpLinkText: {
    fontSize: 14,
    color: "#2e78b7"
  }
});
