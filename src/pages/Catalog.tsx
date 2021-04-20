import React from "react";
import {ScrollView, View, Text } from "react-native";
import { ProductCard } from "../components";
import productImg from "../assets/produto.png";
import { theme } from "../styles";


const products = [
    {
        id: 1,
        imgUrl: productImg,
        name: "Computador desktop - Intel Core i7",
        price: 2279
    },
    {
        id: 2,
        imgUrl: productImg,
        name: "Computador desktop - Intel Core i7",
        price: 2279
    },
    {
        id: 3,
        imgUrl: productImg,
        name: "Computador desktop - Intel Core i7",
        price: 2279
    },
    {
        id: 4,
        imgUrl: productImg,
        name: "Computador desktop - Intel Core i7",
        price: 2279
    },
];

const Catalog: React.FC = () => {
    return(
        <ScrollView contentContainerStyle={theme.scrollContainer}>
            {products.map( product => (
                <ProductCard {...product} />
            ))}
        </ScrollView>

    )
};

export default Catalog;