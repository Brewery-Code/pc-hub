import { Provider } from 'react-redux';
import store from './app/store';
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <Provider store={store}>
      <div className="wrapper">
        <Header></Header>
        <Main></Main>
        <Footer></Footer>
      </div>
    </Provider>
  )
}

export default App
