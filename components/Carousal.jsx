import * as React from 'react';
import { Dimensions, Text, View, Image, StyleSheet } from 'react-native';
import Carousel from 'react-native-reanimated-carousel';

const MyCarousel = ({data}) => {
    const width = Dimensions.get('window').width - 40;


    return (
        <View style={{flex: 1}}>
            <Carousel
            loop
            width={width}
            height={width / 2}
            autoPlay={true}
            data={data}
            scrollAnimationDuration={1000}
            renderItem={({ item, index }) => (
                <View
                    style={styles.carousel}>
                    <Image source={item.i} resizeMode='contain' style={styles.image}/>
                    <Text style={styles.text}>{item.t}</Text>  
                </View>
            )}
            /> 
   
        </View>
    );
}
const styles = StyleSheet.create({
    carousel:{
        flex: 1,
        borderWidth: 0,
        width:'100%',
        justifyContent: 'center',
    },
   image:{
        flex: 1, 
        width: '100%', 
        height: '100%',
        resizeMode: 'stretch',  
        borderRadius: 20
   }, 
   text:{
        textAlignVertical: "center", 
        textAlign: "center", 
        bottom: 30, 
        fontSize: 20, 
        color: 'white',  
        fontWeight: 'bold'
   }

        
});
export default MyCarousel;


