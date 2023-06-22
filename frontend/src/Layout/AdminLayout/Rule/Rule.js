import React, { useState, useEffect } from "react";
import FadeLoader from "react-spinners/FadeLoader";

export default function Rule() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 10000);
  }, []);

  return (
    <div className="app">
      {loading ? (
        <FadeLoader color={"#07F2FA"} loading={loading} size={150} />
      ) : (
        <div>Finish</div>
      )}
    </div>
  );
}
