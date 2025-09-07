import { View } from "react-native";
import DocumentContent from "../../components/DocumentContent/DocumentContent";
import DocumentHeader from "../../components/DocumentHeader/DocumentHeader";
import DocumentInfo from "../../components/DocumentInfo/DocumentInfo";
import styles from "./styles";

const DocumentScreen = () => {

    return(
        <View style = {styles.container}>
            <DocumentHeader/>
            <DocumentContent/>
            <DocumentInfo/>
        </View>
    );
};

export default DocumentScreen;