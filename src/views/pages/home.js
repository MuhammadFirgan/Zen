import { SafeAreaView, ScrollView, View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native'
import Icon from 'react-native-vector-icons/Feather'
import Menu from '../components/Menu'
import useFetch from '../../hook/useFetch'
import { FONTS,COLORS } from '../../styles'


const Home = ({ navigation }) => {
  
  // const [ items, setItems ] = useState([])
  
  // const fetchData = async () => {
  //   try {
  //     const response = await fetch(url);
  //     const result = await response.json();
  //     setItems(result);
  //   } catch(error) {
  //     console.error('Error fetching data:', error);
  //     return null;
  //   }
  // }
  
  const { items } = useFetch('https://fakestoreapi.com/products')
  
  const trunkateTitle = (title) => {
    const maxLength = 35
    if (title.length > maxLength) {
      return title.substring(0, maxLength) + "...."
    }
    return title
  }
  
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false} >
        <Menu />
        <View style={styles.cardWrapper}>
          {items.map((item, i) => (
            <TouchableOpacity style={styles.box} key={i} onPress={() => navigation.navigate('Detail', { itemId: item.id } )
            }>
              <Image source={{ uri: item.image }} style={styles.productPhoto} />
              <View style={styles.cardContent}>
                <Text style={styles.productPrice}>${item.price}</Text>
                <Text style={styles.productName}>{trunkateTitle(item.title)}</Text>
                <View style={styles.rateWrap}>
                  <Icon name="star" width={26}  />
                  <Text style={styles.rate}>{item.rating.rate}</Text>
                </View>
              </View>
              <View style={styles.buttons}>
                <TouchableOpacity style={styles.addToCartBtn}>
                  <Icon name="shopping-cart" size={20} />
                </TouchableOpacity>
                <TouchableOpacity style={styles.buyBtn}>
                  <Text style={styles.btnTitle}>Buy Now</Text>
                </TouchableOpacity>
              </View>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 15,
    flex: 1,
    backgroundColor: COLORS.lightWhite,
    
  },
  cardWrapper: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 15,
    marginVertical: 15
  },
  box: {
    width: 180,
    height: 350,
    borderWidth: 1,
    borderColor: COLORS.tertiary,
    borderRadius: 10,
    padding: 7
  },
  productPhoto: {
    width: '100%',
    height: '45%',
    resizeMode: 'contain'
  },
  cardContent: {
    marginVertical: 10,
    gap: 10
  },
  productPrice: {
    fontFamily: FONTS.bold,
    fontSize: 16
  },
  productName: {
    fontFamily: FONTS.regular,
  },
  rateWrap: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  rate: {
    fontFamily: FONTS.regular,
  },
  buttons: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10
  },
  addToCartBtn: {
    padding: 7,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: COLORS.secondary
  },
  buyBtn: {
    padding: 10,
    backgroundColor: COLORS.primary,
    width: 120,
    borderRadius: 8
  },
  btnTitle: {
    color: COLORS.lightWhite,
    textAlign: 'center',
    fontFamily: FONTS.regular
  }
  
})

export default Home
