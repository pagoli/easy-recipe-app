import Search from "./components/Search";
import Category from "./components/Category";
import Header from "./components/Header";
import Pages from "./pages/Pages";
import GlobalStyle from "./styles/GlobalStyle";

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Header />
      <Search />
      <Category />
      <Pages />
    </div>
  );
}

export default App;
