import NavBar from "./Components/NavBar/NavBar";
import Routing from "./Components/NavBar/Routes/Routing";

const App = () => {
  return (
    <>
      <div className="w-full h-screen">
        <NavBar />
        <Routing />
      </div>
    </>
  );
};

export default App;
