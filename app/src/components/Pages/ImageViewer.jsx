// ImageViewer.tsx
import { useState } from "react";
import { ActivityIndicator, Dimensions, View } from "react-native";
import { Gesture, GestureDetector } from "react-native-gesture-handler";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";

const { width, height } = Dimensions.get("window");

export default function ImageViewer({ uri }) {
  const [loading, setLoading] = useState(true);

  // shared values for zoom + pan
  const scale = useSharedValue(1);
  const savedScale = useSharedValue(1);
  const translateX = useSharedValue(0);
  const translateY = useSharedValue(0);

  // pinch zoom
  const pinchGesture = Gesture.Pinch()
    .onUpdate((e) => {
      scale.value = savedScale.value * e.scale;
    })
    .onEnd(() => {
      savedScale.value = scale.value;
    });

  // pan gesture
  const panGesture = Gesture.Pan().onUpdate((e) => {
    translateX.value += e.changeX;
    translateY.value += e.changeY;
  });

  // double tap zoom
  const doubleTapGesture = Gesture.Tap()
    .numberOfTaps(2)
    .onEnd(() => {
      scale.value = withTiming(scale.value > 1 ? 1 : 2, { duration: 250 });
      savedScale.value = scale.value > 1 ? 1 : 2;
    });

  const composed = Gesture.Simultaneous(
    doubleTapGesture,
    pinchGesture,
    panGesture
  );

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [
      { scale: scale.value },
      { translateX: translateX.value },
      { translateY: translateY.value },
    ],
  }));

  return (
    <GestureDetector gesture={composed}>
      <View className="flex-1 bg-black justify-center items-center">
        {loading && <ActivityIndicator size="large" color="white" />}
        <Animated.Image
          source={{ uri }}
          resizeMode="contain"
          style={[{ width, height, opacity: loading ? 0 : 1 }, animatedStyle]}
          onLoadEnd={() => setLoading(false)}
        />
      </View>
    </GestureDetector>
  );
}
