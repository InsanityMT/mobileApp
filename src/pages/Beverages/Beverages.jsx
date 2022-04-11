import React from 'react'
import { View, Text, Image } from 'react-native'

import { gStyles } from '../styles'
import { BeveragesData } from './../../constants/foods/BeveragesData'
import { Item } from './../../components/Item'
import { Header } from './../../components/Header'

export const Beverages = () => {
  return (
    <>
    <Header />
    <View style={gStyles.FoodsPageContainer}>
      {BeveragesData.map((item, idx) => 
        <Item key={item.name} item={item}/>
      )}
    </View>
    </>
  )
}
