import React from "react";
import { View, Text, Image } from "react-native";
import { useNavigation} from "@react-navigation/native";
import { theme, text } from '../styles';
import arrow from '../assets/arrow.png';
import draw from '../assets/draw.png';
import { TouchableOpacity } from "react-native-gesture-handler";

const Home: React.FC = ( ) => {
    const navigation = useNavigation();
    return(
        <View style={theme.container}>
            <View style={theme.card}>
                 <Image source={draw} style={theme.draw} />
                 <View style={theme.textContainer}>
                     <Text style={text.bold}>Conheça o melhor catálogo de produtos</Text>
                     <Text style={text.regular}>Ajudaremos você a encontrar os melhores produtos disponíveis no mercado.</Text>                     
                 </View>
                 
                 <TouchableOpacity 
                    style={theme.primaryButton}
                    activeOpacity={0.8}
                    onPress={() => navigation.navigate("Login")}
                    >
                     <Text style={text.primaryText}>INICIE AGORA A SUA BUSCA</Text>
                     <View style={theme.arrowContainer}>
                         <Image source={arrow} style={{width:7, height: 14,}} />
                     </View>
                 </TouchableOpacity>
            </View>         
        </View>

    )
};

export default Home;