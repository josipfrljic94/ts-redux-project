
import {Provider} from "react-redux";
import {store,} from "./state";
import RepositoriesList from "./components/RepositoriesList";
import Container from "./Style/Container";
import Jobs from "./components/Jobs";



function App() {
  return (
    <Provider store={store}>
        <Container/>
        <RepositoriesList/>
        <Jobs/>
    </Provider>
  );
}

export default App;
