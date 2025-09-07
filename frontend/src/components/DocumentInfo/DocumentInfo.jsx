import { Ionicons } from "@expo/vector-icons";
import { FlatList, Text, TouchableOpacity, View } from "react-native";
import { infoData } from "../../utils/documentInfoData";
import styles from "./styles";

const getWarningColors = (warning) => {
  switch (warning) {
    case "Aktif":
      return { background: "#2ecc71", text: "white" }; // yeşil
    case "Yaklaşıyor":
      return { background: "#e67e22", text: "white" }; // turuncu
    case "Kalıcı":
      return { background: "#2980b9", text: "white" }; // mavi
    case "Süresi Doldu":
      return { background: "#c0392b", text: "white" }; // kırmızı
    default:
      return { background: "#bdc3c7", text: "black" }; // gri
  }
};

const DocumentInfo = () => {
  const renderItem = ({ item }) => {
    const colors = getWarningColors(item.warning);

    return (
      <TouchableOpacity style={styles.card}>

        <View style={styles.iconContainer}>{item.icon}</View>

        <View style={styles.infoContainer}>
          <Text style={styles.cardTitle}>{item.title}</Text>
          <Text style={styles.cardSubtitle}>Bitiş: {item.expires}</Text>
        </View>

        <View style={styles.rightContainer}>
          <View
            style={[
              styles.warningBadge,
              { backgroundColor: colors.background },
            ]}
          >
            <Text style={[styles.warningText, { color: colors.text }]}>
              {item.warning}
            </Text>
          </View>
          <Ionicons name="chevron-forward" size={20} color="#7f8c8d" />
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.headerRow}>
        <Text style={styles.documentTitle}>Dökümanlarım</Text>
        <Text style={styles.documentCounter}>5 Döküman</Text>
      </View>

      <FlatList
        data={infoData}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

export default DocumentInfo;
