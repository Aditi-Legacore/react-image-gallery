import React, { useState, useEffect } from "react";

export default function ImageGallery() {
  const [images, setImages] = useState([]);
  const [selected, setSelected] = useState(null);

  useEffect(() => {
    fetch("/images.json")
      .then(res => res.json())
      .then(data => {
        setImages(data);
        setSelected(data[0]);
      });
  }, []);

  return (
    <div>
      <h2>Image Gallery</h2>

      {selected && (
        <div style={{ marginBottom: "20px" }}>
          <img src={selected.src} alt={selected.title} width="600" />
          <p>{selected.title}</p>
        </div>
      )}

      <div style={{ display: "flex", gap: "10px" }}>
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
            onClick={() => setSelected(img)}
          />
        ))}
      </div>
    </div>
  );
}
