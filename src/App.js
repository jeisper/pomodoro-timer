import "./App.css";
import Header from "./components/Header";
import Tasks from "./components/Tasks";
import { Box, Container, useColorMode } from "@chakra-ui/react";
import Timer from "./components/Timer";
import "focus-visible/dist/focus-visible";
import { useEffect, useState } from "react";
import { generateGradientTheme, PURPLE } from "./Constants/themes";

function App() {
  const { colorMode } = useColorMode();
  const [timerTheme, setTimerTheme] = useState(
    localStorage.getItem("timer-theme")
      ? JSON.parse(localStorage.getItem("timer-theme"))
      : generateGradientTheme(PURPLE, colorMode)
  );

  useEffect(() => {
    const storedTheme = JSON.parse(localStorage.getItem("timer-theme"));
    if (storedTheme) {
      setTimerTheme(
        generateGradientTheme(timerTheme.color, colorMode, {
          image: storedTheme.bgImage,
          random: storedTheme.bgInfo.random,
          custom_url: storedTheme.bgInfo.custom_url,
        })
      );
    }
  }, [colorMode, timerTheme.color]);
  Notification.requestPermission();

  const content = (
    <Container centerContent>
      <Header theme={timerTheme} setTheme={setTimerTheme} />
      <Timer theme={timerTheme} />
      <Tasks theme={timerTheme} />
    </Container>
  );

  const noBgImage = (
    <Box
      width="100vw"
      height="maxContent"
      overflow="hidden"
      minH="100vh"
      bgGradient={
        colorMode === "light"
          ? "linear(to-bl, #F5F5F5, #FFFFFF)"
          : "linear(to-bl, #121417, #2B2E36)"
      }>
      {content}
    </Box>
  );
  const withBgRandomImage = (
    <Box
      width="100vw"
      height="maxContent"
      minH="100vh"
      bgImage={"url(" + timerTheme.bgInfo.random_url + ")"}
      bgAttachment="fixed"
      bgSize="cover"
      bgRepeat="no-repeat">
      {content}
    </Box>
  );

  const withBgCustomImage = (
    <Box
      width="100vw"
      height="maxContent"
      minH="100vh"
      bgImage={"url(" + timerTheme.bgInfo.custom_url + ")"}
      bgAttachment="fixed"
      bgSize="cover"
      bgRepeat="no-repeat">
      {content}
    </Box>
  );

  return timerTheme.bgImage
    ? timerTheme.bgInfo.random
      ? withBgRandomImage
      : withBgCustomImage
    : noBgImage;
}

export default App;
