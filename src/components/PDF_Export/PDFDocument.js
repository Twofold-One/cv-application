import React from 'react';
import {
    Image,
    Page,
    Text,
    View,
    Document,
    StyleSheet,
} from '@react-pdf/renderer';

const styles = StyleSheet.create({});

// TODO
class PDFDocument extends React.Component {
    render() {
        const { photoURL } = this.props;
        return (
            <Document>
                <Page size="A4">
                    <View>
                        <View>
                            <Image
                                src={
                                    photoURL ||
                                    'https://petsworlds.ru/images/sampledata/Profile_avatar_placeholder_large.png'
                                }
                            />
                        </View>
                        <View>
                            <h2>123</h2>
                        </View>
                    </View>
                </Page>
            </Document>
        );
    }
}

export default PDFDocument;
