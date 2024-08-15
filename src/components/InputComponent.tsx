// InputComponent.js
import React from 'react';
import { TextInput, View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; // Asegúrate de instalar este paquete si usas iconos

interface InputComponentProps {
  placeholder: string;
  handleSetValues: (name: string, value: string) => void;
  name: string;
  isPassword?: boolean;
  hasIcon?: boolean;
  setHiddenPassword?: () => void;
}

export const InputComponent: React.FC<InputComponentProps> = ({
  placeholder,
  handleSetValues,
  name,
  isPassword,
  hasIcon,
  setHiddenPassword
}) => {
  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        secureTextEntry={isPassword}
        onChangeText={(text) => handleSetValues(name, text)}
      />
      {hasIcon && (
        <TouchableOpacity onPress={setHiddenPassword} style={styles.icon}>
          <Ionicons name={isPassword ? "eye-off" : "eye"} size={24} color="gray" />
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    marginBottom: 20,
  },
  input: {
    flex: 1,
    padding: 10,
    fontSize: 16,
  },
  icon: {
    padding: 10,
  },
});
