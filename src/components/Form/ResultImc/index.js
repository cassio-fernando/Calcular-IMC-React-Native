import React from "react";
import { View, Text } from "react-native";
import styles from "./style";

export default function Result(props){
    return(
        <View style={styles.resultImc}>
            <Text style={styles.information} >{props.messageResult}</Text>
            <Text style={styles.numberImc}>{props.result}</Text>
            
        </View>
    );
}