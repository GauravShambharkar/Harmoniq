import NavBar from "./Components/NavBar/NavBar";
import Routing from "./Components/NavBar/Routes/Routing";

const App = () => {
  return (
    <>
      <div className="w-full min-h-screen">
        <NavBar />
        <div className="pt-20">
          <Routing />
        </div>
      </div>
    </>
  );
};

export default App;
