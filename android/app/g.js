/**
 * Copyright (c) 2017-present, Wonday (@wonday.org)
 * All rights reserved.
 *
 * This source code is licensed under the MIT-style license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';
import { StyleSheet, Dimensions, View, Text } from 'react-native';
import Pdf from 'react-native-pdf';

export default class PDFExample extends React.Component {
    render() {
       // const source = { uri: 'https://pepa.holla.cz/wp-content/uploads/2016/12/Learning-React-Native.pdf', cache: true };
        //const source = require('./');  // ios only
        //const source = {uri:'bundle-assets://test.pdf' };
        const source = {uri:'file:///content://com.android.providers.media.documents/document/document%3A1000000033/30-days-of-react-ebook-fullstackio.pdf',cache: true};
        //const source = {uri:"data:application/pdf;base64,JVBERi0xLjcKJc..."};
        //const source = {uri:"content://com.example.blobs/xxxxxxxx-...?offset=0&size=xxx"};
        //const source = {uri:"blob:xxxxxxxx-...?offset=0&size=xxx"};
console.log('9',source)
        return (
            <View style={styles.container}>
              <Text>PDf</Text>
                <Pdf
                    source={source}
                    onLoadComplete={(numberOfPages,filePath) => {
                        console.log(`Number of pages: ${numberOfPages}`);
                    }}
                    onPageChanged={(page,numberOfPages) => {
                        console.log(`Current page: ${page}`);
                    }}
                    onError={(error) => {
                        console.log(error,"h");
                    }}
                    onPressLink={(uri) => {
                        console.log(`Link pressed: ${uri}`);
                    }}
                    style={styles.pdf}/>
                    <Text>PDf</Text>
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
        backgroundColor:'red'
    },
    pdf: {
       height:10,
        width:Dimensions.get('window').width - 50,
        height:Dimensions.get('window').height - 150,
        backgroundColor:'green'
    }
});
