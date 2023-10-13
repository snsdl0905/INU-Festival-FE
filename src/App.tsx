import styled, { ThemeProvider } from "styled-components";

import { Reset } from "styled-reset";

import GlobalStyle from "./styles/GlobalStyle";
import defaultTheme from "./styles/defaultTheme";

import Header from "./components/Header";
import Navbar from "./components/Navbar";

const Container = styled.div`
  margin: 0 auto;
  width: ${(props) => props.theme.sizes.layoutWidth};
  background: ${(props) => props.theme.colors.layoutBackground};
`;

export default function App() {
	return (
		<ThemeProvider theme={defaultTheme}>
			<Reset />
			<GlobalStyle />
			<Container>
				<Header />
				<p>추가해주세요</p>
				<Navbar />
			</Container>
		</ThemeProvider>
	);
}
