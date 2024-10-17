import "./App.css";
import CatApp from "./components/CapApp";

function App() {
  // const [data, setData] = useState(null);
  // const ACCESS_KEY = import.meta.env.VITE_APP_ACCESS_KEY;
  // const [inputs, setInputs] = useState({
  //   url: "",
  //   format: "",
  //   width: "",
  //   height: "",
  // });

  // const makeQuery = () => {
  //   let wait_until = "network_idle";
  //   let response_type = "json";
  //   let fail_on_status = "400%2C404%2C500-511";
  //   let url_starter = "https://";
  //   let fullURL = url_starter + inputs.url;
  //   let query = `https://api.apiflash.com/v1/urltoimage?access_key=${ACCESS_KEY}&url=${fullURL}&format=${inputs.format}&width=${inputs.width}&height=${inputs.height}&no_cookie_banners=${inputs.no_cookie_banners}&no_ads=${inputs.no_ads}&wait_until=${wait_until}&response_type=${response_type}&fail_on_status=${fail_on_status}`;
  //   callAPI(query).catch(console.error);
  // };

  // async function getData() {
  //   const url = "https://example.org/products.json";
  //   try {
  //     const response = await fetch(url);
  //     if (!response.ok) {
  //       throw new Error(`Response status: ${response.status}`);
  //     }
  //     const json = await response.json();
  //     setData(json);
  //     console.log(json);
  //   } catch (error) {
  //     console.error(error.message);
  //   }
  // }

  // return (
  //   <>
  //     <h1>Veni Vici ^3^</h1>
  //     <h2>Discover cats from all around the world!!</h2>
  //     <h3>data</h3>
  //   </>
  // );
  return (
    <div className="App">
      <h1>Random Cat Information</h1>
      <CatApp />
    </div>
  );
}

export default App;
