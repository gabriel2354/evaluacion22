import React from 'react'
import { TextInput } from 'react-native-gesture-handler'


interface Props{
  placeholder: string;
 

  
 

}
const InputComponet = ({placeholder,  }: Props) => {
  return (
    <TextInput
    placeholder={placeholder}
    keyboardType='numeric'
    
    
    
    />
  )
}

export default InputComponet