import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function nossahistoria() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Nossa História</Text>
      <Text style={styles.text}>
        Bem-vindo ao Recanto Açaí! Localizado no coração de Fortaleza - CE, no
        bairro Maraponga, somos apaixonados por trazer o melhor do sabor
        amazônico para nossa comunidade. Desde a nossa fundação, nos dedicamos a
        oferecer produtos de alta qualidade, feitos com ingredientes frescos e
        autênticos. Venha nos visitar e experimente o verdadeiro sabor do açaí!
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#7c47b9',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FFF',
    marginBottom: 20,
    textAlign: 'center',
  },
  text: {
    fontSize: 16,
    color: '#FFF',
    textAlign: 'center',
    lineHeight: 24,
  },
});
