import "./App.css";

import { useRandomQuoteQuery } from "./quotesApi";
function App() {
  const { data, isSuccess, refetch } = useRandomQuoteQuery(null, {
    pollingInterval: 6000,
  });
  console.log(useRandomQuoteQuery());

  return (
    <div className='wrapper'>
      <div className='quote'>
        <div className='text'>
          <h1>fetching a random quote though an api with RTK query</h1>
          <p>changing quotes on every 6 seconds</p>
        </div>

        {isSuccess && (
          <>
            <div className='butter'>
              <h4 className='quote__text'> Quote: {data.content}</h4>
              <p className='quote__author'> Author name: {data.author}</p>
            </div>
            <div className='refetchbtn'>
              <button className='button-change' onClick={refetch}>
                change quote
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default App;
