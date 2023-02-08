import { Pressable } from "react-native";
import { ImageBackground } from "react-native";
import React from "react";
import { View, StyleSheet, ScrollView, SafeAreaView } from "react-native";

const Untitled8 = ({
  navigation
}) => {
  return <SafeAreaView style={styles.safeArea}>
        <ScrollView contentContainerStyle={{
      backgroundColor: '#f0f0f1',
      padding: 10,
      position: 'relative',
      flex: 1
    }}><ImageBackground style={styles.aiCFogiH} source={require("./Ekran Resmi 2023-02-07 21.12.19.png")} resizeMode="cover"><Pressable onPress={() => navigation.navigation.navigate("undefined", {})}><View style={styles.WfBvoYSq}></View></Pressable></ImageBackground></ScrollView>
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  safeArea: {
    height: '100%'
  },
  KtvGyiVj: {
    height: 166,
    width: 251,
    backgroundColor: "#E4E4E4",
    borderRadius: 0,
    color: "#777777"
  },
  zHjmtpNe: {
    height: 122,
    width: 180,
    backgroundColor: "#E4E4E4",
    borderRadius: 0,
    color: "#777777"
  },
  aiCFogiH: {
    width: 340,
    height: 583,
    position: "absolute",
    top: 0,
    left: 0
  },
  WfBvoYSq: {
    height: 310,
    width: 144,
    backgroundColor: "#E4E4E4",
    borderRadius: 0,
    color: "#777777",
    position: "absolute",
    left: 18,
    top: 88,
    opacity: 0
  }
});
export default Untitled8;