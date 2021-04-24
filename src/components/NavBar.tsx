import React, { useState } from 'react';
import { useNavigation, useRoute } from "@react-navigation/native";
import { Image, StyleSheet, View, Text } from 'react-native';
import { TouchableOpacity } from 'react-native';
import menu from "../assets/menu.png";
import { colors, nav } from '../styles';




const NavBar: React.FC = () => {
    const [show, setShow] = useState(false);
    const navigation = useNavigation();
    const route = useRoute();

    function navigate(path: any) {
        if (path) {
            setShow(false);
            navigation.navigate(path);
        }
        setShow(false);
    }

    return (
        <TouchableOpacity
            activeOpacity={0.8}
            style={nav.drawer}
            onPress={() => setShow(!show)}
        >
            <Image source={menu} style={{ width: 20, height: 20, }} />
            {
                show ? (
                    <View style={nav.options}>
                        <TouchableOpacity
                            style={nav.option}
                            onPress={() => navigate("Home")}
                        >
                            <Text
                                style={[nav.textOption,
                                route.name == "Home" ? nav.textActive : null]}>
                                Home
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={nav.option}
                            onPress={() => navigate("Catalog")}
                        >
                            <Text
                                style={[nav.textOption, route.name == "Catalog" ? nav.textActive : null]}>
                                Catalogo
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={nav.option}>
                            <Text 
                                style={[nav.textOption, route.name == "ADM" ? nav.textActive : null]}>ADM</Text>
                        </TouchableOpacity>
                    </View>) : null
            }
        </TouchableOpacity>
    );

};


export default NavBar;