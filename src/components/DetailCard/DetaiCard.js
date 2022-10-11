import React from 'react'
import { SafeAreaView,View,Text,Image,TouchableWithoutFeedback } from 'react-native';
import styles from './DetailCardStyle';

const DetailCard = ({book,image,onSelect}) => {

    return(

       <TouchableWithoutFeedback onPress={onSelect}>
        <View style={styles.container}>
            <Image style={styles.image} source={{uri:image}}/>
            <View style={styles.book_container}>
             <Text style={styles.title}>{book.volumeInfo}</Text>
            </View>
        </View>
       </TouchableWithoutFeedback>
    )
}

export default DetailCard;