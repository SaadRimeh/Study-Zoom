import useSocialAuth from "@/hooks/useSocialAuth";
import { View } from "react-native";
const AuthScreen = () => {
  const { handleSocialAuth, loadingStrategy } = useSocialAuth();
  const isLoading = loadingStrategy !== null;
  return (
    <View className="flex-1 bg-background">
      <View></View>
    </View>
  );
};

export default AuthScreen;
