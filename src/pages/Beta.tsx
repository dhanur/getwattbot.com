import { useEffect } from "react";
import { EXTERNAL_URLS } from "@/lib/constants";

/**
 * Beta Page Component
 *
 * This component handles the /beta route and immediately redirects
 * visitors to our external beta signup form on Tally.so
 */
const Beta = () => {
  useEffect(() => {
    // Redirect to the beta signup form
    const redirectToBetaForm = () => {
      window.location.href = EXTERNAL_URLS.BETA_SIGNUP_FORM;
    };

    redirectToBetaForm();
  }, []);

  // Return null since we're redirecting immediately
  return null;
};

export default Beta;
