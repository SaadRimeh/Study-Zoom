import { useAuth } from "@clerk/clerk-expo";
import { Redirect } from "expo-router";
import { StyleSheet, Text, View } from "react-native";

export default function Index() {
  const { isSignedIn, isLoaded } = useAuth();

  if (!isLoaded) {
    return null;
  }

  if (!isSignedIn) {
    return <Redirect href={"/(auth)"} />;
  }

  return (
    <View style={styles.container}>
      <Text className="text-red-500">
        Edit src/app/index.tsx to edit this screen.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
