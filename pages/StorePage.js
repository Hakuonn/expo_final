import React, { useEffect, useState } from 'react'
import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity } from 'react-native';
import RecommendGoods from '../components/storeGoods/RecommendGoods';
import InfoModal from '../components/storeGoods/InfoModal';
import Menu from '../components/storeGoods/Menu';
import LoadingScreen from '../components/LoadingScreen';

/**
 *餐廳頁面
 */
function StorePage() {
    const [modalVisible, setModalVisible] = useState(false)
    const [data, setData] = useState(null)
    const [loading, setLoading] = useState(true)
    const testdata = {
        id: 1,
        name: "麥當勞 McDonald's",
        type: '美式料理',
        rating: 4.9,
        score: 200,
        tel: '0411112222',
        address: '高雄市楠梓區建楠路160號',
        closingTime: '11:59 PM',
        image: require('../images/mc.png'),
    }
    // 模擬API請求延遲（我這次有記得寫loading哈哈）
    useEffect(() => {
        setTimeout(() => {
            setData(testdata);
            setLoading(false);
        }, 2000); // 模擬2秒延遲
    }, []);

  return (
    <ScrollView>
        {loading ?
        <LoadingScreen/>
        :
        (
        <View>
        <View style={styles.storeImageContainer}>
            <Image source={data.image} style={styles.storeImage}/>
        </View>
        <View style={styles.container}>

            <TouchableOpacity style={styles.container} onPress={() => setModalVisible(true)}>
                <View style={styles.storeInfo}>
                        <Text style={styles.storeName}>{data.name}</Text>
                        <Text style={styles.storeBasic}>
                            ★{data.rating}
                            <Text> ({data.score}+評分)·{data.type}</Text>
                        </Text>
                </View>
            </TouchableOpacity>
            <InfoModal modalVisible={modalVisible} setModalVisible={setModalVisible} data={data}/>
            <RecommendGoods/>
            <Menu/>
        </View>
        </View>
        )}
    </ScrollView>
  )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
        backgroundColor: '#fff',
    },
    productCard: {
        marginRight: 16,
    },
    productImage: {
        width: 150,
        height: 150,
        borderRadius: 8,
    },
    productName: {
        fontSize: 16,
        marginTop: 8,
    },
    productPrice: {
        fontSize: 14,
        color: 'green',
        marginTop: 4,
    },
    storeImageContainer: {
        alignItems: 'center',
        marginBottom: 5,
    },
    storeImage: {
        width: '100%',
        height: 210,
        resizeMode: 'cover',
    },
    storeName: {
        fontSize: 30,
        fontWeight: 'bold',
        textAlign: 'center'
    },
    storeBasic: {
        fontSize: 16,
        textAlign: 'center',
        marginTop: 10
    },
  });
export default StorePage