import React from 'react';
import{View, Text, StyleSheet, TouchableOpacity} from 'react-native';

const ContatoItem =(props) =>{
    return(
        <TouchableOpacity onLongPress={props.onDelete.bind(this,props.chave)}> 
            <View style={styles.itemNaLista}>
                <Text>({props.id})Nome: {props.nome}</Text>
                <Text>       Telefone: {props.numero}</Text>
            </View>
        </TouchableOpacity> 
    );
}
const styles = StyleSheet.create({
    itemNaLista:{
        padding:5,
        backgroundColor:'#CCC',
        borderColor:'#000',
        borderWidth:1,
        marginBottom:8,
        borderRadius:5
      }
});
export default ContatoItem;