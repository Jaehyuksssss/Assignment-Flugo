import { BrowserRouter, Route, Routes } from "react-router-dom";
import { RecoilRoot } from "recoil";
import GlobalStyle from "./styles/globalStyles";
import { QueryClient, QueryClientProvider } from "react-query";
import ListPage from "./pages/Home/ListPage";
import CartDetail from "./pages/CartDetail/CartDetail";
import Nav from "./components/Nav/Nav";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <RecoilRoot>
        <GlobalStyle />
        <BrowserRouter>
          <Nav />
          <Routes>
            <Route element={<ListPage />} path="/" />
            <Route element={<CartDetail />} path="/cartdetail" />
          </Routes>
        </BrowserRouter>
      </RecoilRoot>
    </QueryClientProvider>
  );
}

export default App;
