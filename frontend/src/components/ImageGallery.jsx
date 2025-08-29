import React, { useState, useEffect } from "react";

export default function ImageGallery() {
  const [images, setImages] = useState([]);
//   const [selected, setSelected] = useState(null);
  const [selectedIndex, setSelectedIndex] = useState(0);

  useEffect(() => {
    fetch("/images.json")
      .then(res => res.json())
      .then(data => {
        setImages(data);
        // setSelected(data[0]);
        setSelectedIndex(0);
      });
  }, []);

   const handlePrev = () => {
    setSelectedIndex(prev => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setSelectedIndex(prev => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const selected = images[selectedIndex];

  return (
    <div>
      <h2>Image Gallery</h2>

      {selected && (
        <div style={{ marginBottom: "20px" }}>
          <img src={selected.src} alt={selected.title} width="600" />
          <p>{selected.title}</p>
        </div>
      )}

      <button
          onClick={handlePrev}
          style={{
            position: "absolute",
            top: "50%",
            left: "10px",
            background: "gray",
            color: "white",
            border: "none",
            padding: "10px",
            borderRadius: "50%",
            cursor: "pointer"
          }}
        >
          ◀
        </button>

        <button
          onClick={handleNext}
          style={{
            position: "absolute",
            top: "50%",
            right: "10px",
            background: "gray",
            color: "white",
            border: "none",
            padding: "10px",
            borderRadius: "50%",
            cursor: "pointer"
          }}
        >
          ▶
        </button>

      <div style={{ display: "flex", gap: "10px", overflowX: "auto" }}>
        {images.map(img => (
          <img
            key={img.id}
            src={img.thumb}
            alt={img.title}
            style={{
              cursor: "pointer",
              border: selected?.id === img.id ? "2px solid blue" : "2px solid transparent",
              borderRadius: "4px"
            }}
            // onClick={() => setSelected(img)}
            onClick={() => setSelectedIndex(img.id - 1)}
          />
        ))}
      </div>
    </div>
  );
}
