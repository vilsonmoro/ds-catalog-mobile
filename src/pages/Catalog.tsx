import React, { useEffect, useState } from "react";
import { ScrollView, View, Text, ActivityIndicator } from "react-native";
import { ProductCard, SearchInput } from "../components";
import { theme } from "../styles";
import { api } from "../services";

const Catalog: React.FC = () => {
    const [search, setSearch] = useState("");
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(false);

    async function fillProducts() {
        setLoading(true);
        const res = await api.get(`/products?page=0&linesPerPage=12&direction=ASC&orderBy=name`);
        setProducts(res.data.content);
        setLoading(false);
    }

    useEffect(() => {
        fillProducts();
    }, [])


    const data = search.length > 0
        ? products.filter((product) =>
            product.name.toLowerCase()
                .includes(search.toLocaleLowerCase()))
        : products;

    return (
        <View style={theme.container}>
            <ScrollView contentContainerStyle={theme.scrollContainer}>
                <SearchInput
                    placeHolder="Nome do produto"
                    search={search}
                    setSearch={setSearch} />
                {
                    loading ? (<ActivityIndicator size='large' />)
                        : (data.map(product => (
                            <ProductCard {...product} key={product.id} />
                        )))}
            </ScrollView>
        </View>


    )
};

export default Catalog;