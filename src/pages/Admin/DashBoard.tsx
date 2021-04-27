import React from 'react';
import {View, Text} from 'react-native';
import {theme} from "../../styles";

const DashBoard: React.FC = () => {
    return(
        <View style={theme.card}>
            <Text>Dashboard</Text>
        </View>
    )
}

export default DashBoard;