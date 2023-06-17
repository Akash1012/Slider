import { useState, useEffect } from "react";
import { sliderImage } from "./data";

function App() {
  const [imageData, setImageData] = useState(sliderImage);
  const [imageChange, setImageChange] = useState(1);

  const nextImage = () => {
    if (imageChange == imageData.length) {
      setImageChange(1);
      return;
    }
    setImageChange((prevImage) => prevImage + 1);
  };

  const prevImage = () => {
    if (imageChange == 1) {
      setImageChange(imageData.length);
      return;
    }
    setImageChange((prevImage) => prevImage - 1);
  };

  useEffect(() => {
    let interval;

    interval = setInterval(() => {
      nextImage();
    }, 3000);

    return () => clearInterval(interval);
  }, [imageChange]);

  return (
    <div>
      <div
        style={{
          position: "relative",
          padding: "10px",
        }}
      >
        {imageData.map((item) => {
          const { name, pic, id } = item;
          return (
            <div
              style={{
                display: id == imageChange ? "block" : "none",
              }}
            >
              <img
                src={pic}
                alt={name}
                style={{
                  width: "100%",
                  height: "400px",
                }}
              />
              <p
                style={{
                  textAlign: "center",
                  position: "absolute",
                  width: "100%",
                  bottom: "11px",
                }}
              >
                {name}
              </p>
            </div>
          );
        })}
      </div>
      <div
        style={{
          position: "absolute",
          bottom: "68%",
          width: "100%",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <button
          onClick={() => prevImage()}
          style={{
            margin: "10px",
            marginLeft: "20px",
          }}
        >
          Prev
        </button>
        <button
          onClick={() => nextImage()}
          style={{
            margin: "10px",
            marginLeft: "20px",
          }}
        >
          Next
        </button>
      </div>
      <div
        style={{
          textAlign: "center",
        }}
      >
        {imageData.map((item) => {
          const { id } = item;
          return (
            <span
              onClick={() => setImageChange(id)}
              style={{
                height: "15px",
                display: "inline-block",
                borderRadius: "50%",
                width: "15px",
                cursor: "pointer",
                margin: "0 2px",
                backgroundColor: id == imageChange ? "yellowgreen" : "green",
              }}
            ></span>
          );
        })}
      </div>
    </div>
  );
}

export default App;
