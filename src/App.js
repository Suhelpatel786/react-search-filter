import NavigationBar from "./navigation/Nav";
import Products from "./products/Products";
import Recommended from "./recommended/Recommended";

function App() {
  return (
    <div>
      <NavigationBar />
      <Recommended />
      <Products />
    </div>
  );
}

export default App;
