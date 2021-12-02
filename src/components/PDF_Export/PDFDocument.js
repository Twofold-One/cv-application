import React from 'react';
import {
    Image,
    Page,
    Text,
    View,
    Document,
    StyleSheet,
} from '@react-pdf/renderer';
import { style } from '@mui/system';

const styles = StyleSheet.create({
    CVHeader: {
        backgroundColor: '#005cb2',
        display: 'flex',
        flexDirection: 'row',
        color: 'white',
        justifyContent: 'flex-start',
        alignItems: 'center',
        flexWrap: 'wrap',
        margin: '10px',
    },
    it: {
        fontStyle: 'italic',
    },
    pre: {
        backgroundColor: '#1e88e5',
    },
    CVHeaderPhoto: {
        display: 'flex',
        justifyContent: 'center',
        width: '180px',
        height: '180px',
        border: '1px solid black',
        objectFit: 'contain',
        backgroundColor: 'lightgrey',
    },
});

// TODO
class PDFDocument extends React.Component {
    render() {
        const { photoURL } = this.props;
        return (
            <Document>
                <Page size="A4">
                    <View style={styles.CVHeader}>
                        <View style={styles.CVHeaderPhoto}></View>
                        <View>
                            <Text>123</Text>
                        </View>
                    </View>
                </Page>
            </Document>
        );
    }
}

export default PDFDocument;
