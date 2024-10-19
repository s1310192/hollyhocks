import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";

function App() {
  let [count, setCount] = useState(1);
  const [data, setData] = useState(undefined);

  useEffect(() => {
    fetch("https://api.github.com/users/s1310192")
      .then((res) => res.json())
      .then((json) => setData(json));
  }, []);
  return (
    <div className="App">
      <header className="App-header bg-wed">
        <img
          src="https://hiyokoyarou.com/wp-content/uploads/2022/12/kamesan.png"
          className="App-logo"
          alt="logo"
        />
        <p className="text-wed-dark">
          iiWelcome to <code>WED</code> Community!!
        </p>
        <a
          className="text-wed-hello underline"
          //font-family="fantasy"
          href="https://wed.company/"
          target="_blank"
          rel="noopener noreferrer"
        >
          WED
        </a>
        <a href="/newpage" className="text-wed-hello underline">
          コミュニティページ
        </a>
        <p
          className="bg-wed-red p-1 m-2 rounded-lg hover:text-4xl"
          onClick={() => {
            setCount(count * 2);
          }}
        >
          ○
        </p>
        <p className="text-wed-lin text-2xl p-1 m-2 rounded-lg hover:text-4xl">
          {count}
        </p>
        <p
          className="bg-wed-blue p-1 m-2 rounded-lg hover:text-4xl"
          onClick={() => {
            setCount(count / 2);
          }}
        >
          ×
        </p>
        {data ? (
          <>
            <img
              className="w-32 rounded-full mt-10"
              alt="icon"
              src={data.avatar_url}
            />
            <p className="text-wed-dark">{data.login}</p>
          </>
        ) : (
          <p> no data </p>
        )}
      </header>
    </div>
  );
}

export default App;
