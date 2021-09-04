import axios from "axios";
import { useEffect, useState } from "react";
import "./App.css";
import CharCard from "./components/CharCard";
import { Header } from "./components/Header";
import { Search } from "./components/Search";

function App() {
  const [data, setdata] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [text, setText] = useState("");

  const getData = () => {
    axios
      .get(`https://www.breakingbadapi.com/api/characters?name=${text}`)
      .then((res) => {
        setdata(res.data);
        setIsLoading(false);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getData();
  }, [text]);

  return (
    <div className="Container">
      <Header />
      <Search txt={(q) => setText(q)} />
      <CharCard items={data} loading={isLoading} />
    </div>
  );
}

export default App;
