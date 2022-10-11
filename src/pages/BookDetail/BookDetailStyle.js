import { StyleSheet,Dimensions } from 'react-native';
const deviceSize = Dimensions.get('window');

export default StyleSheet.create({

    title:{
        padding:5,
        textAlign:'center',
        fontWeight:'bold',
        color:'#F57328',
        fontSize:18
    },
    image:{
        // width: 250,
        // minHeight: 100,
        // resizeMode: 'contain',
        width:deviceSize.width*0.95,
        height:deviceSize.height/4,
        resizeMode:'contain'
    },
    inner_container:{
     // margin:10,
       textAlign:'center',
       padding:4,
       fontSize:16,
       color:'#F57328',
       fontWeight:'bold'
    },
    description:{
        padding:5,
        margin:5,
        
        
    },
    footer:{
        flexDirection:'row',
        borderWidth:2,
        margin:5,
        padding:10,
        justifyContent:'center',
       
        borderColor:'#F57328',
      
     },
     footer_text:{
        fontSize:18,
        fontWeight:'bold',
        color:'#F57328'
        
     }
})