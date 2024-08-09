import { StackScreenProps } from '@react-navigation/stack';
import React from 'react'
import { Button, Image, Text, View,  ImageBackground } from 'react-native';
import InputComponet from '../../InputComponet';
import ButtonComponet from '../../ButtonComponets';


interface Props extends StackScreenProps<any, any> {

}
const Pantalla4Screens = ({ navigation }: Props) => {


  return (
<View >
    <InputComponet placeholder='ingrese primer dato'/>
    <InputComponet placeholder='ingrese segundo dato'/>
    <InputComponet placeholder='Resultado'/>
<View>
<Button 
        title='<='
        onPress={() => navigation.navigate('<=') }/

</View>

</View>
    
        
 
    
    
  )
}

    
export default Pantalla4Screens