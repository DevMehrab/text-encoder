import "./App.css";
import { Footer } from "./components/Footer";
import { MainContent } from "./components/MainContent";
import { TextContent } from "./components/TextContent";

function App() {
  return (
    <div className="flex justify-center xl:items-center ">
      <div className="w-full p-4 xl:w-6xl mx-auto ">
        <div className="flex flex-col xl:flex-row w-full sm:pt-12">
          <TextContent />
          <MainContent />
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default App;
