"use client";

import { useEffect } from "react";
import { MainDashboardPage } from "./components/MainDashboardPage/MainDashboardPage";

export default function Page() {
  useEffect(() => {
    document.title = "Creator Dashboard – Indra Ai";
  }, []);

  return <MainDashboardPage />;
}
