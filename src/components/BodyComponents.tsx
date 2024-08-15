import React from 'react'
import { View, Text, useWindowDimensions} from 'react-native'
import { styles } from '../Theme/appTheme'

export const BodyComponents = (props: any) => {
    //console.log(props);
    //hook useWindowDimensions: tamaño de la pantalla
    const {height} = useWindowDimensions();
  return (
    <View style={{
        ...styles.contenBody,
        height: height*0.88
        }}>
            {props.children}
    </View>
    
  )
}
