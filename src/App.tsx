
import {Provider} from "react-redux";
import {store,} from "./state";
import RepositoriesList from "./components/RepositoriesList";
import { StylesProvider } from '@material-ui/core/styles';
import Container from "./Style/Container";
import Jobs from "./components/Jobs";
import Navbar from "./components/Navbar/Navbar";



function App() {
  return (
    
    <Provider store={store}>
       <StylesProvider injectFirst>
        <Navbar/>
        <Container/>
        <RepositoriesList/>
        <Jobs/>
        </StylesProvider>
    </Provider>
  );
}

export default App;
