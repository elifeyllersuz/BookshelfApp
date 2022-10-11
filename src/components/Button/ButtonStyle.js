import { StyleSheet } from 'react-native';


const base_style = StyleSheet.create({

    container:{
        padding:8,
        margin:10,
    },
    title:{
        marginLeft:5,
        fontWeight:'bold',
        fontSize:18,
        textAlign:'center'
    }

})

export default {

    primary: StyleSheet.create({
        ...base_style,

        container:{
            ...base_style.container,
            backgroundColor:'#F57328',

        },
        title:{
            ...base_style.title,
            color:'white'
        }
    }),
    secondary: StyleSheet.create(
        {
            ...base_style,
            container:{
                ...base_style.container,
                backgroundColor:'white',
                borderColor:'#F57328',
                borderWidth:1
            },
            title:{
                ...base_style.title,
                color:'#F57328'
            }
        }
    )
}