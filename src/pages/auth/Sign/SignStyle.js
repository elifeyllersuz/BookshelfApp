import { Dimensions, StyleSheet } from 'react-native';

export default StyleSheet.create({

    container:{
        flex:1,
        backgroundColor:'#FFE9A0'
    },

    logo:{
        width:Dimensions.get('window').width,
        height:Dimensions.get('window').height/3,
        resizeMode:'contain'
    }
})