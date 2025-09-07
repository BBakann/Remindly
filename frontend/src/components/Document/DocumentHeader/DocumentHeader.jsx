import { Ionicons } from "@expo/vector-icons";
import { SafeAreaView, StatusBar, Text, TouchableOpacity, View } from "react-native";
import styles from "./styles";

const DocumentHeader = () => {
  return (
    <SafeAreaView style={{ backgroundColor: "#d01f1f" }}>
      <StatusBar translucent backgroundColor="transparent" barStyle="light-content" />
      <View style={styles.headerContainer}>
        
        <TouchableOpacity style={styles.iconButton}>
          <Ionicons name="home" size={32} color="#fff" />
        </TouchableOpacity>

        <View style={styles.headerTextContainer}>
          <Text style={styles.headerText}>Evraklar</Text>
        </View>

        <View style={styles.rightIcons}>
          <TouchableOpacity>
            <Ionicons name="search" size={28} color="#fff" />
          </TouchableOpacity>
          <TouchableOpacity style={[styles.iconButton, { marginLeft: 15 }]}>
            <Ionicons name="notifications" size={28} color="#fff" />
          </TouchableOpacity>
        </View>        
      </View>
    </SafeAreaView>
  );
};

export default DocumentHeader;
