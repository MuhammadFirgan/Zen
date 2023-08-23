import { View, Text, Image, StyleSheet, TextInput, ScrollView, TouchableOpacity } from 'react-native'
import { useState } from 'react'
import Icon from 'react-native-vector-icons/Feather'

import useFetch from '../../hook/useFetch'
import { FONTS, COLORS } from '../../styles'

const Menu = ({ navigation }) => {
  
  const [ isFocused, setIsFocused ] = useState(false)
  
  const handleFocus = () => {
    setIsFocused(true)
  }
  
  const handleBlur = () => {
    setIsFocused(false)
  }
  
  const { items } = useFetch('https://fakestoreapi.com/products/categories')
  
  return (
    <View>
      <View style={styles.wrapper}>
        { isFocused ? null : (
          <Icon name="search" size={23}  color={COLORS.secondary} style={styles.searchIcon}/>
        )}
        <TextInput style={styles.searchInput} onFocus={handleFocus} onBlur={handleBlur} />
        <View style={styles.profileCartWrapper}>
        <TouchableOpacity>
          <Icon name="shopping-cart" size={23}  color={COLORS.secondary}/>
          <View style={styles.notif}></View>
        </TouchableOpacity>
        <TouchableOpacity>
          <Icon name="bell" size={23}  color={COLORS.secondary}/>
        </TouchableOpacity>
        <TouchableOpacity>
          <Icon name="mail" size={23}  color={COLORS.secondary}/>
        </TouchableOpacity>
          
          <View style={styles.line}></View>
          <Image source={require('../../assets/images/profile.jpg')} style={styles.photoProfile} />
        </View>
      </View>
      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.categoryWrap}>
        {items.map((item, i) => (
          <TouchableOpacity style={styles.box} key={i}>
            <Text style={styles.name}>{item}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 15,
    paddingBottom: 20,
    alignItems: 'center',
    borderBottomWidth: 1,
    borderColor: COLORS.tertiary
  },
  profileCartWrapper: {
    flexDirection: 'row',
    gap: 13,
    alignItems: 'center'
  },
  searchInput: {
    borderWidth: 1,
    borderRadius: 30,
    borderColor: COLORS.tertiary,
    paddingVertical: 3,
    paddingHorizontal: 13,
    width: 200,
    position: 'relative',
    fontFamily: FONTS.regular
  },
  searchIcon: {
    position: 'absolute',
    left: 8,
    bottom: '67%'
  },
  photoProfile: {
    width: 35,
    height: 35,
    borderRadius: 35,
  },
  line: {
    borderLeftWidth: 1,
    borderColor: COLORS.tertiary,
    height: 35
  },
  notif: {
    position: 'absolute',
    top: 0,
    right: -3,
    width: 10,
    height: 10,
    borderRadius: 10,
    backgroundColor: COLORS.primary
  },
  categoryWrap: {
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderColor: COLORS.tertiary
  },
  box: {
    paddingVertical: 6,
    paddingHorizontal: 10,
    backgroundColor: COLORS.tertiary,
    marginHorizontal: 10,
    borderRadius: 15
  },
  name: {
    fontFamily: FONTS.regular,
    color: COLORS.secondary
  }
})

export default Menu