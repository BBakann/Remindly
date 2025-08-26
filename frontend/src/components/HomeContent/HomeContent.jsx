import { FlatList, Text, View } from "react-native";
import { expirationData } from '../../utils/homeContentData';
import styles from "./styles";

const HomeContent = () => {

  const renderItem = ({ item }) => (
    <View style={styles.card}>
      <View>
        <Text style={styles.cardTitle}>{item.title}</Text>
        <Text style={styles.cardDescription}>{item.description}</Text>
      </View>
      <Text
        style={[
          styles.cardDays,
          { color: item.days <= 15 ? "red" : item.days <= 30 ? "orange" : "green" },
        ]}
      >
        {item.days} gün
      </Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.descriptionTitle}>Yaklaşan Evraklar</Text>
      <FlatList
        data={expirationData}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
      />
    </View>
  );
};

export default HomeContent;
