import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const LembreteItem = () => {
    return (
        <TouchablaOpacity onPress={props.onDelete.bind(this, props.chave)}>

        <View style={styles.itemNaLista}>
            <Text>{props.lembrete}</Text>
        </View>
        </TouchablaOpacity>
    )
}

const styles = StyleSheet.create({

    itemNaLista: {
      padding: 12,
      backgroundColor: '#CCC',
      borderColor: '#000',
      borderWidth: 1,
      marginBottom: 8,
      borderRadius: 8
    }
  });

  export default LembreteItem;