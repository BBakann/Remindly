import { Ionicons } from '@expo/vector-icons';
import { FlatList, Text, TouchableOpacity, View } from "react-native";
import { categoryData } from '../../../utils/document/documentCategoryData';
import styles from "./styles";

const DocumentContent = () => {
  const renderItem = ({ item }) => (
    <TouchableOpacity style={styles.card}>
      <View style={styles.iconContainer}>{item.icon}</View>
      <Text style={styles.cardTitle}>{item.title}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <View style={styles.headerRow}>
        <Text style={styles.contentTitle}>Kategoriler</Text>
        <TouchableOpacity style={styles.addIcon}>
          <Ionicons name="add-circle-sharp" size={36} color="black" />
        </TouchableOpacity>
      </View>

      <FlatList
        data={categoryData}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        horizontal
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );

};

export default DocumentContent;
