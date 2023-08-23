import { SafeAreaView, View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native'
import useFetch from '../../hook/useFetch'
import { FONTS, COLORS } from '../../styles'

const Detail = ({ route }) => {
  const { itemId } = route.params
  const { items } = useFetch(`https://fakestoreapi.com/products/${ itemId }`)
  //console.log(items)
  return (
    <SafeAreaView style={styles.container}>
      <Image source={{ uri: items.image }} style={styles.photo} />
      <View style={styles.content}>
        <Text style={styles.name}>{items.title}</Text>
        <Text style={styles.desc}>{items.description}</Text>
      </View>
      <View style={styles.priceWrap}>
        <View>
          <Text>Price</Text>
          <Text style={styles.price}>${items.price}</Text>
        </View>
        <TouchableOpacity style={styles.btn}>
          <Text style={styles.btnTitle}>Checkout</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    paddingHorizontal: 15
  },
  photo: {
    width: '100%',
    height: '50%',
    resizeMode: 'contain'
  },
  content: {
    gap: 10,
    marginTop: 15
  },
  name: {
    fontFamily: FONTS.bold,
    fontSize: 18
  },
  desc: {
    fontFamily: FONTS.regular
  },
  priceWrap: {
    position: 'absolute',
    bottom: 20,
    right: 15,
    left: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 15
  },
  price: {
    fontSize: 22,
    fontFamily: FONTS.bold
  },
  btn: {
   backgroundColor: COLORS.primary,
   paddingHorizontal: 30,
   paddingVertical: 15,
   borderRadius: 20
  },
  btnTitle: {
    color: COLORS.lightWhite,
    fontFamily: FONTS.regular,
    fontSize: 16
  }
})


export default Detail