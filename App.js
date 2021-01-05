import { StatusBar } from "expo-status-bar";
import React from "react";
import { Platform } from "react-native";

import Home from "./src";

export default function App() {
  return (
    <>
      {Platform.OS === "ios" ? (
        <StatusBar style="auto" />
      ) : (
        <StatusBar style="light" backgroundColor="#000" translucent={false} />
      )}
      <Home />
    </>
  );
}
