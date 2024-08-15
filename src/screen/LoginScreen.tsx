import React, { useState } from 'react'
import { View, Text, Alert, TouchableOpacity,} from 'react-native'
import { TitleComponent } from '../components/TitleComponent'
import { BodyComponents } from '../components/BodyComponents'
import { PRIMARY_COLOR } from '../commons/commons'
import { StatusBar } from 'react-native'
import { styles } from '../Theme/appTheme'
import { InputComponent } from '../components/InputComponent'
import { ButtonComponent } from '../components/ButtonComponent'
import { CommonActions, useNavigation } from '@react-navigation/native'
import { User } from '../navigator/StackNavigator'


//interface - Props
interface Props{
   users: User[]
}


//
interface FormLogin{
   email: string;
   password: string;
}
//interface de arreglo de objetos


export const LoginScreen = ({users}:Props) => {
   //arreglo con los usuario
   //hook manipular el estado
   const [formlogin, setFormLogin] = useState<FormLogin>({
      email: '',
      password: ''
   });
   //permitir que se aga visible
   const [hiddenPassword, setHiddenPassword] = useState<boolean>(true);

   //hook useNavigation
   const navigation = useNavigation();

   //funcion formulario
   const handleSetValues =(name: string, value:string) => {
      //cambiar el estado del formling
      //...operador de propagacion | spread: crear una copia del objeto
      setFormLogin({...formlogin, [name]: value});
   }
   //Funcion para iniciar sesion
   const handleSignIn = () => {
      //validando que los caompos esten llenos 
      if (!formlogin.email || !formlogin.password){
         Alert.alert(
            'Error',
            'Porfavor ingrese valores en todos los compos!'
         );
         return;
      }
      //validando que el usuario exista
      if(!verifyUser()){
         Alert.alert(
            'Error',
            'Correo y/o contraseña incorrecta'
         );
      }
      //console.log(formlogin);
      //si inicio sesion sin problema
      navigation.dispatch(CommonActions.navigate({name: 'Home'})); 
      }
    //Funcion verfificar si existe el correo y contraseña (usuario)
    const verifyUser = (): User => {
      const existUser = users.filter(user =>user.email === formlogin.email && user.password === formlogin.password)[0];
      return existUser;
     
         
    }

  return (
    <View>
        <StatusBar backgroundColor={PRIMARY_COLOR}/>
        <TitleComponent title='Iniciar Sesion'/>
        <BodyComponents>
            <View>
               <Text style={styles.titleHederBody}>Bienvenido de nuevo</Text>
               <Text style={styles.textBody}> Realiza tus compras de manera rapida y segura</Text>
            </View>
            <View style={styles.contentInput}>
               <InputComponent 
               placeholder= 'Correo' 
               handleSetValues={handleSetValues} 
               name='email'/>
               <InputComponent 
               placeholder= 'Contraseña' 
               handleSetValues={handleSetValues} 
               name='password'
               isPassword={hiddenPassword}
               hasIcon={true}
               setHiddenPassword={()=>setHiddenPassword(!hiddenPassword)}/>
               
            </View>
            <ButtonComponent textButton='Iniciar' onPress={handleSignIn}/>
            <TouchableOpacity
            onPress={()=>navigation.dispatch(CommonActions.navigate({name:'Register'}))}>
               <Text style={styles.textRedirection}>No tienes una cuenta? Registrate ahora</Text>
            </TouchableOpacity>
        </BodyComponents>
        </View>
    
  )
}
