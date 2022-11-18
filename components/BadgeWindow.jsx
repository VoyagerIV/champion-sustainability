import { StyleSheet, View, Text, Image, TouchableOpacity } from "react-native";



const BadgeWindow = ({ imgSource, isShared, Title, Date, Caption }) => {
    return (
        <View style={styles.container}>
            <View style={{ flex: 2, height: '100%' }}>
                <Image source={imgSource} style={styles.badge} />
            </View>
            <View style={styles.textContainer}>
                <Text style={styles.bTitle}>{Title}</Text>
                <Text style={styles.text}>{Date}</Text>
                <Text style={styles.text}>{Caption}</Text>
                {isShared ?
                    <TouchableOpacity style={styles.sharedBtn} >
                        <Text style={styles.title}>
                            Shared</Text>
                    </TouchableOpacity> :
                    <TouchableOpacity style={styles.shareBtn} >
                        <Text style={styles.title}>
                            Share</Text>
                    </TouchableOpacity>}
            </View>

        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        borderBottomWidth: 1,
        borderColor: "lightgray",
        width: '100%',
        flexDirection: 'row',
        height: 200
    },
    textContainer: {
        flex: 3,
        height: '100%',
        flexDirection: 'column',
        justifyContent: 'center'
    },
    badge: {
        resizeMode: 'contain',
        height: '80%',
        width: '80%'
    },
    bTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        // textAlignVertical: "center", 
        textAlign: "left",
        marginVertical: 10,
    },
    sharedBtn: {
        backgroundColor: '#DAF6E6',
        alignSelf: 'flex-end',
        padding: 10,
        marginRight: 0,
        height: 40,
        width: 140,
        borderRadius: 80,
        marginVertical: 9,
        alignItems: "center",
        justifyContent: "center",
    },
    shareBtn: {
        backgroundColor: '#FCB1B1',
        alignSelf: 'flex-end',
        padding: 10,
        marginRight: 0,
        height: 40,
        width: 140,
        borderRadius: 80,
        marginVertical: 9,
        alignItems: "center",
        justifyContent: "center",
    },
    text: {
        // textAlignVertical: "left",
        // textAlign: "left"
    },
    title: {
        color: "black",
        fontSize: 16,
        fontWeight: "bold",
    },
    btn: {
        height: 40,
        width: 140,
        borderRadius: 80,
        backgroundColor: "#3BB143",
        marginVertical: 9,
        alignItems: "center",
        justifyContent: "center",

    },

});

export default BadgeWindow;
