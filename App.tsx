import "@/styles/global.css";

import { StatusBar } from "expo-status-bar";

import { Profile } from "@/app/profile";
import { ToastProvider } from "@/components/Toast";

const App = () => (
  <ToastProvider position="top">
    <Profile />
    <StatusBar style="light" />
  </ToastProvider>
);

export default App;
