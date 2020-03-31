import React, {useState} from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function App() {
	const [ OutputText, setOutputText] = useState('Aperte para Gerar os Numero');
	return (
			<View style={styles.container}>
			<Text>{OutputText}</Text>
			<Button title="Gerar Numeros" onPress={() => {setOutputText(sorteiaNumeros)}}/>
				</View>
	);
}

const styles = StyleSheet.create({
	container:{ 
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',
	},
});



function sorteia() {
	return Math.round(Math.random() * 100)
}
function sorteiaNumeros() {
	let megaSena = []
	let numero = 1
	while(numero <= 6) {
		let numeroAleatorio = sorteia()
		let achou = false
		if(numeroAleatorio !== 0 && numeroAleatorio <= 60) {
			for(posicao = 0; posicao < megaSena.length; posicao++) {
				if(megaSena[posicao] == numeroAleatorio) {
					achou = true
					break
				}
			}
			if(achou == false) {
				megaSena.push(numeroAleatorio)
				numero++
			}
		}
	}

	alert("Os números da sorte são: " + megaSena)
}


