import { View } from "react-native";
import DocumentContent from "../../components/Document/DocumentContent/DocumentContent";
import DocumentHeader from "../../components/Document/DocumentHeader/DocumentHeader";
import DocumentInfo from "../../components/Document/DocumentInfo/DocumentInfo";
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