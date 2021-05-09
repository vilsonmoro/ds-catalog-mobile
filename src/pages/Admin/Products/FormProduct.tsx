import React, { useState } from 'react';
import {
    Text, View, ScrollView, Image, Modal, StyleSheet,
    ActivityIndicator, TouchableOpacity, TextInput, Dimensions
} from 'react-native';
import arrow from '../../../assets/leftArrow.png';
import { colors } from '../../../styles';

interface FormProductProps {
    setScreen: Function;
}

const FormProduct: React.FC<FormProductProps> = (props) => {
    const { setScreen } = props;
    const [loading, setLoading] = useState(false);
    const [edit, setEdit] = useState(false);
    const [showCategories, setShowCategories] = useState(false);
    const [categories, setCategories] = useState([
        {
            id: 1,
            name: "Computadores"
        },
        {
            id: 2,
            name: "Livros"
        },
        {
            id: 3,
            name: "eletrônicos"
        },
    ]);

    const [product, setProduct] = useState({
        name: null,
        description: null,
        imgUrl: null,
        price: null,
        categories: null,
    });
    return (          
          <View style={theme.formContainer}>
             { loading ? (<ActivityIndicator size='large' />) : (
                 <View style={theme.formCard}>
                     <ScrollView>
                         <Modal
                             visible={showCategories}
                             animationType="fade"
                             transparent={true}
                             presentationStyle="overFullScreen"
                         >
                             <View style={theme.modalContainer}>
                                 <ScrollView contentContainerStyle={theme.modalContent}>
                                     {
                                         categories.map(cat => (
                                             <TouchableOpacity
                                                 style={theme.modalItem}
                                                 key={cat.id}
                                                 onPress={
                                                     () => {
                                                         setProduct({ ...product, categories: cat.name });
                                                         setShowCategories(!showCategories);
                                                     }}
                                             >
                                                 <Text>{cat.name}</Text>
                                             </TouchableOpacity>
                                         ))}
                                 </ScrollView>
                             </View>
                         </Modal>
                         <TouchableOpacity
                            onPress={() => setScreen("products")} 
                            style={theme.gobackcontainer} 
                         >
                             <Image source={arrow} style={{ width: 20, height: 20, }} />
                             <Text style={theme.gobackText}>Voltar</Text>
                         </TouchableOpacity>
                         <TextInput 
                             placeholder="Nome do produto" 
                             style={theme.formInput}
                             />
                         <TouchableOpacity
                             onPress={() => setShowCategories(!showCategories)}
                         >
                             <Text>
                                 {
                                     product.categories == null
                                         ? 'Escolha uma categoria'
                                         : product.categories
                                 }
                             </Text>
                         </TouchableOpacity>
                         <TextInput 
                            placeholder="preco" 
                            style={theme.formInput}
                            />
                         <TouchableOpacity>
                             <Text>Carregar imagem</Text>
                         </TouchableOpacity>
                         <Text>
                             As imagens devem ser  JPG ou PNG e não devem ultrapassar 5 mb.
                         </Text>
                         <TextInput 
                             multiline
                             placeholder="Descrição"
                             style={theme.textArea} 
                         />
                         <View>
                             <TouchableOpacity>
                                 <Text> Cancelar </Text>
                             </TouchableOpacity>
                             <TouchableOpacity>
                                 <Text> Salvar </Text>
                             </TouchableOpacity>
                         </View>
                     </ScrollView>
                 </View>
             )}
         </View>                             
    )
};

const deviceWidth = Dimensions.get('window').width;
const deviceHeight = Dimensions.get('window').height;
const theme = StyleSheet.create({
    formContainer: {
        width: deviceWidth,
        padding: 20,
    },
    formCard: {
        width: "100%",
        height: "90%",
        backgroundColor: colors.white,
        borderRadius: 20,
        padding: 20,
        shadowColor: colors.black,
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        alignItems: 'center',
        justifyContent: 'space-around',
    },
    modalContainer: {
        width: deviceWidth,
        height: deviceHeight,
        backgroundColor: "#00000025",
        alignItems: 'center',
        justifyContent: 'center',
    },
    modalContent: {
        width: 300,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: "50%",
        backgroundColor: colors.white,
        padding: 20,
        borderRadius: 20,
        shadowColor: colors.black,
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    modalItem: {
        width: "100%",
        backgroundColor: colors.lightGray,
        padding: 10,
        marginVertical: 5,
        borderRadius: 5,
    },
    gobackcontainer: {
        width: 290,
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 10,
    },
    gobackText: {
        fontSize: 18,
        fontWeight: "bold",
        textTransform: 'uppercase',
        color: colors.darkGray,
        marginLeft: 16,
    },
    formInput: {
        width: 290,
        height: 50,
        borderWidth: 1,
        borderColor: colors.mediumGray,
        borderRadius: 10,
        padding: 10,
        marginVertical: 15,
    },
    textArea: {
        width: "100%",
        height: 200,
        borderWidth: 1,
        borderColor: colors.mediumGray,
        borderRadius: 10,
        padding: 10,
        marginVertical: 15,
    },

});

export default FormProduct;