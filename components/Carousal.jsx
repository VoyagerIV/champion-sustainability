// import {StyleSheet, View, Image, ScrollView, Dimensions, Text} from 'react-native';

// const {width} = Dimensions.get("window");
// const height = width * 0.6;
// const images = [
//     'https://images.squarespace-cdn.com/content/v1/5369465be4b0507a1fd05af0/1528837069483-LD1R6EJDDHBY8LBPVHIU/randall-ruiz-272502.jpg?format=1500w',
//     'https://cdn.mos.cms.futurecdn.net/wtqqnkYDYi2ifsWZVW2MT4-1200-80.jpg',
// ]
// const Carousal = ({}) =>{
//         return(
//             <View style={styles.container}>
//                 <ScrollView 
//                     pagingEnabled 
//                     horizontal 
//                     showsHorizontalScrollIndicator={false}
//                     style={styles.container}
//                 >
//                     {
//                         images.map((image,index) => (
//                             <Image>
//                                 key={index}
//                                 source={{uri: image}}
//                                 style ={styles.image}
//                             </Image>
//                         ))
//                     }
//                 </ScrollView>
              
//                 {/* <View style={styles.padgination}>
//                     {
//                         images.map((i,k) =>(
//                             <Text key={k} style={k==this.state.active ? styles.textActive: styles.text}>•</Text>
//                         ))
//                     }
                    
//                 </View> */}
    
//             </View>
//         )
    
// }
// const styles = StyleSheet.create({
//     container:{
//         width, 
//         height,
//     },
//     text:{
//       color:'#425B76',
//       fontSize: 45,
//     },
//     textActive:{
//         color:'#00CA90',
//         fontSize: 45,
//         margin:3,
//       },
//     scroll:{
//         width, 
//         height, 
//     },
//     image:{
//         width, 
//         height, 
//         resizeMode: 'cover',
//     },
//     padgination:{
//         flexDirection:'row', 
//         position:'absolute', 
//         bottom:0, 
//         alignSelf:'center'
//     }

//   });

//   export default Carousal;

import Carousel from 'react-native-snap-carousel';

const Carousal = ({}) => {

        
}

export default Carousal;
