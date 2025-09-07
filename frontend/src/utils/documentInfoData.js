import { Ionicons } from "@expo/vector-icons";

export const infoData = [
  {
    id: "1",
    title: "İnşaat Evrakları",
    icon: <Ionicons name="document-text" size={40} color="#2ecc71"/>,
    expires: "30/12/2025",
    warning: "Aktif"
  },
  {
    id: "2",
    title: "Visa",
    icon: <Ionicons name="airplane" size={40} color="#3498db" />,
    expires: "30/10/2025",
    warning: "Yaklaşıyor"
  },
  {
    id: "3",
    title: "Sağlık Sigortası",
    icon: <Ionicons name="home" size={40} color="black" />,
    expires: "30/09/2025",
    warning: "Kalıcı"
  },
  {
    id: "4",
    title: "Kimlik Kartı",
    icon: <Ionicons name="id-card" size={40} color="#e67e22" />,
    expires: "30/06/2025",
    warning: "Süresi Doldu"
  },
];
