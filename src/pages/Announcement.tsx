import { useEffect } from "react";
import { EXTERNAL_URLS } from "@/lib/constants";

/**
 * Announcement Page Component
 *
 * This component handles the /announcement route and immediately redirects
 * visitors to our LinkedIn announcement post
 */
const Announcement = () => {
  useEffect(() => {
    // Redirect to the LinkedIn announcement
    const redirectToAnnouncement = () => {
      window.location.href = EXTERNAL_URLS.ANNOUNCEMENT;
    };

    redirectToAnnouncement();
  }, []);

  // Return null since we're redirecting immediately
  return null;
};

export default Announcement;
