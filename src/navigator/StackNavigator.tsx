import { createStackNavigator } from '@react-navigation/stack';
import { LoginScreen } from '../screen/LoginScreen';
import { PRIMARY_COLOR } from '../commons/commons';
import { RegistreScreen } from '../screen/RegistreScreen';
import { useState } from 'react';
import { HomeScreen } from '../screen/HomeScreen/HomeScreen';
import InicioScreen from '../screen/InicioScreen';


export interface User{
  id: number;
  email: string;
  password: string;
}

const Stack = createStackNavigator(); 


export const StackNavigator = () => {
  const users : User[] = [
    {id: 1,email:'cristians@gmail.com', password:'12345'},
    {id: 2,email:'carloss@gmail.com', password:'123456'},

 ];
 //hookuseState: gestionar la lista de usuarios - iniciar y registrar
 const[lisUsers,setListUsers] = useState(users);
 //funcion actulizar la data del arreglo
 const handleAddUser = (user: User) => {
  setListUsers([...lisUsers,user]);
 }
  return (
    <Stack.Navigator
    screenOptions={{
        cardStyle:{
            backgroundColor:PRIMARY_COLOR 
        }
    }}>
       <Stack.Screen name="Inicio" options={{ headerShown: false }} component={InicioScreen} />
      <Stack.Screen 
      name="Login" options={{headerShown: false}} 
      children={()=><LoginScreen users={lisUsers}/>} />
      <Stack.Screen 
      name="Register" options={{headerShown: false}} 
      children={() => <RegistreScreen users={lisUsers} handleAddUser={handleAddUser}/>} />
      <Stack.Screen
      name='Home'
      options={{headerShown: false}}
      component={HomeScreen}/>
    </Stack.Navigator>
  );
}