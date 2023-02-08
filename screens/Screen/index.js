import React from "react";
import { StyleSheet, ScrollView, SafeAreaView } from "react-native";

const Screen = () => {
  return <SafeAreaView style={styles.safeArea}>
        <ScrollView contentContainerStyle={{
      backgroundColor: "#f0f0f1",
      padding: 10,
      position: "relative"
    }} style={styles.cuCQscDA}></ScrollView>
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  safeArea: {
    height: '100%'
  },
  cuCQscDA: {
    borderRadius: 0
  }
});
export default Screen;