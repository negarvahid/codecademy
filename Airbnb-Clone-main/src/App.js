import "./App.css";
import Navbar from "./components/Navbar";
import Main from "./components/Main";
import data from "./data/data";
import Card from "./components/Card";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Main />
      <section className="cards-list">
        {data.map((item) => {
          return <Card key={item.id} item={item} />;
        })}
      </section>
    </div>
  );
}

export default App;
