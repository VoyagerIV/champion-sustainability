import * as React from 'react';
import { Dimensions, Text, View, Image } from 'react-native';
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
                    style={{
                        flex: 1,
                        borderWidth: 0,
                        width:'100%',
                        justifyContent: 'center',
                        
                        
                    }}
                >
                    
                    <Image source={item.i} resizeMode='contain' style={{flex: 1, width: '100%', height: '100%',resizeMode: 'stretch',  borderRadius: 20}}/>
                    <Text style={{ textAlignVertical: "center", textAlign: "center", bottom: 30, fontSize: 20, color: 'white',  fontWeight: 'bold'}}>{item.t}</Text>
                    
                </View>
            )}
            /> 
   
        </View>
    );
}

export default MyCarousel;


