"use client";
import { analytics } from "@/app/utils/firebase";
import { logEvent } from "firebase/analytics";
import { usePathname } from "next/navigation";
import { useEffect } from "react";

export default function Analytics() {
  const pathname = usePathname();

  useEffect(() => {
    if (analytics) {
      logEvent(analytics, "page_view", { page_path: pathname });
    }
  }, [pathname]);

  return null;
}
