import './App.css';
import axios from 'axios';
import { useState } from 'react';
const App = () => {
  const [data, setData] = useState(null);
  const onClick = async () => {
    try {
      axios
        .get(
          'https://newsapi.org/v2/top-headlines?country=kr&apiKey=5fb67bd63fe1483cb7ba78e8aa819a91',
        )
        .then((response) => {
          setData(response.data);
        });
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <div>
      <div>
        <button onClick={onClick}>불러오기 </button>
      </div>

      {data && (
        <textarea
          rows={7}
          value={JSON.stringify(data, null, 2)} //값,, 객체 속성(String, Number등), 들여쓰기 간격
          readOnly={true}
        />
      )}
    </div>
  );
};

export default App;
