import styled, { ThemeProvider } from "styled-components";

import { Reset } from "styled-reset";

import GlobalStyle from "./styles/GlobalStyle";
import defaultTheme from "./styles/defaultTheme";

import Header from "./components/Header";
import Navbar from "./components/Navbar";
import FestivalSentence from "./components/FestivalSentence";
import BoothRanking from "./components/BoothRanking";
import LineUp from "./components/LineUp";

const Container = styled.div`
  margin: 0 auto;
  width: ${(props) => props.theme.sizes.layoutWidth};
  background: ${(props) => props.theme.colors.layoutBackground};
  overflow: hidden;
  `;

export default function App() {
	return (
		<ThemeProvider theme={defaultTheme}>
			<Reset />
			<GlobalStyle />
			<Container>
				{/* <Header /> */}
				<LineUp />
				<FestivalSentence />
				<BoothRanking />
				<Navbar />
			</Container>
		</ThemeProvider>
	);
}
