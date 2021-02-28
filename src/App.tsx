
import {Provider} from "react-redux";
import {store,} from "./state";
import { StylesProvider } from '@material-ui/core/styles';
import Jobs from "./components/Jobs";
import Navbar from "./components/Navbar/Navbar";
import Banner from "./components/Banner/Banner";



function App() {
  return (
    
    <Provider store={store}>
       <StylesProvider injectFirst>
        <Navbar/>
        <Banner/>
        <Jobs/>
        </StylesProvider>
    </Provider>
  );
}

export default App;
