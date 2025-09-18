import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Button } from '../src/components';

export default function TestScreen() {
  const handlePress = () => {
    console.log('Button pressed!');
  };

  return (
    <SafeAreaView className="flex-1 bg-gray-50">
      <ScrollView className="flex-1 px-4">
        <View className="py-8">
          <Text className="text-3xl font-bold text-center mb-8 text-gray-800">
            NativeWind Test
          </Text>
          
          <View className="space-y-4">
            <Button 
              title="Primary Button" 
              onPress={handlePress}
              variant="primary"
            />
            
            <Button 
              title="Secondary Button" 
              onPress={handlePress}
              variant="secondary"
            />
            
            <Button 
              title="Danger Button" 
              onPress={handlePress}
              variant="danger"
            />
          </View>
          
          <View className="mt-8 p-4 bg-white rounded-lg shadow-sm">
            <Text className="text-lg font-semibold mb-2">Card Example</Text>
            <Text className="text-gray-600">
              This is a card component styled with NativeWind classes.
            </Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}