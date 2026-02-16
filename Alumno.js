import { StyleSheet, Text, View, Image } from 'react-native'; // image

export default function Alumno(props) {
  const fotoUrl = `https://picsum.photos/seed/${props.matricula}/100`;
  
  return (
    <View style={styles.card}>
      <Image source={{ uri: fotoUrl }} style={styles.foto} />
      
      <View style={styles.infoContainer}>
         <Text style={styles.textoNombre}>Nombre: {props.nombre}</Text>
         <Text style={styles.textoMatricula}>Matrícula: {props.matricula}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row', 
    backgroundColor: '#dc5c5c', 
    padding: 15,
    borderRadius: 10,
    marginVertical: 8,
    borderWidth: 1,
    borderColor: '#921515',
    alignItems: 'center', 
    elevation: 2,
  },
  foto: {
    width: 60, 
    height: 60,
    borderRadius: 30, 
    marginRight: 15,
    borderWidth: 2,
    borderColor: '#fff',
  },
  infoContainer: {
    flex: 1, 
  },
  textoNombre: {
    fontSize: 18,
    fontWeight: '600',
    color: '#fff',
  },
  textoMatricula: {
    fontSize: 14,
    color: '#eee',
  }
});
