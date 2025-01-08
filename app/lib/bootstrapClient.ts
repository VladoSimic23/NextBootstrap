"use client";

import { useEffect } from "react";
//import Boots from 'bootstrap/dist/js/bootstrap.bundle.min.js'

function BootstrapClient() {
  useEffect(() => {
    // Dynamically import Bootstrap JS only in the client-side
    // eslint-disable-next-line @typescript-eslint/no-require-imports
    require("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);

  return null;
}

export default BootstrapClient;
