import React, { useState} from "react";
import { View, Text, TextInput, TouchableOpacity, Vibration } from "react-native";
import Result from "./ResultIMC";
import styles from './style'


export default function Form(){

const [height, setHeight]= useState(null)
const [weight, setWeight]= useState(null)
const [messageResult, setMessageImc]= useState("prencha o peso e a altura")
const [imc, setImc]= useState()
const [textButton, setTextButton] = useState("Calcular")
const [errorMessage, setErrorMessage] = useState(null)

    function imcCalculator(){
        return setImc ((weight/(height*height)).toFixed(2))
    }

    function verification(){
        if(imc == null){
            Vibration.vibrate();
            setErrorMessage("campo obrigatorio*")
        }
    }

    function validationImc (){
        if(weight != null && height != null) {
            imcCalculator()
            setHeight(null)
            setWeight(null)
            setMessageImc("Seu imc é igual")
            setTextButton("Calcular Novamente")
            setErrorMessage(null)
            return
        }
        verification()
        setImc(null)
        setTextButton("Calcular")
        setMessageImc("preencha o peso e a altura")
        
    }

    return(
        <View style={styles.formContext}>
            <View style={styles.form}>
                <Text style={styles.formLabel}>Altura</Text>
                <Text style={styles.errorMessage}>{errorMessage}</Text>
                <TextInput style={styles.input}
                onChangeText={setHeight}
                value={height}
                placeholder="Ex. 1.78"
                keyboardType="numeric"
                  />


                <Text style={styles.formLabel}>Peso</Text>
                <Text style={styles.errorMessage}>{errorMessage}</Text>
                <TextInput style={styles.input}
                onChangeText={setWeight}
                value={weight}
                placeholder="Ex. 80.678"
                keyboardType="numeric"
                  />

                <TouchableOpacity 
                style={styles.ButtonCalculator}
                onPress={() =>{validationImc()}}
                >
                    <Text style={styles.textButtonCalculator}>
                        {textButton}
                    </Text>

                </TouchableOpacity>

            </View>
            <Result messageResult={messageResult} result={imc}/>
        </View>
    );
}