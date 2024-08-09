import React from 'react'
import { Text, Button } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler'
import { styles } from './navigator/screens/theme/appTheme';




const ButtonComponet = () => {
  return (
   <TouchableOpacity style={styles.buttonD}>
   

    <Text>mayor o igual a</Text>
    
   </TouchableOpacity>
  )
}

export default ButtonComponet
