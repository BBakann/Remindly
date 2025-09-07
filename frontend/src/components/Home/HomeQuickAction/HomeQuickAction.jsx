import { FlatList, Text, TouchableOpacity, View } from "react-native";
import { quickData } from "../../../utils/home/homeQuickData";
import styles from "./styles";

const HomeQuickAction = () => {

    const renderItem = ({ item }) => (
    <TouchableOpacity style={styles.card}>
      <View style={styles.iconContainer}>
        {item.icon}
      </View>
      <Text style={styles.cardTitle}>{item.title}</Text>
    </TouchableOpacity>
  );

    return (
    <View style={styles.container}>
      <Text style={styles.descriptionTitle}>Hızlı İşlemler</Text>
      <FlatList
        data={quickData}
        numColumns={2} 
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        columnWrapperStyle={{ justifyContent: "space-between" }} 
      />
    </View>
  );
};

export default HomeQuickAction;