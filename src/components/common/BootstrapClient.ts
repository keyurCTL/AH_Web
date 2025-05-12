"use client";

import { useEffect } from "react";

function BootstrapClient() {
  useEffect(() => {
    import("bootstrap/dist/js/bootstrap.bundle.min.js")
      .then(() => console.log("Bootstrap JS loaded"))
      .catch((err) => console.error("Bootstrap JS failed to load:", err));
  }, []);

  return null;
}

export default BootstrapClient;
