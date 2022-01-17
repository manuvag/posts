import { StyleSheet, Text, View } from 'react-native';

export default ({ navigation }) => {
  const title = navigation.getParam('title')
  const body = navigation.getParam('body')
  const userName = navigation.getParam('name')
  return (
    <View style={styles.container}>
      <Text>{title}</Text>
      <Text>{userName}</Text>
      <Text>{body}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})
