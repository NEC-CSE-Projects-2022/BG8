import React, { useEffect, useState } from "react";
import "./Result.css";

const Result = () => {
  const [results, setResults] = useState([]);
  const [search, setSearch] = useState("");

  // Load results safely from localStorage
  useEffect(() => {
    try {
      const stored = JSON.parse(localStorage.getItem("resultsHistory")) || [];
      // Filter out invalid entries
      const validResults = stored.filter(
        (res) => res && res.filename
      );
      setResults(validResults);
      localStorage.setItem("resultsHistory", JSON.stringify(validResults));
    } catch (err) {
      console.error("Failed to load results:", err);
      setResults([]);
    }
  }, []);

  // Safe search filter
  const filteredResults = results.filter(
    (res) =>
      res &&
      res.filename &&
      res.filename.toLowerCase().includes(search.toLowerCase())
  );

  // Delete one entry
  const handleDelete = (id) => {
    const updated = results.filter((res) => res.id !== id);
    setResults(updated);
    localStorage.setItem("resultsHistory", JSON.stringify(updated));
  };

  // Clear all entries
  const clearAll = () => {
    if (window.confirm("Are you sure you want to clear all results?")) {
      setResults([]);
      localStorage.removeItem("resultsHistory");
    }
  };

  // Confidence color coding
  const getConfidenceColor = (conf) => {
    const num = parseFloat(conf);
    if (num >= 80) return "green";
    if (num >= 50) return "orange";
    return "red";
  };

  // Render value safely (stringify if object)
  const renderValue = (value) => {
    if (value === undefined || value === null) return "-";
    return typeof value === "object" ? JSON.stringify(value) : value;
  };

  return (
    <div className="result-container">
      <h2>Prediction History</h2>

      {results.length > 0 && (
        <div style={{ marginBottom: "15px", textAlign: "center" }}>
          <input
            type="text"
            placeholder="Search by filename..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            style={{ padding: "8px", width: "250px", marginRight: "10px" }}
          />
          <button
            onClick={clearAll}
            style={{
              backgroundColor: "#dc3545",
              color: "#fff",
              padding: "8px 12px",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
            }}
          >
            Clear All
          </button>
        </div>
      )}

      {filteredResults.length === 0 ? (
        <p>No predictions found.</p>
      ) : (
        <div style={{ overflowX: "auto" }}>
          <table>
            <thead>
              <tr>
                <th>Filename</th>
                <th>Time</th>
                <th>Model</th>
                <th>Prediction</th>
                <th>Confidence</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {filteredResults.map((res, index) => (
                <tr key={res.id || index}>
                  <td>{renderValue(res.filename)}</td>
                  <td>{renderValue(res.time)}</td>
                  <td>{renderValue(res.model)}</td>
                  <td>{renderValue(res.prediction)}</td>
                  <td style={{ color: getConfidenceColor(res.confidence) }}>
                    {renderValue(res.confidence)}
                  </td>
                  <td>
                    <button
                      onClick={() => handleDelete(res.id)}
                      style={{
                        backgroundColor: "#dc3545",
                        color: "#fff",
                        padding: "5px 10px",
                        border: "none",
                        borderRadius: "5px",
                        cursor: "pointer",
                      }}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default Result;
