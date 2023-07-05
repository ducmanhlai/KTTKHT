import React, { useState, useEffect } from "react";
import PuffLoader from "react-spinners/PuffLoader";

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
        <PuffLoader color={"#07F2FA"} loading={loading} size={100} />
      ) : (
        <div>Finish</div>
      )}
    </div>
  );
}
