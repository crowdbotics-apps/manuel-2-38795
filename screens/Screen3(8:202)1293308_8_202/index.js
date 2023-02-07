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
      <View style={styles.View_8_203}>
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/30aff51a-4fd5-4953-ad53-d570fc329f84"
          }}
          style={styles.ImageBackground_8_204}
        />
        <View style={styles.View_8_206}>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/0e758a18-f700-44e9-baa5-0d6de1379d5d"
            }}
            style={styles.ImageBackground_8_207}
          />
          <View style={styles.View_8_208}>
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/9d256f09-81f5-4c39-bf3f-387adda98578"
              }}
              style={styles.ImageBackground_8_209}
            />
            <View style={styles.View_8_210}>
              <View style={styles.View_8_211}>
                <ImageBackground
                  source={{
                    uri:
                      "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/23706a0c-2f11-4a7f-8af5-ec82d3a215b2"
                  }}
                  style={styles.ImageBackground_8_212}
                />
                <View style={styles.View_8_214}>
                  <View style={styles.View_8_215}>
                    <ImageBackground
                      source={{
                        uri:
                          "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/c6f5c837-a9a8-43f0-ad0e-84b8f1fabf69"
                      }}
                      style={styles.ImageBackground_8_216}
                    />
                  </View>
                </View>
              </View>
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/26fe690d-99be-40bd-96bd-c0ffb878afac"
              }}
              style={styles.ImageBackground_8_217}
            />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/b978b734-ddfb-4e3e-ad54-04f59c2558d3"
              }}
              style={styles.ImageBackground_8_218}
            />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/23db6c54-b50e-413a-9860-86ea00e0c574"
              }}
              style={styles.ImageBackground_8_230}
            />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/eaf3cb1f-501d-494e-aad5-bbb17b0fcde4"
              }}
              style={styles.ImageBackground_8_249}
            />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/c6eb3674-68b3-4635-848e-82a1f7e5880d"
              }}
              style={styles.ImageBackground_8_260}
            />
            <View style={styles.View_8_276}>
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/7fb7a879-73f9-4cbb-a230-00d25373d4ff"
                }}
                style={styles.ImageBackground_8_277}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/d035339c-2bc7-499d-b195-bf3d4470a08c"
                }}
                style={styles.ImageBackground_8_278}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/aaaa35f9-c909-4573-9608-8a7a73d68a48"
                }}
                style={styles.ImageBackground_8_287}
              />
            </View>
            <View style={styles.View_8_290}>
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/af1bf313-504f-4875-b1b6-34d9bf07f0bf"
                }}
                style={styles.ImageBackground_8_291}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/49cfa1d8-5ee0-4725-a052-e29cf856b391"
                }}
                style={styles.ImageBackground_8_292}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/713bb3e0-a7ad-49bb-8b7b-99d3eeaea760"
                }}
                style={styles.ImageBackground_8_303}
              />
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/5df6c1bc-39d8-4cca-86a5-c9f78c627b89"
              }}
              style={styles.ImageBackground_8_304}
            />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/6fb0d2a9-96da-4a10-bc4e-76ff36d6df0d"
              }}
              style={styles.ImageBackground_8_305}
            />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/9fa4c372-3b63-452e-b859-e66c858cc786"
              }}
              style={styles.ImageBackground_8_307}
            />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/0c6b4543-2b31-4543-b165-982916686f77"
              }}
              style={styles.ImageBackground_8_308}
            />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/e936a530-09ea-4f3e-a9b1-98c0abe2a420"
              }}
              style={styles.ImageBackground_8_334}
            />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/3ea7fdbc-3610-4fc2-8955-fa693031f2ab"
              }}
              style={styles.ImageBackground_8_335}
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
  View_8_203: {
    width: wp("100%"),
    height: hp("127%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_8_204: {
    width: wp("100%"),
    height: hp("127%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_8_206: {
    width: wp("100%"),
    height: hp("127%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_8_207: {
    width: wp("100%"),
    height: hp("127%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_8_208: {
    width: wp("100%"),
    height: hp("127%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_8_209: {
    width: wp("100%"),
    height: hp("127%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_8_210: {
    width: wp("100%"),
    height: hp("44%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_8_211: {
    width: wp("100%"),
    height: hp("44%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_8_212: {
    width: wp("100%"),
    height: hp("44%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_8_214: {
    width: wp("100%"),
    height: hp("44%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_8_215: {
    width: wp("114%"),
    height: hp("45%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_8_216: {
    width: wp("114%"),
    height: hp("45%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_8_217: {
    width: wp("100%"),
    height: hp("44%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_8_218: {
    width: wp("69%"),
    height: hp("4%"),
    top: hp("52%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16%")
  },
  ImageBackground_8_230: {
    width: wp("50%"),
    height: hp("2%"),
    top: hp("60%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("25%")
  },
  ImageBackground_8_249: {
    width: wp("20%"),
    height: hp("1%"),
    top: hp("90%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12%")
  },
  ImageBackground_8_260: {
    width: wp("24%"),
    height: hp("2%"),
    top: hp("90%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("68%")
  },
  View_8_276: {
    width: wp("88%"),
    height: hp("8%"),
    top: hp("68%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%")
  },
  ImageBackground_8_277: {
    width: wp("88%"),
    height: hp("8%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_8_278: {
    width: wp("19%"),
    height: hp("2%"),
    top: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12%")
  },
  ImageBackground_8_287: {
    width: wp("3%"),
    height: hp("2%"),
    top: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%")
  },
  View_8_290: {
    width: wp("88%"),
    height: hp("8%"),
    top: hp("78%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%")
  },
  ImageBackground_8_291: {
    width: wp("88%"),
    height: hp("8%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_8_292: {
    width: wp("16%"),
    height: hp("1%"),
    top: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12%")
  },
  ImageBackground_8_303: {
    width: wp("2%"),
    height: hp("2%"),
    top: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%")
  },
  ImageBackground_8_304: {
    width: wp("9%"),
    height: hp("5%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%")
  },
  ImageBackground_8_305: {
    width: wp("3%"),
    height: hp("3%"),
    top: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%")
  },
  ImageBackground_8_307: {
    width: wp("4%"),
    height: hp("2%"),
    top: hp("90%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%")
  },
  ImageBackground_8_308: {
    width: wp("57%"),
    height: hp("2%"),
    top: hp("121%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("21%")
  },
  ImageBackground_8_334: {
    width: wp("87%"),
    height: hp("7%"),
    top: hp("111%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%")
  },
  ImageBackground_8_335: {
    width: wp("13%"),
    height: hp("3%"),
    top: hp("113%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("43%")
  }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
