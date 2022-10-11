import React from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native';
import styles from './FavoritesCardStyle';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
const FavoritesCard = ({ favoriteBook, deleteFavoriteBook }) => {

    return (
        <View style={styles.container}>
            <Image style={styles.image} source={{ uri: favoriteBook.book_image }} />
            <View style={styles.inner_container}>

                <Text style={styles.book_name}>{favoriteBook.book_name}</Text>
                <Text style={styles.author}>{favoriteBook.author[0]}</Text>
            </View>
            <TouchableOpacity style={styles.footer}
                onPress={deleteFavoriteBook}>
                <View style={styles.remove_favorites_container}>
                    <Text style={styles.remove_favorites_text}>Remove
                        <Icon
                            name='close-circle-outline'
                            size={20}
                            color='#F57328' /></Text>
                </View>
            </TouchableOpacity>


        </View>
    )
}

export default FavoritesCard;