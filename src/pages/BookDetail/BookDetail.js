import React from 'react'
import { SafeAreaView, Text, View, Image, ScrollView, TouchableOpacity } from 'react-native';
import DetailCard from '../../components/DetailCard/DetaiCard';
import styles from './BookDetailStyle';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import database from '@react-native-firebase/database';

const BookDetail = ({ route }) => {

    

    const { book } = route.params;

    const addToFavorites = () => {
        //  const {item} = route.params;

        //   console.log(route.params.book.volumeInfo.title);
        //  console.log(item.books.volumeInfo.title);
        //    const {item} = route.params;

        //    console.log(item);
        const bookdata = {

            book_name: route.params.book.volumeInfo.title,
            author: route.params.book.volumeInfo.authors,
            book_image: route.params.book.volumeInfo.imageLinks?.smallThumbnail
        }
        database().ref('favorites/').push(bookdata);
    }

    return (
        <ScrollView>

            <Text style={styles.title}>{book.volumeInfo.title} </Text>
            <Image style={styles.image} source={{ uri: book.volumeInfo.imageLinks?.smallThumbnail }} />
            <View >
                <Text style={styles.inner_container}>Author: {book.volumeInfo.authors}</Text>
                <Text style={styles.inner_container}>Publisher: {book.volumeInfo.publisher}</Text>
            </View>
            <View style={styles.description}>
                <Text>{book.volumeInfo.description}</Text>
            </View>
            {/* <DetailCard book={book.volumeInfo.title} image={book.volumeInfo.imageLinks?.smallThumbnail}/>  */}

            <TouchableOpacity style={styles.footer}
                onPress={addToFavorites}>

                <Text style={styles.footer_text}>Add to Favorites</Text>
                <Icon name='heart' color='#F57328' size={20} />
            </TouchableOpacity>
        </ScrollView>
    )
}

export default BookDetail;