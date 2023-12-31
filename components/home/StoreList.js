import React from 'react';
import { View, Text, StyleSheet, Image, FlatList, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';


/**
 * 查看店家列表
 * @param {*} param0 
 * @returns 
 */
const StoreList = ({ data, handleEndReached }) => {
  const navigation = useNavigation();

  const handlePress = (storeId) =>{
    navigation.navigate('店家', {storeId})
  }
    const renderItem = ({ item }) =>(
      <TouchableOpacity key={item.id} onPress={()=>handlePress(item.id)}>
        <View key={item.id} style={styles.storeCard}>
          <Image source={item.image} style={styles.storeImage} />
          <View style={styles.infoContainer}>
            <Text style={styles.storeName}>{item.name}</Text>
            <View style={styles.ratingContainer}>
              <Text style={styles.rating}>★ {item.rating}</Text>
            </View>
          </View>
        </View>
      </TouchableOpacity>       
    )
  return (
    <View style={styles.storeContainer}>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
        onEndReached={handleEndReached}
        onEndReachedThreshold={0.1}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  storeContainer: {
    margin: 10,
  },
  storeCard: {
    width: '100%',
    marginBottom: 40,
  },
  storeImage: {
    width: '100%',
    height: 250,
    resizeMode: 'cover',
    borderRadius: 8,
  },
  infoContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 10,
  },
  storeName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  ratingContainer: {
    backgroundColor: '#dfdfdf',
    borderRadius: 100,
    padding: 5
  },
  rating: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'black',
  },
});

export default StoreList;