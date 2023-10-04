import InfiniteScroll from "react-infinite-scroll-component";
import "./App.css";
import { useState } from "react";

function App() {
  const [data, setData] = useState(Array.from({ length: 20 }));
  const [hasMore, setHasMore] = useState(true);

  const loadMore = () => {
    setTimeout(() => {
      setData(data.concat(Array.from({ length: 20 })));
    }, 500);
  };

  const style = {
    border: "1px solid black",
    margin: 12,
    padding: 8,
    width: "60%",
  };

  return (
    <div
      className="App"
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <h1>Infinite Scrolling</h1>
      <InfiniteScroll
        dataLength={data.length}
        next={loadMore}
        hasMore={hasMore}
        loader={<p>Loading...</p>}
        height={600}
        // endMessage={<p>You Are All Set!</p>}
      >
        {data.map((item, index) => {
          return (
            <div key={index} style={style}>
              This is a div #{index + 1}
            </div>
          );
        })}
      </InfiniteScroll>
    </div>
  );
}

export default App;
