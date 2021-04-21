import { StyleSheet } from 'react-native';
import { color } from 'react-native-reanimated';

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
    productName:{
       fontSize: 16,
       fontWeight: "bold",
    },
    currency:{
       fontSize: 16,
       fontWeight: "400",
       color: colors.mediumGray,
    },
    productPrice: {
        fontSize: 30,
        fontWeight: "bold",
        color: colors.primary,
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
    productDescription:{
       width:"100%",
       padding: 20,
       borderTopColor: colors.lightGray,
       borderTopWidth: 1,

    },
    priceContainer:{
      flexDirection: "row",
      marginTop: 10,
    },

    //search input
    inputContainer:{
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
    searchInput:{
      width: "90%",
      height: 40,
      borderBottomColor: colors.borderGray,
    },
    productImage:{
       width: 140,
       height: 140,
       margin: 16,
    },
});

export { colors, theme, text }