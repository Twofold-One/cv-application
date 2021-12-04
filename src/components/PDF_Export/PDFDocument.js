// Alternative PDF, more hard PDF Export

// import React from 'react';
// import {
//     Image,
//     Page,
//     Text,
//     View,
//     Document,
//     StyleSheet,
// } from '@react-pdf/renderer';

// const styles = StyleSheet.create({
//     CVHeader: {
//         backgroundColor: '#005cb2',
//         display: 'flex',
//         flexDirection: 'row',
//         color: 'white',
//         justifyContent: 'flex-start',
//         alignItems: 'center',
//         flexWrap: 'wrap',
//         margin: '10px',
//     },
//     it: {
//         fontStyle: 'italic',
//     },
//     pre: {
//         backgroundColor: '#1e88e5',
//     },
//     CVHeaderPhoto: {
//         display: 'flex',
//         justifyContent: 'center',
//         width: '180px',
//         height: '180px',
//         border: '1px solid black',
//         objectFit: 'contain',
//         backgroundColor: 'lightgrey',
//     },
//     CVHeaderInfo1: {
//         margin: '10px',
//     },
//     CVHeaderInfo2: {
//         width: '50%',
//         display: 'flex',
//         flexDirection: 'column',
//         justifyContent: 'center',
//         alignItems: 'flex-start',
//         margin: '10px',
//     },
//     header1: {
//         fontSize: '30px',
//         fontWeight: 'bold',
//     },
//     CVInfo: {
//         margin: '10px',
//     },
//     CVInfoH2: {
//         textAlign: 'start',
//         backgroundColor: 'lightgrey',
//     },
//     CVInfoOther: {
//         display: 'flex',
//         flexDirection: 'row',
//         justifyContent: 'space-between',
//         alignItems: 'center',
//         margin: '10px 0',
//         textAlign: 'start',
//     },
//     CVInfoOtherP: {
//         fontStyle: 'italic',
//         color: 'grey',
//     },
//     header2: {
//         fontSize: '20px',
//         fontWeight: 'bold',
//     },
// });

// class PDFDocument extends React.Component {
//     renderEducationInfo = () => {
//         const { edInstitution, edDegree, edSubject, edFrom, edTo } = this.props;
//         let edSub = [];
//         for (let i = 0; i < edInstitution.length; i += 1) {
//             edSub.push(
//                 <View style={styles.CVInfoOther} key={i}>
//                     <View>
//                         <Text style={styles.header2}>{edInstitution[i]}</Text>
//                         <Text style={styles.CVInfoOtherP}>
//                             {edDegree[i]}, {edSubject[i]}
//                         </Text>
//                     </View>
//                     <View>
//                         <Text style={styles.CVInfoOtherP}>
//                             {edFrom[i]} to {edTo[i]}
//                         </Text>
//                     </View>
//                 </View>
//             );
//         }
//         return edSub;
//     };

//     renderExperienceInfo = () => {
//         const { expCompanyName, expPosition, expFrom, expTo, expMainTasks } =
//             this.props;
//         let edSub = [];
//         for (let i = 0; i < expCompanyName.length; i += 1) {
//             edSub.push(
//                 <View key={i}>
//                     <View style={styles.CVInfoOther}>
//                         <View>
//                             <Text style={styles.header2}>
//                                 {expCompanyName[i]}
//                             </Text>
//                             <Text style={styles.CVInfoOtherP}>
//                                 {expPosition[i]}
//                             </Text>
//                         </View>
//                         <View>
//                             <Text style={styles.CVInfoOtherP}>
//                                 {expFrom[i]} to {expTo[i]}
//                             </Text>
//                         </View>
//                     </View>
//                     <View>
//                         <Text>{expMainTasks[i]}</Text>
//                     </View>
//                 </View>
//             );
//         }
//         return edSub;
//     };
//     render() {
//         const {
//             photoURL,
//             firstName,
//             lastName,
//             position,
//             phone,
//             address,
//             email,
//         } = this.props;
//         return (
//             <div>
//                 <Document>
//                     <Page size="A4">
//                         <View style={styles.CVHeader}>
//                             <View style={styles.CVHeaderPhoto}>
//                                 {/* <Image src={photoURL}></Image> */}
//                             </View>
//                             <View>
//                                 <View style={styles.CVHeaderInfo1}>
//                                     <Text style={styles.header1}>
//                                         {firstName} {lastName}
//                                     </Text>
//                                     <Text style={styles.it}>{position}</Text>
//                                 </View>
//                                 <View style={styles.CVHeaderInfo2}>
//                                     <Text>Phone: {phone}</Text>
//                                     <Text>Address: {address}</Text>
//                                     <Text>Email: {email}</Text>
//                                 </View>
//                             </View>
//                         </View>
//                         <View>
//                             <View style={styles.CVInfo}>
//                                 <Text style={styles.CVInfoH2}>EDUCATION</Text>
//                                 {/* {this.renderEducationInfo()} */}
//                             </View>
//                             <View style={styles.CVInfo}>
//                                 <Text style={styles.CVInfoH2}>EXPERIENCE</Text>
//                                 {/* {this.renderExperienceInfo()} */}
//                             </View>
//                         </View>
//                     </Page>
//                 </Document>
//             </div>
//         );
//     }
// }

// export default PDFDocument;
