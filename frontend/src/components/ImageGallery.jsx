import React, { useState, useEffect } from "react";

export default function ImageGallery() {
  const [images, setImages] = useState([]);

  useEffect(() => {
    // Later we will fetch from a JSON
    const sampleData = [
      { id: 1, src: "https://picsum.photos/id/1015/600/400", thumb: "https://picsum.photos/id/1015/150/100", title: "Mountain" },
      { id: 2, src: "https://picsum.photos/id/1016/600/400", thumb: "https://picsum.photos/id/1016/150/100", title: "River" },
      { id: 3, src: "https://picsum.photos/id/1018/600/400", thumb: "https://picsum.photos/id/1018/150/100", title: "Forest" }
    ];
    setImages(sampleData);
  }, []);

  return (
    <div>
      <h2>Image Gallery</h2>
      <div style={{ display: "flex", gap: "10px" }}>
        {images.map(img => (
          <img key={img.id} src={img.thumb} alt={img.title} style={{ cursor: "pointer" }} />
        ))}
      </div>
    </div>
  );
}
