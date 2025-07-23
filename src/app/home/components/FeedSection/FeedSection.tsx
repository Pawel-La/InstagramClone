import Button from "@/src/components/Button";
import ThemedText from "@/src/components/ThemedText";
import ThemedView from "@/src/components/ThemedView";
import { useState } from "react";
import { PressableProps } from "react-native";
import styles from "./styles";

enum Variant {
  "home",
  "following",
}

function useVariant() {
  const [variant, setVariant] = useState(Variant.home);

  function showHome() {
    setVariant(Variant.home);
  }

  function showFollowing() {
    setVariant(Variant.following);
  }

  return { variant, showHome, showFollowing };
}

export default function FeedSection() {
  const { variant, showHome, showFollowing } = useVariant();

  return (
    <ThemedView style={styles.mainSection}>
      <TopBar
        variant={variant}
        showHome={showHome}
        showFollowing={showFollowing}
      />
      <StoriesBar />
      <Feed />
    </ThemedView>
  );
}

type TopBarProps = {
  variant: Variant;
  showHome: () => void;
  showFollowing: () => void;
};

function TopBar({ variant, showHome, showFollowing }: TopBarProps) {
  return (
    <ThemedView style={styles.topBar}>
      <TopBarButton
        text={"Dla Ciebie"}
        selected={variant === Variant.home}
        onPress={showHome}
      />
      <TopBarButton
        text={"Obserwowani"}
        selected={variant === Variant.following}
        onPress={showFollowing}
      />
    </ThemedView>
  );
}

type TopBarButtonProps = {
  text: string;
  selected: boolean;
  onPress: PressableProps["onPress"];
};

function TopBarButton({ text, selected, onPress }: TopBarButtonProps) {
  return (
    <Button
      onPress={onPress}
      renderContent={() => (
        <ThemedText
          style={[styles.topBarText, { color: selected ? "red" : "gray" }]}
        >
          {text}
        </ThemedText>
      )}
    />
  );
}

function StoriesBar() {
  return (
    <ThemedView style={styles.storiesBar}>
      <ThemedText>1111</ThemedText>
    </ThemedView>
  );
}

function Feed() {
  return (
    <ThemedView style={styles.feedSection}>
      <ThemedText>1111</ThemedText>
    </ThemedView>
  );
}
