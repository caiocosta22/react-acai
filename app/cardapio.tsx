import React from 'react';
import { View, Text, StyleSheet, Image, FlatList } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

const produtos = [
  {
    id: '1',
    titulo: 'Açaí Clássico',
    preco: 'R$ 12,00',
    descricao: 'Açaí batido com banana e acompanhado de granola crocante.',
    imagem: require('@/assets/images/acai.jpeg'), // Substitua pelo caminho correto
  },
  {
    id: '2',
    titulo: 'Açaí Gourmet',
    preco: 'R$ 18,00',
    descricao: 'Açaí com leite condensado, chocolate e um toque de creme de avelã.',
    imagem: require('@/assets/images/acai.jpeg'), // Substitua pelo caminho correto
  },
  {
    id: '3',
    titulo: 'Açaí Tropical',
    preco: 'R$ 15,00',
    descricao: 'Açaí com manga, coco ralado e um toque refrescante de hortelã.',
    imagem: require('@/assets/images/acai.jpeg'), // Substitua pelo caminho correto
  },
  {
    id: '4',
    titulo: 'Açaí com Morango',
    preco: 'R$ 14,00',
    descricao: 'Açaí cremoso coberto com morangos frescos e mel.',
    imagem: require('@/assets/images/acai.jpeg'), // Substitua pelo caminho correto
  },
  {
    id: '5',
    titulo: 'Açaí Proteico',
    preco: 'R$ 20,00',
    descricao: 'Açaí com whey protein, pasta de amendoim e castanhas.',
    imagem: require('@/assets/images/acai.jpeg'), // Substitua pelo caminho correto
  },
  {
    id: '6',
    titulo: 'Açaí Kids',
    preco: 'R$ 10,00',
    descricao: 'Açaí em uma porção menor, com confeitos coloridos e calda de chocolate.',
    imagem: require('@/assets/images/acai.jpeg'), // Substitua pelo caminho correto
  },
  {
    id: '7',
    titulo: 'Açaí Fit',
    preco: 'R$ 16,00',
    descricao: 'Açaí sem açúcar, acompanhado de frutas frescas e chia.',
    imagem: require('@/assets/images/acai.jpeg'), // Substitua pelo caminho correto
  },
  {
    id: '8',
    titulo: 'Açaí Energético',
    preco: 'R$ 18,00',
    descricao: 'Açaí com xarope de guaraná, banana e aveia, perfeito para dar energia!',
    imagem: require('@/assets/images/acai.jpeg'), // Substitua pelo caminho correto
  },
  {
    id: '9',
    titulo: 'Açaí de Verão',
    preco: 'R$ 14,00',
    descricao: 'Açaí com abacaxi e raspas de limão, uma combinação refrescante.',
    imagem: require('@/assets/images/acai.jpeg'), // Substitua pelo caminho correto
  },
];


export default function Cardapio() {
  const renderItem = ({ item }: { item: typeof produtos[0] }) => (
    <View style={styles.container}>
      <Image source={item.imagem} style={styles.image} />
      <View style={styles.info}>
        <Text style={styles.title}>{item.titulo}</Text>
        <Text style={styles.price}>{item.preco}</Text>
        <Text style={styles.description}>{item.descricao}</Text>
      </View>
    </View>
  );

  return (
    <View style={styles.screen}>
      <LinearGradient
        // Background Linear Gradient
        colors={['#7c47b9', '#00d4ff']}
        style={styles.background}
      >
        <Text style={styles.header}>Cardápio</Text>
        <FlatList
          data={produtos}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
        />
      </LinearGradient>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#7c47b9'
  },
  background: {
    flex:1,
    paddingHorizontal:10,
    paddingVertical: 40
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
    color: '#fff',
  },
  container: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    marginBottom: 10,
    borderRadius: 10,
    overflow: 'hidden',
    elevation: 3, // Para sombra no Android
    shadowColor: '#000', // Para sombra no iOS
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    paddingHorizontal: 10,
  },
  image: {
    width: 80,
    height: 80,
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
    marginVertical:10
  },
  info: {
    flex: 1,
    padding: 10,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 5,
  },
  price: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#7c47b9',
    marginBottom: 5,
  },
  description: {
    fontSize: 12,
    color: '#666',
  },
});
