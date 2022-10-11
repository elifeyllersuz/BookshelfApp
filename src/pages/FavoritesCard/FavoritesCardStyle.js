import { StyleSheet } from 'react-native';

export default StyleSheet.create({

    container:{
        borderWidth:1,
        borderColor:'#F57328',
        margin:10,
        borderRadius:10,
        padding:15,
        backgroundColor:'#F57328',
        opacity:0.9,
        elevation:8,
        
    },
    image:{
        width: 100,
        minHeight: 100,
        resizeMode:'contain'
        

        
    },
    inner_container:{
     //  flexDirection:'row',
   //justifyContent:"center",
   // flexDirection:'row'
  
      
    },
    book_name:{
        color:'white',
        fontWeight:'bold',
        fontSize:18
    },
    author:{
        color:'white',
        fontWeight:'bold',
        fontSize:18
    },
    footer:{
        alignItems:'flex-end',
       //flexDirection:'row'
    },
    remove_favorites_text:{
        color:'#F57328',
        fontWeight:'bold',
        padding:4,
        
    },
    remove_favorites_container:{
       // flexDirection:'row',
        padding:3,
        backgroundColor:'white',
        paddingHorizontal:10,
        borderRadius:20,
      //  alignItems:'center'
    }

})