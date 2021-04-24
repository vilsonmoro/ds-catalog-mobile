import React, { useEffect, useState } from 'react';
import { ActivityIndicator, Text, View, Image, ScrollView } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation} from "@react-navigation/native";
import { api } from '../services';
import arrow from '../assets/arrow.png';
import { theme } from '../styles';


const ProductDetails = ({
    route: {
        params: { id },
    },
}) => {
    const navigation = useNavigation();
    const [product, setProduct] = useState({
        id: null,
        name: null,
        description: null,
        price: null,
        imgUrl: null,
        date: null,
        categories: [],
    })

    const [loading, setLoading] = useState(false);

    async function loadProductData() {
        setLoading(true);
        const res = await api.get(`/products/${id}`);
        setProduct(res.data);
        setLoading(false);
    }
    useEffect(() => {
        loadProductData();
    }, [])

    return (
        <View style={theme.detailsContainer}>
            { loading ? (<ActivityIndicator size='large' />) : (
                <View style={theme.detailsCard}>
                    <TouchableOpacity 
                       style={theme.gobackcontainer}
                       onPress = {() => navigation.goBack()}
                     >
                        <Image source={arrow} />
                        <Text style={theme.gobackText}>
                            Voltar
                        </Text>
                    </TouchableOpacity>
                    <View style={theme.productImageContainer}>
                        <Image source={{ uri: product.imgUrl }}
                            style={theme.productDetailImage} />
                    </View>
                    <Text style={theme.detailName}>
                        {product.name}
                    </Text>
                    <View style={theme.priceContainer}>
                        <Text style={theme.currency}>
                            R$
                        </Text>
                        <Text style={theme.priceDetail}>
                            {product.price}
                        </Text>
                    </View>
                    <ScrollView style={theme.scrollTextContainer}>
                        <Text style={theme.detailDescription}>
                            {product.description}
                        </Text>
                    </ScrollView>
                </View>
            )}

        </View>
    )
}

export default ProductDetails;