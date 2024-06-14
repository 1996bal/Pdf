import React from 'react';
import { StyleSheet, Dimensions, View, Button } from 'react-native';
import Pdf from 'react-native-pdf';
import { pick } from '@react-native-documents/picker'
export default class PDFExample extends React.Component {
    render() {
        const source = { uri: 'https://dl.ebooksworld.ir/motoman/Apress.React.Native.for.Mobile.Development.2nd.Edition.www.EBooksWorld.ir.pdf', cache: true };
        //const source = require('./test.pdf');  // ios only
        //const source = {uri:'bundle-assets://test.pdf' };
        //const source = {uri:'file:///sdcard/test.pdf'};
        //const source = {uri:"data:application/pdf;base64,JVBERi0xLjcKJc..."};
        //const source = {uri:"content://com.example.blobs/xxxxxxxx-...?offset=0&size=xxx"};
        //const source = {uri:"blob:xxxxxxxx-...?offset=0&size=xxx"};
        console.log(source, "7")
        return (
            <View style={styles.container}>
                <Pdf
                    source={source}
                    trustAllCerts={false}
                    onLoadComplete={(numberOfPages, filePath) => {
                        console.log(`Number of pages: ${numberOfPages}`);
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
                    style={styles.pdf} />
                <Button
                    title="open file"
                    onPress={async () => {
                        try {
                            const [result] = await pick({
                                mode: 'open',
                            })
                            console.log(result)
                        } catch (err) {
                            // see error handling
                        }
                    }}
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        marginTop: 25,
    },
    pdf: {

        width: Dimensions.get('window').width - 120,
        height: 300,
    }
});