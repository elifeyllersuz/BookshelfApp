import React, { useState, useEffect } from 'react'
import { View, Text, FlatList, StyleSheet, ScrollView, StatusBar,TouchableOpacity } from 'react-native';
import Config from 'react-native-config';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import axios from 'axios';
import { Searchbar } from 'react-native-paper';

import BooksCard from '../../components/BooksCard';
import Loading from '../../components/Loading';
import Error from '../../components/Error';

const Books = ({ navigation }) => {
    const [psychologyData, setPsychologyData] = useState([]);
    const [politicialData, setPoliticialData] = useState([]);
    const [historyData, setHistoryData] = useState([]);
    const [philosophyData, setPhilosophyData] = useState([]);
    const [input, setInput] = useState("");
    // const [loading ,setLoading] = useState(true);

    // useEffect(() => {
    //     fetchData();
    // }, [])

    // const fetchData = async () => {
    //     const { psychologyData: newData1 } = await axios.get(Config.API_PSYCHOLOGY);
    //     setPsychologyData(newData1);

    //     const { politicialData: newData2 } = await axios.get(Config.API_POLITICIAL);
    //     setPoliticialData(newData2);

    //     const { historyData: newData3 } = await axios.get(Config.API_HISTORY);
    //     setHistoryData(newData3);

    //     const { philosophyData: newData4 } = await axios.get(Config.API_PHILOSOPHY);
    //     setPhilosophyData(newData4);


    // }

    useEffect(() => {
        async function fetchdata(loading, error) {
            await axios.get(Config.API_PHILOSOPHY).then((response) => {
                setPhilosophyData(response.data)
            })
            await axios.get(Config.API_POLITICIAL).then((response) => {
                setPoliticialData(response.data)
            }
            )

            await axios.get(Config.API_HISTORY).then((response) => {
                setHistoryData(response.data)
            })

            await axios.get(Config.API_PSYCHOLOGY).then((response) => {
                setPsychologyData(response.data)
            })


            if (loading) {
                return <Loading />
            }
            if (error) {
                return <Error />
            }
        }
        fetchdata()
    }, [])

    const goToBookDetail = book => {
        navigation.navigate('DetailScreen', { book });
    }


    const renderBook = ({ item }) => <BooksCard name={item.volumeInfo.title}
        author={item.volumeInfo.authors}
        image={item.volumeInfo.imageLinks?.smallThumbnail}
        onSelect={() => goToBookDetail(item)}
    />

    return (

      

        <ScrollView  style={styles.container} >
            {/* <View>
                <Searchbar placeholder='Search' 
                onChangeText={(text) => {
                    setInput(text);
                }} value={input}/>
                          <StatusBar style="auto"/>
            
            </View> */}
            <Text style={styles.book_type}>Psychology</Text>
            <View style={styles.input_container}>

                <FlatList data={psychologyData.items} renderItem={renderBook}
                    horizontal={true}
                />
            </View>
            <Text style={styles.book_type}> Politics</Text>
            <View style={styles.input_container}>
                <FlatList data={politicialData.items} renderItem={renderBook}
                    horizontal={true}
                />
            </View>
            <Text style={styles.book_type}> History</Text>
            <View style={styles.input_container}>
                <FlatList data={historyData.items} renderItem={renderBook}
                    horizontal={true}
                />
            </View >
            <Text style={styles.book_type} >Philosophy</Text>
            <View style={styles.input_container}>
                <FlatList data={philosophyData.items} renderItem={renderBook}
                    horizontal={true}
                />
            </View>
           
        </ScrollView>

        

 
       


         
    )


}

export default Books;

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    input_container: {
        flexDirection: 'row'

    },
    book_type: {
        fontSize: 20,
        fontWeight: 'bold',
        // fontStyle:'italic',
        color: '#D36B00'
    },
  
})