import * as React from 'react';
import { Dimensions, Text, View, Image } from 'react-native';
import Carousel from 'react-native-reanimated-carousel';


const MyCarousel = () => {
    const width = Dimensions.get('window').width;
    const data = [
        'https://images.squarespace-cdn.com/content/v1/5369465be4b0507a1fd05af0/1528837069483-LD1R6EJDDHBY8LBPVHIU/randall-ruiz-272502.jpg?format=1500w',
        'https://www.google.com/imgres?imgurl=https%3A%2F%2Fcdn.mos.cms.futurecdn.net%2FwtqqnkYDYi2ifsWZVW2MT4-1200-80.jpg&imgrefurl=https%3A%2F%2Fwww.livescience.com%2F38163-where-beach-sand-comes-from.html&tbnid=rnw6gf2fXmo2CM&vet=12ahUKEwig7fOy5rT7AhWDKbcAHa2FCrQQMygEegUIARDlAQ..i&docid=jVPH5Of3CkGmAM&w=1000&h=667&q=beach&client=safari&ved=2ahUKEwig7fOy5rT7AhWDKbcAHa2FCrQQMygEegUIARDlAQ'
    ]

    return (
        <View style={{ flex: 1 }}>
            <Carousel
                loop
                width={width}
                height={width / 2}
                autoPlay={true}
                //data={[require("../assets/plastic-recycling.png")]}
                data={[data]}
                scrollAnimationDuration={1000}
                //onSnapToItem={(index) => console.log('current index:', index)}
                renderItem={({ item, index }) => (
                    <View
                        style={{
                            flex: 1,
                            borderWidth: 1,
                            justifyContent: 'center',
                        }}
                    >
                        <Text style={{ textAlign: 'center', fontSize: 30 }}>
                            {/* {index} */}
                            <Image source={item} />
                        </Text>
                    </View>
                )}
            />
        </View>
    );
}

export default MyCarousel;
