import React from 'react';
import { TouchableOpacity, Text } from 'react-native';

export default function Button({ title, onPress, variant = 'primary', className = '' }) {
  const baseClasses = 'px-6 py-3 rounded-lg items-center justify-center';
  const variantClasses = {
    primary: 'bg-blue-500',
    secondary: 'bg-gray-500',
    danger: 'bg-red-500',
  };
  
  return (
    <TouchableOpacity 
      className={`${baseClasses} ${variantClasses[variant]} ${className}`}
      onPress={onPress}
    >
      <Text className="text-white font-semibold">{title}</Text>
    </TouchableOpacity>
  );
}