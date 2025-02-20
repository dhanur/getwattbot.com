import { supabase } from "./supabase";

export async function subscribeToNewsletter(email: string) {
  if (!email) return false;

  // Basic email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) return false;

  try {
    const { data, error } = await supabase.functions.invoke(
      "newsletter-signup",
      {
        body: { email },
      },
    );

    if (error) {
      console.error("Newsletter function error:", error);
      return false;
    }

    // Check if the response data indicates an error
    if (data && (data.error || data.status >= 400)) {
      console.error("Beehiiv API error:", data);
      return false;
    }

    console.log("Subscription successful:", data);
    return true;
  } catch (error) {
    console.error("Newsletter subscription error:", error);
    return false;
  }
}
