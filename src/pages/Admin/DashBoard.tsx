import React, { useState } from 'react';
import {View, Text} from 'react-native';
import { FormProduct } from '..';
import { TabBar } from '../../components';

import Categories from './Categories';
import Products from './Products/ListProduct';
import Users from './Users';

const DashBoard: React.FC = () => {
    const [screen, setScreen ] = useState("products");
    return(
        <View>
            <TabBar screen={screen} setScreen={setScreen} />
            {screen == "products" && <Products setScreen={setScreen} />}
            {screen == "newProduct" && <FormProduct setScreen={setScreen} /> }
            {screen == "categories" && <Categories />}
            {screen == "users" && <Users />}
        </View>
    )
}
export default DashBoard;