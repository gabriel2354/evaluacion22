import { StackScreenProps } from '@react-navigation/stack';
import React from 'react'
import { Button, Image, Text, View,  ImageBackground } from 'react-native';


interface Props extends StackScreenProps<any, any> {

}
const Pantalla1Screens = ({ navigation }: Props) => {


  return (

    
    <View>
        <Text >BIENVENIDO A SU EVALUACION</Text>
        
        <Button 
        title='imagen 1'
        onPress={() => navigation.navigate('imagen 1') }/>
        <Button 
        title='imagen 2'
        onPress={() => navigation.navigate('imagen 2') }/>
        <Button 
        title='>='
        onPress={() => navigation.navigate('>=') }/>
        <Button 
        title='<='
        onPress={() => navigation.navigate('<=') }/>




    </View>
    
    
  )
}

    
export default Pantalla1Screens
