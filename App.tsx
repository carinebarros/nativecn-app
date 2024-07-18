import "@/styles/global.css";

import { StatusBar } from "expo-status-bar";

import { Profile } from "@/app/profile";

const App = () => (
  <>
    <Profile />
    <StatusBar style="light" />
  </>
);

export default App;
