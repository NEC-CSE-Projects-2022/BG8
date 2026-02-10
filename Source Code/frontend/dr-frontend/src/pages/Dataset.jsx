import "./Dataset.css";

const drImages = Array.from({ length: 6 }, (_, i) => `dr_${i + 1}.jpg`);
const noDrImages = Array.from({ length: 6 }, (_, i) => `no_dr_${i + 1}.jpg`);

const Dataset = () => {
  return (
    <div className="dataset-page">

      {/* HEADERS */}
      <div className="dataset-header">
        <h2>Diabetic Retinopathy</h2>
        <h2>No Diabetic Retinopathy</h2>
      </div>

      {/* CONTENT */}
      <div className="dataset-content">

        {/* DR IMAGES */}
        <div className="image-grid">
          {drImages.map((img, index) => (
            <div className="img-card" key={index}>
              <img src={`/dataset/dr/${img}`} alt={img} />
              <p className="img-name">{img}</p>
              <a href={`/dataset/dr/${img}`} download>Download</a>
            </div>
          ))}
        </div>

        {/* NO DR IMAGES */}
        <div className="image-grid">
          {noDrImages.map((img, index) => (
            <div className="img-card" key={index}>
              <img src={`/dataset/no_dr/${img}`} alt={img} />
              <p className="img-name">{img}</p>
              <a href={`/dataset/no_dr/${img}`} download>Download</a>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default Dataset;
