import React, { useState } from 'react'
import {Image, TouchableOpacity, View} from 'react-native';



const foco = () => {
  
  const[estaus, setEstatus] = useState(false);
  
  return (
    <View>
        
        <TouchableOpacity onPress={() => {setEstatus(!estatus ) } } >

        <Image source={estaus ? require('../../img/focoOn.png') : require('../../img/focoOff.png')}
        style={{ width: 300, height: 300}}
        />

        </TouchableOpacity>   

    </View>

  )
}

export default foco