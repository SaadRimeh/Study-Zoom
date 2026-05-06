import { useSSO } from "@clerk/clerk-expo";
import { useState } from "react";
import { Alert } from "react-native";
const useSocialAuth = () => {
  const [loadingStrategy, setLoadingStrategy] = useState<string | null>(null);
  const { startSSOFlow } = useSSO();

  const handleSocialAuth = async (
    strategy: "oauth_google" | "oauth_apple" | "oauth_github",
  ) => {
    if (loadingStrategy) return; // Prevent multiple clicks
    setLoadingStrategy(strategy);
    try {
      const { createdSessionId, setActive } = await startSSOFlow({ strategy });

      if (!createdSessionId || !setActive) {
        const provider =
          strategy === "oauth_google"
            ? "Google"
            : strategy === "oauth_apple"
              ? "Apple"
              : "GitHub";
        Alert.alert(
          "Authentication Failed",
          `Unable to authenticate with ${provider}. Please try again.`,
        );
        return;
      }
      await setActive({ session: createdSessionId });
    } catch (error) {
      console.log("Error in social auth :", error);
      const provider =
        strategy === "oauth_google"
          ? "Google"
          : strategy === "oauth_apple"
            ? "Apple"
            : "GitHub";
      Alert.alert(
        "Authentication Error",
        `An error occurred while authenticating with ${provider}. Please try again.`,
      );
    } finally {
      setLoadingStrategy(null);
    }
  };

  return { handleSocialAuth, loadingStrategy };
};

export default useSocialAuth;
