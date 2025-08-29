import React, { useState, useEffect } from "react";

export default function ImageGallery() {
  const [images, setImages] = useState([]);
  const [selected, setSelected] = useState(null);

  useEffect(() => {
    const sampleData = [
      { id: 1, src: "https://picsum.photos/id/1015/600/400", thumb: "https://picsum.photos/id/1015/150/100", title: "Mountain" },
      { id: 2, src: "https://picsum.photos/id/1016/600/400", thumb: "https://picsum.photos/id/1016/150/100", title: "River" },
      { id: 3, src: "https://picsum.photos/id/1018/600/400", thumb: "https://picsum.photos/id/1018/150/100", title: "Forest" }
    ];
    setImages(sampleData);
    setSelected(sampleData[0]); // default first image
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
