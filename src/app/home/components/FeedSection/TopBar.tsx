import CustomButton from "@/src/components/CustomButton";
import ThemedText from "@/src/components/ThemedText";
import ThemedView from "@/src/components/ThemedView";
import { Variant } from "@/src/hooks/usePageVariant";
import { PressableProps } from "react-native";
import styles from "./styles";

type TopBarProps = {
  variant: Variant;
  showHome: () => void;
  showFollowing: () => void;
};

export default function TopBar({
  variant,
  showHome,
  showFollowing,
}: TopBarProps) {
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
    <CustomButton
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
