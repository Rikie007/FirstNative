import React from "react";

import {
    SafeAreaView,
    View,
    Text,
    StyleSheet,
    useColorScheme
} from 'react-native';


function AppPro():JSX.Element{
    const isDarkMode = useColorScheme() ==='dark'
    return(
        <SafeAreaView>

           <View style={styles.container}>
                <Text style={isDarkMode ? styles.WhiteText : styles.BlackText}>
                    Hello
                </Text>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        justifyContent:'center'
    },

    WhiteText:{
        color : '#FFFFFF'
    },
    BlackText:{
        color : '#000000'
    }
})

export default AppPro