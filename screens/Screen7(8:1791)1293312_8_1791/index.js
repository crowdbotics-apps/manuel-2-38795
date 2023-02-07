import React from "react"
import {
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
  Text,
  Button,
  Switch,
  TextInput,
  StyleSheet,
  ScrollView
} from "react-native"
import Icon from "react-native-vector-icons/FontAwesome"
import { CheckBox } from "react-native-elements"
import { connect } from "react-redux"
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen"
import { getNavigationScreen } from "@screens"
export class Blank extends React.Component {
  constructor(props) {
    super(props)

    this.state = {}
  }
  render = () => (
    <ScrollView
      contentContainerStyle={{ flexGrow: 1 }}
      style={styles.ScrollView_1}
    >
      <View style={styles.View_2} />
      <View style={styles.View_8_1792}>
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/a434d0a3-6b45-4bd5-9f2e-21eeee0e5b29"
          }}
          style={styles.ImageBackground_8_1793}
        />
        <View style={styles.View_8_1795}>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/96e4ad90-8680-46b8-ae4f-f765afb85194"
            }}
            style={styles.ImageBackground_8_1796}
          />
          <View style={styles.View_8_1797}>
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/9d562ff6-7eda-40dd-be7e-6ecd502e2b72"
              }}
              style={styles.ImageBackground_8_1798}
            />
            <View source={{ uri: "null" }} style={styles.View_8_1799} />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/c840cacd-23b1-433c-bd10-a1818d932871"
              }}
              style={styles.ImageBackground_8_1800}
            />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/65f815a5-b9f3-4546-8c6c-f3b1f194a9e2"
              }}
              style={styles.ImageBackground_8_1801}
            />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/71407764-5fca-4d4b-a2cc-da23f1b5629e"
              }}
              style={styles.ImageBackground_8_1816}
            />
            <View source={{ uri: "null" }} style={styles.View_8_1823} />
            <View source={{ uri: "null" }} style={styles.View_8_1824} />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/66b8af0f-e0fc-4aef-918f-975a153de470"
              }}
              style={styles.ImageBackground_8_1825}
            />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/f0f56bbb-d334-437e-b3eb-68b3b929c7de"
              }}
              style={styles.ImageBackground_8_1837}
            />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/c5775729-3a98-4ea8-bae9-64d51829baa1"
              }}
              style={styles.ImageBackground_8_1844}
            />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/49f9cf96-89ef-49f2-90d4-b16e25512c2d"
              }}
              style={styles.ImageBackground_8_1851}
            />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/541532c5-f998-4b85-86e7-3d1bfa95fb63"
              }}
              style={styles.ImageBackground_8_1864}
            />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/55be89ec-eae0-49ad-ad19-37a088357bd4"
              }}
              style={styles.ImageBackground_8_1866}
            />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/62906834-7d81-4559-a3f1-2288e0118073"
              }}
              style={styles.ImageBackground_8_1868}
            />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/d1707e56-b84d-4c1e-bed2-40b650f3edaf"
              }}
              style={styles.ImageBackground_8_1870}
            />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/35bc98f6-0d34-48ea-a4b0-06fa3588fba4"
              }}
              style={styles.ImageBackground_8_1872}
            />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/63c4a05f-d1e6-4f54-9ada-3d5868152162"
              }}
              style={styles.ImageBackground_8_1874}
            />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/37d5e6e8-4cd2-4882-930d-97c36c7fe2f5"
              }}
              style={styles.ImageBackground_8_1884}
            />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/044d48e9-1b27-4098-9b79-c7c37826499b"
              }}
              style={styles.ImageBackground_8_1892}
            />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/53caab42-b0fc-4f76-82c3-e85de5d68149"
              }}
              style={styles.ImageBackground_8_1903}
            />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/992106e8-f6e1-4dfa-9499-218fc694713b"
              }}
              style={styles.ImageBackground_8_1910}
            />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/f672b4b7-8f8d-4f99-be57-135cc9bb6fe4"
              }}
              style={styles.ImageBackground_8_1918}
            />
            <View source={{ uri: "null" }} style={styles.View_8_1921} />
            <View source={{ uri: "null" }} style={styles.View_8_1922} />
            <View source={{ uri: "null" }} style={styles.View_8_1923} />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/3b583efb-30b7-4b9f-83d6-e0be63a70f25"
              }}
              style={styles.ImageBackground_8_1924}
            />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/a02cc0a2-f9d2-45a1-b1f4-1f8ab8fa43a8"
              }}
              style={styles.ImageBackground_8_1933}
            />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/2e1ba7e9-e900-431f-99ee-fef977e52283"
              }}
              style={styles.ImageBackground_8_1940}
            />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/50a19363-ab69-49b5-9dd4-98f5a890ce6b"
              }}
              style={styles.ImageBackground_8_1947}
            />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/72454f3c-e01a-4101-9397-38d8a3c1790b"
              }}
              style={styles.ImageBackground_8_1960}
            />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/7b56720f-7b6c-42d7-a17f-5689226591dd"
              }}
              style={styles.ImageBackground_8_1962}
            />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/44da74af-1db6-4662-ac47-66d00405f7ef"
              }}
              style={styles.ImageBackground_8_1964}
            />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/bb962a26-960b-4c9b-baa5-07be8b0b2e09"
              }}
              style={styles.ImageBackground_8_1966}
            />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/a11febee-762e-452b-8f34-d58d6f37ddbe"
              }}
              style={styles.ImageBackground_8_1968}
            />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/269b98db-2a8c-4a88-835b-46982025a6a8"
              }}
              style={styles.ImageBackground_8_1970}
            />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/8b1b9282-dccd-495c-b2ff-0588e594f9ac"
              }}
              style={styles.ImageBackground_8_1979}
            />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/b33823dc-097f-4ecb-a3ab-074838e3f0da"
              }}
              style={styles.ImageBackground_8_1986}
            />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/3d54ee53-9257-451d-a8f1-c6385e555c15"
              }}
              style={styles.ImageBackground_8_1993}
            />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/0f9833a3-4c88-43bd-bcf2-ace35aeef1c7"
              }}
              style={styles.ImageBackground_8_2006}
            />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/2c1db358-1a30-4d10-960e-7470c1ac4561"
              }}
              style={styles.ImageBackground_8_2008}
            />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/4eae0ca0-1a5c-4876-ac62-f2e2c9a31157"
              }}
              style={styles.ImageBackground_8_2010}
            />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/acc67a87-7734-4625-8a9e-c79b24669ba1"
              }}
              style={styles.ImageBackground_8_2012}
            />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/c4b3a867-5d62-4b59-8989-22982d8daa69"
              }}
              style={styles.ImageBackground_8_2014}
            />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/f2da6391-d962-478f-bf53-cc2b606c9b87"
              }}
              style={styles.ImageBackground_8_2016}
            />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/c3f9d381-bc38-4438-b142-4a8295e7681e"
              }}
              style={styles.ImageBackground_8_2017}
            />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/bf968e08-120e-45c6-bd75-452ee40321f8"
              }}
              style={styles.ImageBackground_8_2018}
            />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/c2857357-d971-4661-82df-06b22debdd5e"
              }}
              style={styles.ImageBackground_8_2019}
            />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/001fa7f6-0522-424f-9377-03b581fb8e83"
              }}
              style={styles.ImageBackground_8_2020}
            />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/3a7a028f-1d36-4d0a-8459-ac1cdc4dc7ae"
              }}
              style={styles.ImageBackground_8_2021}
            />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/42c91715-a404-4202-b914-80b18fd576f1"
              }}
              style={styles.ImageBackground_8_2022}
            />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/5c85fa6c-0899-44af-b016-2493896aec37"
              }}
              style={styles.ImageBackground_8_2023}
            />
            <View style={styles.View_8_2024}>
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/349b1fd9-0279-463c-a51e-3d99c40681e6"
                }}
                style={styles.ImageBackground_8_2025}
              />
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/b473b36b-3907-4d0e-ab86-b1f0646f34d7"
              }}
              style={styles.ImageBackground_8_2028}
            />
            <View style={styles.View_8_2029}>
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/de837658-f554-4ec6-aa8c-92040f5ce09a"
                }}
                style={styles.ImageBackground_8_2030}
              />
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/bdf3764a-f042-4d86-8dd1-188da182d892"
              }}
              style={styles.ImageBackground_8_2034}
            />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/667fdbe1-24a5-4494-a810-37f8e7186c4b"
              }}
              style={styles.ImageBackground_8_2036}
            />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/eb16f886-5fd4-4407-ae0d-d62cf2e2d8ab"
              }}
              style={styles.ImageBackground_8_2037}
            />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/59269389-e243-40d9-9350-4deb9fa375a9"
              }}
              style={styles.ImageBackground_8_2038}
            />
          </View>
        </View>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(0, 0, 0, 0)" },
  View_2: { height: hp("127%") },
  View_8_1792: {
    width: wp("100%"),
    height: hp("127%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_8_1793: {
    width: wp("100%"),
    height: hp("127%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_8_1795: {
    width: wp("100%"),
    height: hp("127%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_8_1796: {
    width: wp("100%"),
    height: hp("127%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_8_1797: {
    width: wp("100%"),
    height: hp("127%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_8_1798: {
    width: wp("100%"),
    height: hp("127%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_8_1799: {
    width: wp("88%"),
    height: hp("14%"),
    top: hp("54%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%")
  },
  ImageBackground_8_1800: {
    width: wp("69%"),
    height: hp("8%"),
    top: hp("103%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17%")
  },
  ImageBackground_8_1801: {
    width: wp("33%"),
    height: hp("2%"),
    top: hp("106%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("35%")
  },
  ImageBackground_8_1816: {
    width: wp("24%"),
    height: hp("3%"),
    top: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("38%")
  },
  View_8_1823: {
    width: wp("88%"),
    height: hp("14%"),
    top: hp("18%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%")
  },
  View_8_1824: {
    width: wp("18%"),
    height: hp("11%"),
    top: hp("20%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10%")
  },
  ImageBackground_8_1825: {
    width: wp("27%"),
    height: hp("2%"),
    top: hp("21%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("33%")
  },
  ImageBackground_8_1837: {
    width: wp("11%"),
    height: hp("2%"),
    top: hp("28%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("77%")
  },
  ImageBackground_8_1844: {
    width: wp("9%"),
    height: hp("1%"),
    top: hp("29%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("39%")
  },
  ImageBackground_8_1851: {
    width: wp("22%"),
    height: hp("2%"),
    top: hp("25%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("33%")
  },
  ImageBackground_8_1864: {
    width: wp("5%"),
    height: hp("3%"),
    top: hp("28%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("33%")
  },
  ImageBackground_8_1866: {
    width: wp("5%"),
    height: hp("3%"),
    top: hp("28%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("50%")
  },
  ImageBackground_8_1868: {
    width: wp("2%"),
    height: hp("0%"),
    top: hp("29%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("34%")
  },
  ImageBackground_8_1870: {
    width: wp("2%"),
    height: hp("0%"),
    top: hp("29%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("51%")
  },
  ImageBackground_8_1872: {
    width: wp("0%"),
    height: hp("1%"),
    top: hp("29%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("52%")
  },
  ImageBackground_8_1874: {
    width: wp("16%"),
    height: hp("2%"),
    top: hp("82%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%")
  },
  ImageBackground_8_1884: {
    width: wp("13%"),
    height: hp("2%"),
    top: hp("82%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("74%")
  },
  ImageBackground_8_1892: {
    width: wp("19%"),
    height: hp("2%"),
    top: hp("87%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%")
  },
  ImageBackground_8_1903: {
    width: wp("14%"),
    height: hp("3%"),
    top: hp("95%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%")
  },
  ImageBackground_8_1910: {
    width: wp("20%"),
    height: hp("3%"),
    top: hp("95%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("72%")
  },
  ImageBackground_8_1918: {
    width: wp("4%"),
    height: hp("2%"),
    top: hp("87%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("74%")
  },
  View_8_1921: {
    width: wp("88%"),
    height: hp("14%"),
    top: hp("36%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%")
  },
  View_8_1922: {
    width: wp("18%"),
    height: hp("11%"),
    top: hp("38%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10%")
  },
  View_8_1923: {
    width: wp("18%"),
    height: hp("11%"),
    top: hp("55%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10%")
  },
  ImageBackground_8_1924: {
    width: wp("20%"),
    height: hp("2%"),
    top: hp("39%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("33%")
  },
  ImageBackground_8_1933: {
    width: wp("11%"),
    height: hp("2%"),
    top: hp("46%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("77%")
  },
  ImageBackground_8_1940: {
    width: wp("9%"),
    height: hp("1%"),
    top: hp("46%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("39%")
  },
  ImageBackground_8_1947: {
    width: wp("22%"),
    height: hp("2%"),
    top: hp("42%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("33%")
  },
  ImageBackground_8_1960: {
    width: wp("5%"),
    height: hp("3%"),
    top: hp("45%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("33%")
  },
  ImageBackground_8_1962: {
    width: wp("5%"),
    height: hp("3%"),
    top: hp("45%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("50%")
  },
  ImageBackground_8_1964: {
    width: wp("2%"),
    height: hp("0%"),
    top: hp("47%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("34%")
  },
  ImageBackground_8_1966: {
    width: wp("2%"),
    height: hp("0%"),
    top: hp("47%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("51%")
  },
  ImageBackground_8_1968: {
    width: wp("0%"),
    height: hp("1%"),
    top: hp("46%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("52%")
  },
  ImageBackground_8_1970: {
    width: wp("20%"),
    height: hp("2%"),
    top: hp("56%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("33%")
  },
  ImageBackground_8_1979: {
    width: wp("12%"),
    height: hp("2%"),
    top: hp("64%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("77%")
  },
  ImageBackground_8_1986: {
    width: wp("9%"),
    height: hp("1%"),
    top: hp("64%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("39%")
  },
  ImageBackground_8_1993: {
    width: wp("22%"),
    height: hp("2%"),
    top: hp("60%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("32%")
  },
  ImageBackground_8_2006: {
    width: wp("5%"),
    height: hp("3%"),
    top: hp("63%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("33%")
  },
  ImageBackground_8_2008: {
    width: wp("5%"),
    height: hp("3%"),
    top: hp("63%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("50%")
  },
  ImageBackground_8_2010: {
    width: wp("2%"),
    height: hp("0%"),
    top: hp("64%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("34%")
  },
  ImageBackground_8_2012: {
    width: wp("2%"),
    height: hp("0%"),
    top: hp("64%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("51%")
  },
  ImageBackground_8_2014: {
    width: wp("0%"),
    height: hp("1%"),
    top: hp("64%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("52%")
  },
  ImageBackground_8_2016: {
    width: wp("47%"),
    height: hp("0%"),
    top: hp("92%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("26%")
  },
  ImageBackground_8_2017: {
    width: wp("87%"),
    height: hp("0%"),
    top: hp("78%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%")
  },
  ImageBackground_8_2018: {
    width: wp("9%"),
    height: hp("5%"),
    top: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%")
  },
  ImageBackground_8_2019: {
    width: wp("3%"),
    height: hp("3%"),
    top: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%")
  },
  ImageBackground_8_2020: {
    width: wp("2%"),
    height: hp("1%"),
    top: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("91%")
  },
  ImageBackground_8_2021: {
    width: wp("2%"),
    height: hp("1%"),
    top: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("91%")
  },
  ImageBackground_8_2022: {
    width: wp("2%"),
    height: hp("1%"),
    top: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("91%")
  },
  ImageBackground_8_2023: {
    width: wp("8%"),
    height: hp("4%"),
    top: hp("118%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("57%")
  },
  View_8_2024: {
    width: wp("6%"),
    height: hp("4%"),
    top: hp("118%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("38%")
  },
  ImageBackground_8_2025: {
    width: wp("6%"),
    height: hp("4%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_8_2028: {
    width: wp("7%"),
    height: hp("4%"),
    top: hp("118%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15%")
  },
  View_8_2029: {
    width: wp("7%"),
    height: hp("4%"),
    top: hp("118%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("79%")
  },
  ImageBackground_8_2030: {
    width: wp("7%"),
    height: hp("4%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_8_2034: {
    width: wp("83%"),
    height: hp("8%"),
    top: hp("116%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%")
  },
  ImageBackground_8_2036: {
    width: wp("18%"),
    height: hp("11%"),
    top: hp("20%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10%")
  },
  ImageBackground_8_2037: {
    width: wp("18%"),
    height: hp("11%"),
    top: hp("55%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10%")
  },
  ImageBackground_8_2038: {
    width: wp("18%"),
    height: hp("11%"),
    top: hp("38%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10%")
  }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
