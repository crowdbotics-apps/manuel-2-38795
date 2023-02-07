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
      <View style={styles.View_8_1012}>
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/ca16d84a-99cc-483d-a932-5a1728baea6d"
          }}
          style={styles.ImageBackground_8_1013}
        />
        <View style={styles.View_8_1015}>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/2263aee8-26ad-49e0-95de-be2de9ae7bff"
            }}
            style={styles.ImageBackground_8_1016}
          />
          <View style={styles.View_8_1017}>
            <View style={styles.View_8_1018}>
              <View style={styles.View_8_1019}>
                <ImageBackground
                  source={{
                    uri:
                      "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/15adec7e-4b25-424f-96fd-60a149629ecc"
                  }}
                  style={styles.ImageBackground_8_1020}
                />
                <View style={styles.View_8_1022}>
                  <View style={styles.View_8_1023}>
                    <ImageBackground
                      source={{
                        uri:
                          "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/a22d8d60-8e1f-419d-aea3-58d54d4592d4"
                      }}
                      style={styles.ImageBackground_8_1024}
                    />
                  </View>
                </View>
              </View>
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/ccd1b80a-39e1-43f5-ac88-d8b41c236969"
              }}
              style={styles.ImageBackground_8_1025}
            />
            <View style={styles.View_8_1026}>
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/887b9005-11be-45bf-a383-51381b2bcf84"
                }}
                style={styles.ImageBackground_8_1027}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/f765f0b9-5e0f-4b62-865f-1e5623d2df6d"
                }}
                style={styles.ImageBackground_8_1028}
              />
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/018344f7-d8ed-4cac-aa1a-fb7cbb0cfd49"
              }}
              style={styles.ImageBackground_8_1030}
            />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/75a72f24-2fee-40c1-9d34-a61bdd1d5f02"
              }}
              style={styles.ImageBackground_8_1039}
            />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/8f288152-0327-4fd1-8ee1-3ecc1a80b9be"
              }}
              style={styles.ImageBackground_8_1043}
            />
            <View style={styles.View_8_1049}>
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/f437779e-d803-4ec9-a062-1b5b4953fd13"
                }}
                style={styles.ImageBackground_8_1050}
              />
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/2a983ed1-6248-4c7c-aba7-8ed4b43f92e1"
              }}
              style={styles.ImageBackground_8_1421}
            />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/e6ea8415-9950-4557-bc11-5e457b6d7e3a"
              }}
              style={styles.ImageBackground_8_1440}
            />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/19d0f37e-fccb-4051-b030-941bdb9c452d"
              }}
              style={styles.ImageBackground_8_1447}
            />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/57fe545f-00b9-4e62-8d2f-c4a7da1a3518"
              }}
              style={styles.ImageBackground_8_1448}
            />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/a27e8079-4637-4501-bdc9-aeedcb707d6e"
              }}
              style={styles.ImageBackground_8_1449}
            />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/de59bf6d-aaec-40cd-8a62-0ef8237979b5"
              }}
              style={styles.ImageBackground_8_1450}
            />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/a31bb9c2-9e4a-4e63-acec-1b0b66d94466"
              }}
              style={styles.ImageBackground_8_1451}
            />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/7f74aaaa-bc45-4271-846a-380f81f1456f"
              }}
              style={styles.ImageBackground_8_1452}
            />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/6b19d469-efb6-4a8d-bead-23641b554598"
              }}
              style={styles.ImageBackground_8_1453}
            />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/b54190f8-aad3-4836-b316-9dba8320c1fd"
              }}
              style={styles.ImageBackground_8_1466}
            />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/a669ca20-9a07-4de1-8ffa-2e6cc0e06ba4"
              }}
              style={styles.ImageBackground_8_1469}
            />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/8abf7345-0f05-4015-bdda-af8f3e5504af"
              }}
              style={styles.ImageBackground_8_1470}
            />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/8cf3d4d3-8f30-41db-92bf-cb6e73205104"
              }}
              style={styles.ImageBackground_8_1472}
            />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/0bcbd222-2469-4b32-867a-5894a35db542"
              }}
              style={styles.ImageBackground_8_1473}
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
  View_8_1012: {
    width: wp("100%"),
    height: hp("127%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_8_1013: {
    width: wp("100%"),
    height: hp("127%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_8_1015: {
    width: wp("100%"),
    height: hp("127%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_8_1016: {
    width: wp("100%"),
    height: hp("127%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_8_1017: {
    width: wp("100%"),
    height: hp("127%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_8_1018: {
    width: wp("100%"),
    height: hp("47%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_8_1019: {
    width: wp("100%"),
    height: hp("47%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_8_1020: {
    width: wp("100%"),
    height: hp("47%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_8_1022: {
    width: wp("100%"),
    height: hp("47%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_8_1023: {
    width: wp("120%"),
    height: hp("47%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_8_1024: {
    width: wp("120%"),
    height: hp("47%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_8_1025: {
    width: wp("100%"),
    height: hp("127%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_8_1026: {
    width: wp("100%"),
    height: hp("88%"),
    top: hp("39%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_8_1027: {
    width: wp("100%"),
    height: hp("88%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_8_1028: {
    width: wp("15%"),
    height: hp("0%"),
    top: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("43%")
  },
  ImageBackground_8_1030: {
    width: wp("31%"),
    height: hp("4%"),
    top: hp("53%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%")
  },
  ImageBackground_8_1039: {
    width: wp("5%"),
    height: hp("2%"),
    top: hp("52%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("87%")
  },
  ImageBackground_8_1043: {
    width: wp("12%"),
    height: hp("2%"),
    top: hp("63%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("44%")
  },
  View_8_1049: {
    width: wp("91%"),
    height: hp("43%"),
    top: hp("68%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%")
  },
  ImageBackground_8_1050: {
    width: wp("91%"),
    height: hp("43%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_8_1421: {
    width: wp("42%"),
    height: hp("2%"),
    top: hp("57%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%")
  },
  ImageBackground_8_1440: {
    width: wp("8%"),
    height: hp("2%"),
    top: hp("57%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("85%")
  },
  ImageBackground_8_1447: {
    width: wp("3%"),
    height: hp("2%"),
    top: hp("55%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("75%")
  },
  ImageBackground_8_1448: {
    width: wp("3%"),
    height: hp("2%"),
    top: hp("55%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("79%")
  },
  ImageBackground_8_1449: {
    width: wp("3%"),
    height: hp("2%"),
    top: hp("55%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("82%")
  },
  ImageBackground_8_1450: {
    width: wp("3%"),
    height: hp("2%"),
    top: hp("55%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("86%")
  },
  ImageBackground_8_1451: {
    width: wp("3%"),
    height: hp("2%"),
    top: hp("55%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("90%")
  },
  ImageBackground_8_1452: {
    width: wp("69%"),
    height: hp("8%"),
    top: hp("115%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16%")
  },
  ImageBackground_8_1453: {
    width: wp("30%"),
    height: hp("2%"),
    top: hp("118%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("35%")
  },
  ImageBackground_8_1466: {
    width: wp("79%"),
    height: hp("1%"),
    top: hp("64%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10%")
  },
  ImageBackground_8_1469: {
    width: wp("9%"),
    height: hp("5%"),
    top: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%")
  },
  ImageBackground_8_1470: {
    width: wp("3%"),
    height: hp("3%"),
    top: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11%")
  },
  ImageBackground_8_1472: {
    width: wp("9%"),
    height: hp("5%"),
    top: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("83%")
  },
  ImageBackground_8_1473: {
    width: wp("6%"),
    height: hp("3%"),
    top: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("85%")
  }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
