const BEEHIIV_API_KEY =
  "Ubus406RYBolbPnZypYlKGWSOKKKxCMuqjYJhN42PGWRTDswZzAhXK3keYzHIprn";
const BEEHIIV_PUBLICATION_ID = "pub_547aea63-25b0-40ff-8d8a-292e62bac6d6";

export async function subscribeToNewsletter(email: string) {
  if (!email) return false;

  // Basic email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) return false;

  try {
    const response = await fetch(
      `https://api.beehiiv.com/v2/publications/${BEEHIIV_PUBLICATION_ID}/subscriptions`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${BEEHIIV_API_KEY}`,
        },
        body: JSON.stringify({
          email,
          reactivate_existing: false,
          send_welcome_email: true,
          utm_source: "website",
          utm_campaign: "newsletter_signup",
          utm_medium: "organic",
        }),
      },
    );

    if (!response.ok) {
      const error = await response.json();
      console.error("Beehiiv error:", error);
      throw new Error("Failed to subscribe");
    }

    return true;
  } catch (error) {
    console.error("Newsletter subscription error:", error);
    return false;
  }
}
