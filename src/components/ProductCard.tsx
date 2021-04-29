import React from "react";
import { View, Text, ImageSourcePropType, TouchableOpacity, Image, StyleSheet } from "react-native";
import { colors, text, theme } from "../styles";
import { useNavigation } from '@react-navigation/native';


interface ProductProps {
  id: Number;
  name: String;
  imgUrl: ImageSourcePropType;
  price: Number;
  role?: string;
}

const ProductCard: React.FC<ProductProps> = ({ id, name, imgUrl, price, role }) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      style={theme.productCard}
      onPress={() => navigation.navigate("ProductDetails", { id })}
    >
      <Image source={{ uri: imgUrl }} style={theme.productImage} />
      <View style={theme.productDescription}>
        <Text style={text.productName}>{name}</Text>
        <View style={theme.priceContainer}>
          <Text style={text.currency}>R$</Text>
          <Text style={text.productPrice}>{price}</Text>
        </View>
        {
          role == 'admin' && (
            <View style={admin.buttonContainer}>
              <TouchableOpacity
                style={admin.deletebtn}
              >
                <Text
                  style={admin.deleteText}
                >
                  Excluir
                </Text>
              </TouchableOpacity>

              <TouchableOpacity
                 style={admin.editbtn}
              >
                <Text style={admin.editText}>
                  Editar
                </Text>
              </TouchableOpacity>
            </View>
          )
        }
      </View>
    </TouchableOpacity>
  )
}

const admin = StyleSheet.create({
  buttonContainer:{
     flexDirection: "row",
     alignItems: "center",
     justifyContent: "space-around",
  },
  deletebtn: {
    width: '48%',
    height: 40,
    borderColor: '#DF5753',
    borderWidth: 1,
    marginVertical: 10,
    alignItems: 'center',
    justifyContent: 'center', 
    borderRadius: 10,
  },

  editbtn: {
    width: '48%',
    height: 40,
    borderColor: '#E1E1E1',
    borderWidth: 1,
    marginVertical: 10,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
  },

  deleteText: {
    color: '#DF5753',
    textTransform: 'uppercase',
    fontWeight: 'bold',
  },

  editText: {
    color: '#E1E1E1',
    textTransform: 'uppercase',
    fontWeight: 'bold',
  },
});

export default ProductCard;