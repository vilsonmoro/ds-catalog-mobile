import { StyleSheet, Dimensions } from 'react-native';
import { color } from 'react-native-reanimated';
const deviceWidth = Dimensions.get('window').width;

const colors = {
    white: "#ffffff",
    lightGray: "#f2f2f2",
    mediumGray: "#9e9e9e",
    darkGray: "#263238",
    black: "#000000",
    primary: "#407bee",
    secondary: "#33569b",
    borderGray: "#9e9e9e",
}

const text = StyleSheet.create({
    regular: {
        fontSize: 16,
        fontWeight: "400",
        textAlign: "center",
        color: colors.mediumGray,
    },
    bold: {
        fontSize: 26,
        fontWeight: "bold",
        textAlign: "center",
        marginBottom: 15,
        color: colors.darkGray,
    },
    primaryText: {
        fontSize: 14,
        fontWeight: "bold",
        textTransform: "uppercase",
        color: colors.white,
        marginLeft: 20,
    },
    productName: {
        fontSize: 16,
        fontWeight: "bold",
    },
    currency: {
        fontSize: 16,
        fontWeight: "400",
        color: colors.mediumGray,
    },
    productPrice: {
        fontSize: 30,
        fontWeight: "bold",
        color: colors.primary,
    },
    logoutText: {
        color: colors.white,
    },

});


const theme = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        padding: 20,
    },
    card: {
        width: '100%',
        height: '100%',
        backgroundColor: colors.white,
        borderRadius: 20,
        alignItems: "center",
        shadowColor: colors.black,
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        justifyContent: "space-around",
    },

    draw: {
        width: 313,
        height: 225,
    },

    textContainer: {
        paddingHorizontal: 20,
    },
    primaryButton: {
        width: 290,
        height: 50,
        backgroundColor: colors.primary,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        borderRadius: 10,
    },

    arrowContainer: {
        height: 50,
        width: 50,
        backgroundColor: colors.secondary,
        borderTopRightRadius: 10,
        borderBottomRightRadius: 10,
        alignItems: "center",
        justifyContent: "center",
    },

    //Product Card
    scrollContainer: {
        padding: 10,
    },
    productCard: {
        width: "100%",
        backgroundColor: colors.white,
        borderRadius: 10,
        shadowColor: colors.black,
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        alignItems: "center",
        justifyContent: "space-around",
        marginVertical: 10,
    },
    productDescription: {
        width: "100%",
        padding: 20,
        borderTopColor: colors.lightGray,
        borderTopWidth: 1,

    },
    priceContainer: {
        flexDirection: "row",
        marginTop: 10,
    },

    //search input
    inputContainer: {
        width: "100%",
        height: 60,
        backgroundColor: colors.white,
        borderRadius: 10,
        shadowColor: colors.black,
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        alignItems: "center",
        marginVertical: 12.5,
        paddingVertical: 10,
    },
    searchInput: {
        width: "90%",
        height: 40,
        borderBottomColor: colors.borderGray,
    },
    productImage: {
        width: 140,
        height: 140,
        margin: 16,
    },

    //details
    detailsContainer: {
        backgroundColor: colors.white,
        padding: 20,
    },
    detailsCard: {
        width: '100%',
        height: '100%',
        backgroundColor: colors.white,
        borderRadius: 10,
        shadowColor: colors.black,
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        justifyContent: "space-around",
        padding: 20,
    },

    productImageContainer: {
        width: "100%",
        borderRadius: 20,
        borderColor: "#E1E1E1",
        borderWidth: 1,
        paddingHorizontal: 30,
        paddingVertical: 15,
        alignItems: 'center',
    },

    detailName: {
        color: "#263238",
        fontSize: 30,
        fontWeight: "bold",
        marginHorizontal: 20,
        marginTop: 10,
    },
    currency: {
        color: "#9E9E9E",
        fontSize: 24,
        fontWeight: "normal",
        marginLeft: 20,
    },
    priceDetail: {
        color: "#407BFF",
        fontSize: 42,
        fontWeight: "bold",
        marginLeft: 54,
        marginRight: 90,
    },
    detailDescription: {
        color: "#9E9E9E",
        fontSize: 16,
        fontWeight: "normal",
    },
    scrollTextContainer: {
        marginVertical: 20,
        padding: 10,
        borderWidth: 1,
        borderRadius: 10,
        borderColor: colors.lightGray,
    },
    productDetailImage: {
        width: 269,
        height: 269,
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

    loginCard: {
        width: '100%',
        height: '100%',
        backgroundColor: colors.white,
        borderRadius: 20,
        alignItems: "center",
        shadowColor: colors.black,
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        justifyContent: "center",
    },
    form: {
        marginVertical: 10,
    },
    passwordGroup: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 25,
    },
    textInput: {
        width: 290,
        height: 50,
        borderWidth: 1,
        borderColor: colors.mediumGray,
        borderRadius: 10,
        padding: 10,
    },

    toggle: {
        margin: -40
    },
    loginTitle: {
        fontSize: 30,
        color: colors.darkGray,
        textTransform: 'uppercase',
        marginBottom: 50,
    },

})

const nav = StyleSheet.create({
    leftText: {
        color: colors.white,
        fontWeight: 'bold',
        marginLeft: 10,
    },
    drawer: {
        marginRight: 20,
    },
    options: {
        width: deviceWidth,
        height: 120,
        backgroundColor: colors.primary,
        marginTop: 125,
        marginRight: -20,
        padding: 20,
        justifyContent: 'space-between',
    },
    option: {
        paddingVertical: 5,
    },
    textOption: {
        color: colors.white,
        textTransform: 'uppercase',
    },
    textActive: {
        fontWeight: 'bold',
    },



    draw: {
        width: 313,
        height: 225,
    },
    logoutBtn: {
        width: 60,
        height: 30,
        borderWidth: 1,
        borderColor: colors.white,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: 20,
    },


})

const tabbar = StyleSheet.create({
    container: {
      width: deviceWidth,
      height: 80,
      backgroundColor: colors.white,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-around',
    },

    pill:{
      padding: 15,
      backgroundColor: colors.lightGray,
      borderRadius: 30,
    },

    pillActive:{
       backgroundColor: '#3effff'
    },

    pillText: {
       fontWeight: '600',
       color: colors.mediumGray,
    },

    pillTextActive:{
      color: colors.primary,
    },

})

export { colors, theme, text, nav, tabbar }