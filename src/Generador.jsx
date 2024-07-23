import React from 'react';
import { Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer';

const styles = StyleSheet.create({
  page: {
    flexDirection: 'column',
    backgroundColor: '#FFFFFF',
    padding: 20,
  },
  section: {
    margin: 10,
    padding: 10,
    fontSize: 12
  },
  box: {
    margin: 10,
    padding: 10,
    fontSize: 12
  },
});

const Generador = ({ formData }) => {
  const formatBoolean = (value) => value ? 'Sí' : 'No';

  const checkboxes = [
    { label: 'Artritis', value: formData.art },
    { label: 'Diabetes', value: formData.diab },
    { label: 'Problemas del corazón', value: formData.hrtp },
    { label: 'Osteoporosis', value: formData.oste },
    { label: 'Problemas circulatorios', value: formData.cirp },
    { label: 'Epilepsia/convulsiones', value: formData.eps },
    { label: 'Hipertensión', value: formData.pres },
    { label: 'Ciática', value: formData.sci },
    { label: 'Enfermedad contagiosa', value: formData.cont },
    { label: 'Dolores de cabeza/migraña', value: formData.mig },
    { label: 'Inflamación de la articulación', value: formData.inflam },
    { label: 'Venas varicosas', value: formData.vein },
  ];

  return (
    <Document>
      <Page style={styles.page}>
        <View style={styles.section}>
          <Text>Nombre: {formData.name}</Text>
        </View>
        <View style={styles.section}>
          <Text>Fecha de Nacimiento: {formData.date}</Text>
        </View>
        <View style={styles.section}>
          <Text>Ciudad: {formData.city}</Text>
        </View>
        <View style={styles.section}>
          <Text>Estado: {formData.state}</Text>
        </View>
        <View style={styles.section}>
          <Text>Dirección: {formData.address}</Text>
        </View>
        <View style={styles.section}>
          <Text>Teléfono: {formData.mobileNumber}</Text>
        </View>
        <View style={styles.section}>
          <Text>Email: {formData.email}</Text>
        </View>
        <View style={styles.section}>
          <Text>¿Cómo te enteraste de nosotros?: {formData.Prg1}</Text>
        </View>
        <View style={styles.section}>
          <Text>¿Cuál es tu ocupación?: {formData.Prg2}</Text>
        </View>
        <View style={styles.section}>
          <Text>¿Cuál es su objetivo principal hoy (recuperación de una lesión, alivio del dolor, relajación)?: {formData.Prg3}</Text>
        </View>
        <View style={styles.section}>
          <Text>¿Estás embarazada?: {formData.Prg4}</Text>
        </View>
        <View style={styles.section}>
          <Text>Si es así, ¿cuántas semanas?: {formData.Prg5}</Text>
        </View>
        <View style={styles.section}>
          <Text>¿Tienes alergias? (Por favor, explique): {formData.Prg6}</Text>
        </View>
        <View style={styles.section}>
          <Text>¿Está tomando actualmente algún medicamento? Si es así, ¿cuál?: {formData.Prg7}</Text>
        </View>
        <View style={styles.section}>
          <Text>Anota cualquier lesión o dolor que hayas experimentado en el pasado, incluido cualquier trauma importante (cirugía o accidente).: {formData.Prg8}</Text>
        </View>
        <View style={styles.section}>
          <Text>¿Alguna vez has experimentado un masaje profesional?: {formData.Prg9}</Text>
        </View>
        <View style={styles.section}>
          <Text>¿Preferencia de presión?: {formData.Prg10}</Text>
        </View>
        <View style={styles.section}>
          <Text>¿Hay alguna zona del cuerpo en la que le gustaría que el terapeuta se centrara?: {formData.Prg11}</Text>
        </View>
        <View style={styles.section}>
          <Text>¿Existen zonas del cuerpo que el terapeuta debería evitar?: {formData.Prg12}</Text>
        </View>
        <View style={styles.box}>
          {checkboxes.map((checkbox, index) => (
            <Text key={index}>{checkbox.label}: {formatBoolean(checkbox.value)}</Text>
          ))}
        </View>
      </Page>
    </Document>
  );
};

export default Generador;
