import YourProjectsSidebar from "./components/YourProjectsSidebar";
import NewProject from "./components/NewProject";

function App() {
  return (
    <main className="h-screen my-8 flex gap-8">
      <YourProjectsSidebar/>
      <NewProject/>
    </main>
  );
}

export default App;
