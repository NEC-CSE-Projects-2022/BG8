

import React, { useState } from "react";
import "./Upload.css";

const Upload = () => {
  const [files, setFiles] = useState([]);
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [rejectedFiles, setRejectedFiles] = useState([]);

  // Validation: filename must contain "dr" or "no dr"
  const validateFiles = (selectedFiles) => {
    if (selectedFiles.length === 0) {
      setError("Please select at least one image!");
      return false;
    }

    const validFiles = selectedFiles.filter(file => /dr|no dr/i.test(file.name));
    const invalidFiles = selectedFiles.filter(file => !/dr|no dr/i.test(file.name));

    setFiles(validFiles);
    setRejectedFiles(invalidFiles.map(f => f.name));

    if (validFiles.length === 0) {
      setError("No valid files selected!");
      return false;
    }

    setError("");
    return true;
  };

  const handleFileChange = (e) => validateFiles(Array.from(e.target.files));

  const handleDrop = (e) => {
    e.preventDefault();
    validateFiles(Array.from(e.dataTransfer.files));
  };

  // Upload & predict
  const handleUpload = async () => {
    if (files.length === 0) {
      setError("Please select at least one valid file!");
      return;
    }

    setLoading(true);
    setError("");

    // Clear previous results for new upload
    setResults([]);

    const newResults = [];

    for (let i = 0; i < files.length; i++) {
      const file = files[i];
      const formData = new FormData();
      formData.append("file", file);

      try {
        const response = await fetch("http://localhost:8000/predict/", {
          method: "POST",
          body: formData,
        });

        if (!response.ok) throw new Error("Prediction failed");

        const data = await response.json();

        const result = {
          id: Date.now() + i,
          filename: file.name,
          model: data.model || "EffNet",
          prediction: data.prediction,
          confidence: data.confidence,
          originalURL: URL.createObjectURL(file),
          maskURL: `http://localhost:8000${data.heatmap_url}`,
          time: new Date().toLocaleString(),
        };

        newResults.push(result);

        // Save to localStorage if needed
        const storedResults = JSON.parse(localStorage.getItem("resultsHistory")) || [];
        storedResults.unshift(result);
        localStorage.setItem("resultsHistory", JSON.stringify(storedResults));

      } catch (err) {
        console.error(err);
        setError(`Prediction failed for ${file.name}`);
      }
    }

    setResults(newResults);
    setFiles([]);
    setLoading(false);
  };

  // Button actions
  const handleClearResults = () => {
    setResults([]);
    setRejectedFiles([]);
    setError("");
  };

  const handleNewAnalysis = () => {
    setFiles([]);
    setError("");
    setResults([]);
    setRejectedFiles([]);
  };

  const getPredictionColor = (prediction) => {
    switch (prediction.toLowerCase()) {
      case "no_dr":
      case "no dr":
        return "#28a745";
      case "dr":
        return "#dc3545";
      default:
        return "#6c757d";
    }
  };

  return (
    <div className="upload-container">
      <h2>Upload Retina Images</h2>

      <div
        className="upload-dropzone"
        onDragOver={(e) => e.preventDefault()}
        onDrop={handleDrop}
        onClick={() => document.getElementById("fileInput").click()}
      >
        {files.length > 0
          ? `${files.length} valid file(s) selected`
          : "Drag & Drop images here or click to select"}
      </div>

      <input
        id="fileInput"
        type="file"
        style={{ display: "none" }}
        onChange={handleFileChange}
        multiple
        accept="image/*"
      />

      {/* Show rejected files */}
      {rejectedFiles.length > 0 && (
        <div className="error-message">
          <strong>Rejected files:</strong> {rejectedFiles.join(", ")}
        </div>
      )}

      {/* Preview Grid */}
      {files.length > 0 && (
        <div className="preview-grid">
          {files.map((file, index) => (
            <div className="preview-card" key={index}>
              <div className="preview-header">
                <span className="filename">{file.name}</span>
                <button
                  className="remove-btn"
                  onClick={(e) => {
                    e.stopPropagation();
                    setFiles(files.filter((_, i) => i !== index));
                  }}
                >
                  ✕
                </button>
              </div>
              <img
                src={URL.createObjectURL(file)}
                alt={file.name}
                className="preview-img"
              />
            </div>
          ))}
        </div>
      )}

      {/* Buttons */}
      <div className="button-row">
        <button onClick={handleUpload} disabled={loading}>
          {loading ? "Analyzing..." : "Upload & Predict"}
        </button>

        {files.length > 0 && !loading && (
          <button className="cancel-btn" onClick={() => setFiles([])}>
            Cancel
          </button>
        )}

        {(results.length > 0 || rejectedFiles.length > 0) && (
          <>
            <button className="cancel-btn" onClick={handleClearResults}>
              Clear Results
            </button>
            <button className="upload-btn" onClick={handleNewAnalysis}>
              New Analysis
            </button>
          </>
        )}
      </div>

      {/* Show general error */}
      {error && <div className="error-message">{error}</div>}

      {/* Results Grid */}
      {results.length > 0 && (
        <div className="results-grid">
          {results.map((res) => (
            <div key={res.id} className="result-card">
              <div className="result-images">
                <div className="result-img-box">
                  <p>Original</p>
                  <img src={res.originalURL} alt={res.filename} />
                </div>

                <div className="result-img-box">
                  <p>LIME Heatmap</p>
                  <img src={res.maskURL} alt={`heatmap-${res.filename}`} />
                </div>
              </div>

              <div
                className="result-info"
                style={{ borderColor: getPredictionColor(res.prediction) }}
              >
                <span
                  className="prediction-badge"
                  style={{ background: getPredictionColor(res.prediction) }}
                >
                  {res.prediction}
                </span>
                 <p className="result-filename">
    <strong>File:</strong> {res.filename}
  </p>
                <p><strong>Model:</strong> {res.model}</p>
                <p><strong>Confidence:</strong> {res.confidence}</p>
                <p><strong>Time:</strong> {res.time}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Upload;
