import { TouchableOpacity, Text, StyleSheet } from 'react-native'
import { FONTS } from '../../styles'

const RightBar = ({ navigation }) => {
  return (
    <TouchableOpacity onPress={() => navigation.navigate('Home')}>
      <Text style={styles.headerTitle}>Zen</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  headerTitle: {
    fontFamily: FONTS.bold,
    fontSize: 18
  }
})


export default RightBar