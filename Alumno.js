import { StyleSheet, Text, View } from 'react-native';

export function Alumno(props) {
  return (
    <View style={styles.card}>
       <Text style={styles.textoNombre}>Nombre: {props.nombre}</Text>
       <Text style={styles.textoMatricula}>Matrícula: {props.matricula}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#dc5c5c', 
    padding: 15,
    borderRadius: 10,
    marginVertical: 8,
    borderWidth: 1,
    borderColor: '#921515', 
    shadowColor: "#000",
    shadowOpacity: 0.05,
    elevation: 2,
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