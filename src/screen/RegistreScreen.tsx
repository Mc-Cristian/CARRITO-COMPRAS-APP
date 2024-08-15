// RegistreScreen.tsx
import React, { useState } from 'react'
import { View, Text, TouchableOpacity, Alert, StatusBar } from 'react-native'
import { TitleComponent } from '../components/TitleComponent';
import { BodyComponents } from '../components/BodyComponents';
import { styles } from '../Theme/appTheme';
import { PRIMARY_COLOR } from '../commons/commons';
import { InputComponent } from '../components/InputComponent';
import { ButtonComponent } from '../components/ButtonComponent';
import { CommonActions, useNavigation } from '@react-navigation/native';
import { User } from '../navigator/StackNavigator';

interface Props {
  users: User[];
  handleAddUser: (user: User) => void;
}

interface FormRegister {
  name: string;
  email: string;
  phone: string;
  password: string;
  confirmPassword: string;
}

export const RegistreScreen = ({ users, handleAddUser }: Props) => {
  const [formRegister, setFormRegister] = useState<FormRegister>({
    name: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: ''
  });

  const [hiddenPassword, setHiddenPassword] = useState<boolean>(true);
  const navigation = useNavigation();

  const handleSetValues = (name: string, value: string) => {
    setFormRegister({ ...formRegister, [name]: value });
  }

  const handleSignUp = () => {
    const { name, email, phone, password, confirmPassword } = formRegister;
  
    if (!name || !email || !phone || !password || !confirmPassword) {
      Alert.alert('Error', 'Por favor, complete todos los campos');
      return;
    }
  
    if (password !== confirmPassword) {
      Alert.alert('Error', 'Las contraseñas no coinciden');
      return;
    }
  
    if (verifyUser() != null) {
      Alert.alert('Error', 'El usuario ya está registrado');
      return;
    }
  
    const getIdUsers = users.map(user => user.id);
    const getNewId = Math.max(...getIdUsers) + 1;
  
    const newUser: User = {
      id: getNewId,
      email,
      password
    }
  
    handleAddUser(newUser);
    Alert.alert('Éxito', 'Registro exitoso!');
    navigation.goBack();
  }
  
  const verifyUser = () => {
    return users.find(user => user.email === formRegister.email);
  }

  return (
    <View>
      <StatusBar backgroundColor={PRIMARY_COLOR} />
      <TitleComponent title='Regístrate' />
      <BodyComponents>
        <Text style={styles.titleHederBody}>¡Estás muy cerca!</Text>
        <Text style={styles.textBody}>Completa los campos para registrarte</Text>
        <View style={styles.contentInput}>
          <InputComponent
            placeholder='Nombre'
            handleSetValues={handleSetValues}
            name='name' />
          <InputComponent
            placeholder='Correo'
            handleSetValues={handleSetValues}
            name='email' />
          <InputComponent
            placeholder='Teléfono'
            handleSetValues={handleSetValues}
            name='phone' />
          <InputComponent
            placeholder='Contraseña'
            handleSetValues={handleSetValues}
            name='password'
            isPassword={hiddenPassword}
            hasIcon={true}
            setHiddenPassword={() => setHiddenPassword(!hiddenPassword)} />
          <InputComponent
            placeholder='Confirmar Contraseña'
            handleSetValues={handleSetValues}
            name='confirmPassword'
            isPassword={hiddenPassword}
            hasIcon={true}
            setHiddenPassword={() => setHiddenPassword(!hiddenPassword)} />
        </View>
        <ButtonComponent textButton='Registrar' onPress={handleSignUp} />
        <TouchableOpacity
          onPress={() => navigation.dispatch(CommonActions.navigate({ name: 'Login' }))}>
          <Text style={styles.textRedirection}>¿Ya tienes una cuenta? Inicia sesión ahora</Text>
        </TouchableOpacity>
      </BodyComponents>
    </View>
  );
}
