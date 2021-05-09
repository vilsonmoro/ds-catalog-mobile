import React, { useEffect, useState } from 'react';
import {
    View,
    Text,
    ScrollView,
    TouchableOpacity,
    Image,
    ActivityIndicator,
    ScrollViewBase,
    StyleSheet
} from 'react-native';
import { SearchInput, ProductCard } from '../../../components';
import { getProducts } from '../../../services';
import { colors } from '../../../styles';

interface ProductProps {
   setScreen: Function; 
}

const Products: React.FC<ProductProps> = (props) => {
    const [search, setSearch] = useState("");
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(false);
    const { setScreen } = props;
    async function fillProducts() {
        setLoading(true);
        const res = await getProducts();
        setProducts(res.data.content);
        setLoading(false);
    }

    useEffect(() => {
        fillProducts();
    }, []);


    const data = search.length > 0
        ? products.filter((product) =>
            product.name.toLowerCase()
                .includes(search.toLocaleLowerCase()))
        : products;

    return (
        <ScrollView contentContainerStyle={admin.container}>
           <TouchableOpacity 
               style={admin.addButton}
               onPress={() => setScreen("newProduct")}
               
               >
               <Text style={admin.addButtonText}>Adicionar</Text>
           </TouchableOpacity>
           <SearchInput 
              search={search}
              setSearch={setSearch}
              placeHolder="Nome do produto"
           />
           {
                loading ? (<ActivityIndicator size='large' />)
                    : (data.map(product => (
                <ProductCard 
                   {...product} 
                   key={product.id} 
                   role='admin' />
            )))}
        </ScrollView>
    )
}

const admin = StyleSheet.create({
   container:{
       padding: 20,
       alignItems: 'center',
   },

   addButton:{
     width:'100%',
     height: 50,
     backgroundColor: colors.primary,
     borderRadius: 10,
     alignItems: 'center',
     justifyContent:  'center'
   },

   addButtonText:{
    color: colors.white,
    textTransform: 'uppercase',
    fontWeight: 'bold',
   },


});
export default Products;