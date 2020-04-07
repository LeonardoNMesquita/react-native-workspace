import React,{useState} from 'react';
import {View,TextInput, Button, StyleSheet} from 'react-native'

const ContatoInput = (props)=>{
  const[nome, setNome]=useState('');
  const[numero, setNumero]=useState('');
  //captura o texto digitado
  const capturaNome=(nome)=>{
    setNome(nome)
  };
  const capturaNumero=(numero)=>{
    setNumero(numero)
  };
    return(
        <View style={styles.contatosView}>
        {/*usuario insere o contato*/}
        <TextInput placeholder="nome"style={styles.contatosInputText} onChangeText={capturaNome} value={nome}/>
        <TextInput placeholder="numero"style={styles.contatosInputText} onChangeText={capturaNumero} value={numero}/>
        <Button title="Add"
        onPress={()=>props.onAdicionarContato(nome, numero)} />
      </View>
    );
}
const styles = StyleSheet.create({
    contatosView:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:"center"
      },
      contatosInputText:{
        width:'50%',
        borderBottomColor:'black',
        borderBottomWidth:1,
        padding:2,
        borderRadius:5
      }
});

export default ContatoInput;