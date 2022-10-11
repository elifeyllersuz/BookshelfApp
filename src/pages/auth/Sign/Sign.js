import React, { useState } from 'react'
import { View, Text, Image } from 'react-native';
import Input from '../../../components/Input';
import Button from '../../../components/Button/Button';
import styles from './SignStyle';
import authErrorMessageParser from '../../../utils/authErrorMessageParser';
import { showMessage } from 'react-native-flash-message';
import auth from '@react-native-firebase/auth';
import { Formik } from 'formik';

const initialFormValues = {
    usermail: '',
    password: '',
    repassword: ''
}

const Sign = ({ navigation }) => {
    const [loading,setLoading] = useState(false);

    function goToLogin() {
        navigation.goBack();
    }

    async function handleFormSubmit(formValues) {

        if(formValues.password != formValues.repassword){
            showMessage({
                message:'Passwords do not match!',
                type:'danger'
            });
            return;
        }
        try{
          auth().createUserWithEmailAndPassword(
            formValues.usermail,
            formValues.repassword,
          );
          showMessage({
            message:'User created',
            type:'success'
          })
          navigation.navigate('LoginPage');
          setLoading(false);
        }catch(error){
          showMessage({
            message:authErrorMessageParser(error.code),
            type:'danger'
          })
          setLoading(false);
        }
        
    }

    return (
        <View style={styles.container}>
            <Image style={styles.logo} source={require('../../../assets/images/trabook.jpg')} />
            <Formik initialValues={initialFormValues} onSubmit={handleFormSubmit}>
                {({ values, handleChange, handleSubmit }) => (
                    <>
                        <Input
                            value={values.usermail}
                            onType={handleChange('usermail')}
                            placeholder='enter your email...' />
                        <Input
                            value={values.password}
                            onType={handleChange('password')}
                            placeholder='enter your password...'
                            isSecure />
                        <Input
                            value={values.repassword}
                            onType={handleChange('repassword')}
                            placeholder='enter your password again...'
                            isSecure />
                        <Button text='Save' onPress={handleSubmit} />
                    </>
                )}
            </Formik>
            <Button text='Go Back' onPress={goToLogin} />


        </View>
    )
}

export default Sign;