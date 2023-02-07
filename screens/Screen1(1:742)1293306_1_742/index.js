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
      <View style={styles.View_1_743}>
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/de9b3790-644d-4862-a649-e04ae91ce631"
          }}
          style={styles.ImageBackground_1_744}
        />
        <View style={styles.View_1_746}>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/cf4ca8a0-bf24-4ac6-9f41-3fac1df5a975"
            }}
            style={styles.ImageBackground_1_747}
          />
          <View style={styles.View_1_748}>
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/f681b4ec-ad9e-4603-9855-957f4f96c739"
              }}
              style={styles.ImageBackground_1_749}
            />
            <View style={styles.View_1_750}>
              <View style={styles.View_1_751}>
                <ImageBackground
                  source={{
                    uri:
                      "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/1a26306a-5ab5-45bd-8758-cf986adb76ed"
                  }}
                  style={styles.ImageBackground_1_752}
                />
                <View style={styles.View_1_754}>
                  <View source={{ uri: "null" }} style={styles.View_1_755} />
                </View>
              </View>
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/3d7f65df-b618-4c88-9495-626bd0231cca"
              }}
              style={styles.ImageBackground_1_757}
            />
            <View style={styles.View_1_758}>
              <View style={styles.View_1_759}>
                <ImageBackground
                  source={{
                    uri:
                      "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/29b3fd0e-e444-438d-ad05-f4574ca97af6"
                  }}
                  style={styles.ImageBackground_1_760}
                />
                <View style={styles.View_1_762}>
                  <View style={styles.View_1_763}>
                    <ImageBackground
                      source={{
                        uri:
                          "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/01b7db58-2ce7-4f75-af3d-6c8bb85c5629"
                      }}
                      style={styles.ImageBackground_1_764}
                    />
                  </View>
                </View>
              </View>
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/a0ee72c5-d417-43ae-95cb-ca8b23e3067a"
              }}
              style={styles.ImageBackground_1_765}
            />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/dd22e532-f41e-4b1c-b0d7-7e86d59e7905"
              }}
              style={styles.ImageBackground_1_796}
            />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/e1ea1d61-26a4-43d3-b4e8-7c6edbfb752e"
              }}
              style={styles.ImageBackground_1_797}
            />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/67611f61-fa6e-4b4a-b39c-1b40103d623b"
              }}
              style={styles.ImageBackground_1_798}
            />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/d983934e-6c8d-4ad8-b8cb-dc4007477758"
              }}
              style={styles.ImageBackground_1_810}
            />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/0a45c47d-4b3a-4274-8c0d-00c3a06fab21"
              }}
              style={styles.ImageBackground_1_822}
            />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/38d7ddf5-f0a8-4308-bd19-22ef807a9db8"
              }}
              style={styles.ImageBackground_1_833}
            />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/fe7e2fe2-355e-4c92-a0c7-94d38e26b0b2"
              }}
              style={styles.ImageBackground_1_916}
            />
            <View style={styles.View_1_934}>
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/1be8b122-206d-4b27-9f3e-ef1660cd6885"
                }}
                style={styles.ImageBackground_1_935}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/c7a29f47-683f-4bb4-aa57-4045b6132d55"
                }}
                style={styles.ImageBackground_1_936}
              />
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/304e8ae4-3515-4b50-a285-680c0e335f17"
              }}
              style={styles.ImageBackground_1_946}
            />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/ccd63e39-d38b-49b3-aaf7-d5d76d8cc4c0"
              }}
              style={styles.ImageBackground_1_947}
            />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/c48636a4-79e4-4f25-90d0-782fb882f987"
              }}
              style={styles.ImageBackground_1_956}
            />
            <View style={styles.View_1_975}>
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/472ee1c8-9f72-4f88-ac79-e19012893981"
                }}
                style={styles.ImageBackground_1_976}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/4890d36e-4ce1-4bd9-8dd4-70fe15402ad0"
                }}
                style={styles.ImageBackground_1_977}
              />
            </View>
            <View style={styles.View_1_987}>
              <View style={styles.View_1_988}>
                <ImageBackground
                  source={{
                    uri:
                      "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/8517e651-b881-4ce2-aeb0-b4f4cdbe6157"
                  }}
                  style={styles.ImageBackground_1_989}
                />
                <View style={styles.View_1_991}>
                  <View style={styles.View_1_992}>
                    <ImageBackground
                      source={{
                        uri:
                          "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/d7985dff-8dd6-4f46-95b2-2ef2fc961823"
                      }}
                      style={styles.ImageBackground_1_993}
                    />
                  </View>
                </View>
              </View>
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/5b8f34db-45e7-4b91-995a-29416a7615a3"
              }}
              style={styles.ImageBackground_1_994}
            />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/e4e82e4b-97d5-40e5-8b23-a4aa84321eb1"
              }}
              style={styles.ImageBackground_1_995}
            />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/a56a02ed-b7cf-4cc4-bcc0-9ed7f85be0b6"
              }}
              style={styles.ImageBackground_1_996}
            />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/0aec4c5a-623f-4c98-916b-8f8f1070ccd6"
              }}
              style={styles.ImageBackground_1_997}
            />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/049d5bb7-e33b-4f42-9e96-976caed48e36"
              }}
              style={styles.ImageBackground_1_1007}
            />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/bbe8c61a-80eb-40a0-9733-ac3926613e9b"
              }}
              style={styles.ImageBackground_1_1087}
            />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/c55ab5d0-5008-41a6-91e4-8f557acbc6fd"
              }}
              style={styles.ImageBackground_1_1088}
            />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/c48a3856-f5ac-4351-83c1-42b3fc509f19"
              }}
              style={styles.ImageBackground_1_1092}
            />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/bf614797-6fdf-4f7f-b07c-138a16441bce"
              }}
              style={styles.ImageBackground_1_1094}
            />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/c465e170-3e28-468f-ac9f-b65568eb369d"
              }}
              style={styles.ImageBackground_1_1096}
            />
            <View style={styles.View_1_1097}>
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/d6d943f5-a83f-4117-bfc4-c9701f315715"
                }}
                style={styles.ImageBackground_1_1098}
              />
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/79f5e3a7-29b2-449a-aed1-74fc8cef50b9"
              }}
              style={styles.ImageBackground_1_1101}
            />
            <View style={styles.View_1_1102}>
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/1c6c2b9a-69ef-41da-84f1-71455e9686bc"
                }}
                style={styles.ImageBackground_1_1103}
              />
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/0a3376be-88bc-4ee4-bc91-d3e4f53a71c0"
              }}
              style={styles.ImageBackground_1_1107}
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
  View_1_743: {
    width: wp("100%"),
    height: hp("127%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_1_744: {
    width: wp("100%"),
    height: hp("127%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1_746: {
    width: wp("100%"),
    height: hp("127%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_1_747: {
    width: wp("100%"),
    height: hp("127%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1_748: {
    width: wp("100%"),
    height: hp("127%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_1_749: {
    width: wp("100%"),
    height: hp("127%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1_750: {
    width: wp("42%"),
    height: hp("43%"),
    top: hp("29%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("52%")
  },
  View_1_751: {
    width: wp("42%"),
    height: hp("43%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_1_752: {
    width: wp("42%"),
    height: hp("43%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1_754: {
    width: wp("42%"),
    height: hp("43%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1_755: {
    width: wp("53%"),
    height: hp("46%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_1_757: {
    width: wp("42%"),
    height: hp("43%"),
    top: hp("29%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("53%")
  },
  View_1_758: {
    width: wp("42%"),
    height: hp("43%"),
    top: hp("29%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%")
  },
  View_1_759: {
    width: wp("42%"),
    height: hp("43%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_1_760: {
    width: wp("42%"),
    height: hp("43%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1_762: {
    width: wp("42%"),
    height: hp("43%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1_763: {
    width: wp("111%"),
    height: hp("43%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_1_764: {
    width: wp("111%"),
    height: hp("43%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_1_765: {
    width: wp("62%"),
    height: hp("10%"),
    top: hp("15%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("20%")
  },
  ImageBackground_1_796: {
    width: wp("42%"),
    height: hp("43%"),
    top: hp("29%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%")
  },
  ImageBackground_1_797: {
    width: wp("42%"),
    height: hp("28%"),
    top: hp("54%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%")
  },
  ImageBackground_1_798: {
    width: wp("27%"),
    height: hp("2%"),
    top: hp("76%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13%")
  },
  ImageBackground_1_810: {
    width: wp("29%"),
    height: hp("2%"),
    top: hp("88%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%")
  },
  ImageBackground_1_822: {
    width: wp("20%"),
    height: hp("2%"),
    top: hp("93%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("26%")
  },
  ImageBackground_1_833: {
    width: wp("59%"),
    height: hp("3%"),
    top: hp("96%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("26%")
  },
  ImageBackground_1_916: {
    width: wp("19%"),
    height: hp("1%"),
    top: hp("74%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17%")
  },
  View_1_934: {
    width: wp("10%"),
    height: hp("2%"),
    top: hp("79%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("21%")
  },
  ImageBackground_1_935: {
    width: wp("10%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_1_936: {
    width: wp("8%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  ImageBackground_1_946: {
    width: wp("42%"),
    height: hp("28%"),
    top: hp("54%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("53%")
  },
  ImageBackground_1_947: {
    width: wp("20%"),
    height: hp("2%"),
    top: hp("76%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("64%")
  },
  ImageBackground_1_956: {
    width: wp("20%"),
    height: hp("1%"),
    top: hp("74%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("64%")
  },
  View_1_975: {
    width: wp("10%"),
    height: hp("2%"),
    top: hp("79%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("69%")
  },
  ImageBackground_1_976: {
    width: wp("10%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_1_977: {
    width: wp("8%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  View_1_987: {
    width: wp("10%"),
    height: hp("6%"),
    top: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%")
  },
  View_1_988: {
    width: wp("10%"),
    height: hp("6%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_1_989: {
    width: wp("10%"),
    height: hp("6%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1_991: {
    width: wp("10%"),
    height: hp("6%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1_992: {
    width: wp("11%"),
    height: hp("6%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_1_993: {
    width: wp("11%"),
    height: hp("6%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_1_994: {
    width: wp("10%"),
    height: hp("6%"),
    top: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("84%")
  },
  ImageBackground_1_995: {
    width: wp("5%"),
    height: hp("3%"),
    top: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("86%")
  },
  ImageBackground_1_996: {
    width: wp("15%"),
    height: hp("9%"),
    top: hp("92%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%")
  },
  ImageBackground_1_997: {
    width: wp("16%"),
    height: hp("2%"),
    top: hp("104%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("26%")
  },
  ImageBackground_1_1007: {
    width: wp("63%"),
    height: hp("3%"),
    top: hp("107%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("26%")
  },
  ImageBackground_1_1087: {
    width: wp("15%"),
    height: hp("9%"),
    top: hp("103%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%")
  },
  ImageBackground_1_1088: {
    width: wp("8%"),
    height: hp("6%"),
    top: hp("93%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10%")
  },
  ImageBackground_1_1092: {
    width: wp("9%"),
    height: hp("6%"),
    top: hp("104%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10%")
  },
  ImageBackground_1_1094: {
    width: wp("5%"),
    height: hp("2%"),
    top: hp("106%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12%")
  },
  ImageBackground_1_1096: {
    width: wp("8%"),
    height: hp("4%"),
    top: hp("118%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("57%")
  },
  View_1_1097: {
    width: wp("6%"),
    height: hp("4%"),
    top: hp("118%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("38%")
  },
  ImageBackground_1_1098: {
    width: wp("6%"),
    height: hp("4%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_1_1101: {
    width: wp("7%"),
    height: hp("4%"),
    top: hp("118%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15%")
  },
  View_1_1102: {
    width: wp("7%"),
    height: hp("4%"),
    top: hp("118%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("78%")
  },
  ImageBackground_1_1103: {
    width: wp("7%"),
    height: hp("4%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_1_1107: {
    width: wp("83%"),
    height: hp("8%"),
    top: hp("116%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%")
  }
})

const mapStateToProps = state => {
  return {}
}

const mapDispatchToProps = () => {
  return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(Blank)
