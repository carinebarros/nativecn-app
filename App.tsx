import { StatusBar } from "expo-status-bar";

import { Profile } from "@/app/profile";

import "@/styles/global.css";

const App = () => (
  <>
    <Profile />
    <StatusBar style="auto" />
  </>
);

export default App;
