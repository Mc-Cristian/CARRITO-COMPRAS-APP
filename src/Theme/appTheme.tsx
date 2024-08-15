//Gestionar los estilos
import { StyleSheet } from "react-native";
import { INPUT_COLOR, PRIMARY_COLOR, SECUNDARY_COLOR } from "../commons/commons";

export const styles = StyleSheet.create({
    globalTitle:{
        color: SECUNDARY_COLOR,
        fontSize: 25,
        paddingHorizontal: 30,
        paddingVertical: 30,
        fontWeight: 'bold'
    },
    contenBody:{
        backgroundColor: SECUNDARY_COLOR,
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingHorizontal: 40,
        paddingTop: 40
    },
    titleHederBody:{
        fontSize: 18,
        fontWeight: 'bold',
        color: 'black'
    },
    textBody:{
        fontSize: 15
    },
    inputText:{
        backgroundColor: INPUT_COLOR,
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderRadius: 10
    },
    contentInput:{
        marginTop: 20,
        gap: 10
        
    },
    button:{
        backgroundColor: PRIMARY_COLOR,
        paddingVertical: 20,
        borderRadius: 10,
        marginTop:30
    },
    buttonText:{
        backgroundColor: PRIMARY_COLOR,
        fontSize: 15,
        fontWeight: 'bold',
        textAlign: 'center'
    },
    iconPassword:{
        position: 'absolute',
        right: 20,
        zIndex:1,
        marginTop:10
    },
    textRedirection:{
        marginTop: 30,
        fontSize: 15,
        color: PRIMARY_COLOR,
        fontWeight: 'bold',
        textAlign: 'center'
    },
    contentCard:{
        flexDirection: 'row',
        alignItems: 'stretch',
        padding: 15,
        borderStyle: 'solid',
        borderColor: '#4CAF50',
        borderWidth:5,
        borderRadius:10,
        marginBottom: 15
    },
    titleCard:{
        fontWeight: 'bold',
        color: 'black',
        fontSize: 15
    },
    imageCard:{
        width: 100,
        height: 80
    },
    iconCard:{
        flex: 1,
        alignItems: 'flex-end'
    },
    contentPrincipal:{
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0,0,0,0.5)',

    },
    contentModal:{
        padding:20,
        backgroundColor: SECUNDARY_COLOR,
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset:{
            width:0,
            height:2
        },
        shadowOpacity:0.25,
        shadowRadius: 4,
        elevation: 5
    },
    headModal:{
        flexDirection: 'row',
        borderBottomColor: '#ccc',
        borderBottomWidth: 2,
        padding: 10
    },
    titleModal:{
        fontSize: 20,
        color: '#000',
        fontWeight: 'bold'
    },
    imageModal:{
        width: 200,
        height: 200
    },
    
    contentQuantity:{
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems:'center'
    },
    buttonQuantity:{
        width: 50,
        height: 50,
        borderRadius: 100,
        backgroundColor: PRIMARY_COLOR,
        justifyContent: 'center',
        alignItems: 'center',
        margin: 15
    },
    textButtonQuantity:{
        color: SECUNDARY_COLOR,
        fontSize: 20,
        fontWeight: 'bold'
    },
    textQuantity:{
        fontSize: 20,
        color: '#000',
        textAlign: 'center'
    },
    buttonAddCar:{
        marginTop:15,
        backgroundColor: PRIMARY_COLOR,
        borderRadius: 5,
        paddingVertical: 10,
        alignItems: 'center'
    },
    textButtonAddCar:{
        color: SECUNDARY_COLOR,
        fontWeight: 'bold'
    },
    messageStock:{
        fontSize:20,
        fontWeight: 'bold',
        color: '#a92424',
        textAlign: 'center'
    },
    contentHeaderHome:{
        flexDirection: 'row',
        alignItems: 'center'
    },
    iconCardHome:{
        flex: 1,
        alignItems: 'flex-end',
        paddingHorizontal: 33
    },
    textIconCard:{
        backgroundColor: SECUNDARY_COLOR,
        borderRadius: 20,
        paddingHorizontal: 5,
        fontSize: 14,
        fontWeight: 'bold'
    },
    headerTable:{
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    headerInfotmation:{
        flexDirection: 'row',
    },
    textInformation:{
        fontWeight: 'bold',
        color: '#000'
    },
    textTotalPay:{
        fontWeight: 'bold',
        marginTop: 5,
        fontSize: 15
    },
    background: {
        flex: 1,
        resizeMode: 'cover', // O 'contain' dependiendo de tu necesidad
      },
      container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
      },
      text: {
        fontSize: 20,
        color: '#fff', // Ajusta el color según el fondo
        marginBottom: 20,
      },
      textButton:{
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
      },

});