import React, { useState } from 'react';
import { Text, TextInput, TouchableOpacity, View, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { text, theme } from '../styles';
import eyesOpened from '../assets/eyes-Opened.png';
import eyesClosed from "../assets/eyes-closed.png";
import arrow from "../assets/arrow.png";
import { isAuthenticated, login } from '../services/auth';

const Login: React.FC = () => {
    const navigation = useNavigation();
    const [hidePassword, setHidePassword] = useState(false);
    const [userInfo, setUserInfo] = useState({ username: "", password: "" })
    const [userFetcData, setUserFetchData] = useState({})

    async function handleLogin(){
        const data = await login(userInfo);
        setUserFetchData(data);
        navigation.navigate("DashBoard");       
    }

    return (
        <View style={theme.container}>
            <View style={theme.loginCard}>
                <Text style={theme.loginTitle}>Login</Text>
                <View style={theme.form}>
                    <TextInput
                        placeholder="Email"
                        keyboardType='email-address'
                        style={theme.textInput}
                        value={userInfo.username}
                        onChangeText={
                            (e) => {
                                const newUserInfo = { ...userInfo };
                                newUserInfo.username = e;
                                setUserInfo(newUserInfo);
                            }
                        }
                    />
                    <View style={theme.passwordGroup}>
                        <TextInput
                            placeholder="Senha"
                            autoCapitalize='none'
                            style={theme.textInput}
                            secureTextEntry={hidePassword}
                            value={userInfo.password}
                            onChangeText={
                                (e) => {
                                    const newUserInfo = { ...userInfo };
                                    newUserInfo.password = e;
                                    setUserInfo(newUserInfo);
                                }
                            }
                        />
                        <TouchableOpacity
                            style={theme.toggle}
                            onPress={() => setHidePassword(!hidePassword)}
                        >
                            <Image
                                source={hidePassword ? eyesOpened : eyesClosed}
                                style={{ width: 21, height: 22, }} />
                        </TouchableOpacity>
                    </View>
                </View>
                <TouchableOpacity
                    style={theme.primaryButton}
                    activeOpacity={0.8}
                    onPress={() => handleLogin()}
                >
                   <View style={theme.buttonTextContainer}>
                       <Text style={text.primaryText}>Fazer Login</Text>
                   </View>
                   <View style={theme.arrowContainer}>
                       <Image source={arrow} style={{ width: 21, height: 22, }}/>
                   </View>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default Login;