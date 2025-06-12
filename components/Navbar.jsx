import { Home, Search, ShoppingBag, User } from "lucide-react-native";
import { styled } from "nativewind";
import { useState } from "react";
import { Pressable, Text, View } from "react-native";

const StyledView = styled(View);
const StyledText = styled(Text);
const StyledPressable = styled(Pressable);

const TABS = [
  { name: "Home", icon: Home },
  { name: "Search", icon: Search },
  { name: "Orders", icon: ShoppingBag },
  { name: "Profile", icon: User },
];

export default function BottomNavBar() {
  const [activeTab, setActiveTab] = useState("Home");

  return (
    <StyledView className="flex-row justify-around items-center bg-white border-t border-gray-200 py-2 px-4">
      {TABS.map(({ name, icon: Icon }) => (
        <StyledPressable
          key={name}
          className="items-center"
          onPress={() => setActiveTab(name)}>
          <Icon size={24} color={activeTab === name ? "#FF2B85" : "#A0A0A0"} />
          <StyledText
            className={`text-xs mt-1 ${
              activeTab === name ? "text-pink-600 font-bold" : "text-gray-400"
            }`}>
            {name}
          </StyledText>
        </StyledPressable>
      ))}
    </StyledView>
  );
}
