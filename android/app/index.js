import { View, Text, StyleSheet, Dimensions } from 'react-native';
import React from 'react';
import Pdf from 'react-native-pdf';

const PdfRead = () => {
    const PdfResource = { uri: 'https://www.tutorialspoint.com/react_native/react_native_tutorial.pdf', cache: true };
    console.log("45")
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Bug Ninza</Text>
            <Pdf 
                trustAllCerts={false}
                source={PdfResource}
                style={styles.pdf}
                onLoadComplete={(numberOfPages, filePath) => {
                    console.log(`number of pages: ${numberOfPages}`);
                }}
                onPageChanged={(page, numberOfPages) => {
                    console.log(`Current page: ${page}`);
                }}
                onError={(error) => {
                    console.log(error);
                }}
                onPressLink={(uri) => {
                    console.log(`Link pressed: ${uri}`);
                }}
            />
        </View>
    );
};

export default PdfRead;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    title: {
        fontSize: 25,
        textAlign: 'center',
        fontWeight: 'bold',
        marginBottom: 10
    },
    pdf: {
        flex: 1,
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
    }
});
