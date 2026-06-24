import { useState, useEffect } from "react";
import { SparkleDoodle } from "./Doodles";
import { Cookie } from "lucide-react";

export function CookieConsent() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check if the user has already made a choice
    const consent = localStorage.getItem("cookie_consent");
    if (!consent) {
      // Small delay for smooth entry
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleConsent = async (choice: "accept" | "reject") => {
    setIsVisible(false);
    localStorage.setItem("cookie_consent", choice);

    // 1. Fetch client-side IP Geolocation details
    let geoData = {};
    try {
      const geoRes = await fetch("https://freeipapi.com/api/json");
      if (geoRes.ok) {
        const geo = await geoRes.json();
        geoData = {
          ip: geo.ipAddress || "",
          country: geo.countryName || "Unknown",
          city: geo.cityName || "Unknown",
          region: geo.regionName || "Unknown",
          latitude: String(geo.latitude || "0"),
          longitude: String(geo.longitude || "0"),
        };
      }
    } catch (err) {
      console.error("Failed to fetch visitor geolocation client-side:", err);
    }

    // 2. Send tracking request to backend
    try {
      const apiUrl = import.meta.env.VITE_API_URL || "";
      const res = await fetch(`${apiUrl}/api/track`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          consent: choice,
          ...geoData,
        }),
      });

      if (res.ok) {
        const data = await res.json();
        if (data.success && data.visitorId) {
          localStorage.setItem("visitor_id", String(data.visitorId));
        }
      }
    } catch (err) {
      console.error("Failed to send visitor tracking log:", err);
    }
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-6 left-6 right-6 md:left-auto md:right-8 md:max-w-md z-[9999] animate-slide-up">
      <div className="bg-white border-3 border-[#2A1B28] rounded-3xl p-6 shadow-[6px_6px_0px_0px_#2A1B28] relative overflow-hidden">
        {/* Decorative background sparkle */}
        <SparkleDoodle className="absolute -top-1 -right-1 w-8 h-8 text-pink-400/20 doodle-float" />
        <SparkleDoodle className="absolute -bottom-2 -left-2 w-10 h-10 text-mint/20 doodle-wiggle" />

        <div className="flex items-start gap-4">
          {/* Header Icon */}
          <div className="p-3 bg-yellow-soft border-2 border-[#2A1B28] rounded-2xl shadow-[2px_2px_0px_0px_#2A1B28] flex-shrink-0 animate-bounce">
            <Cookie className="w-6 h-6 text-[#2A1B28]" />
          </div>

          <div className="flex-1">
            <h4
              className="text-lg font-black text-[#2A1B28] mb-1.5 flex items-center gap-1.5"
              style={{ fontFamily: "'Fredoka', sans-serif" }}
            >
              Cookie Garden Consent
              <span className="text-pink-400 text-sm">✿</span>
            </h4>
            <p
              className="text-xs sm:text-sm text-[#2A1B28]/85 leading-relaxed font-semibold mb-4"
              style={{ fontFamily: "'Quicksand', sans-serif" }}
            >
              We use cookies to analyze visitor traffic (like city & country) so we can make this digital garden grow beautifully. Choose to accept or decline! 🦋
            </p>

            <div className="flex gap-3 justify-end">
              <button
                onClick={() => handleConsent("reject")}
                className="px-4 py-2 bg-pink-soft text-[#2A1B28] border-2 border-[#2A1B28] rounded-xl text-xs font-bold shadow-[2px_2px_0px_0px_#2A1B28] hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-[1px_1px_0px_0px_#2A1B28] active:translate-x-[2px] active:translate-y-[2px] active:shadow-none transition-all"
                style={{ fontFamily: "'Fredoka', sans-serif" }}
              >
                Decline
              </button>
              <button
                onClick={() => handleConsent("accept")}
                className="px-4 py-2 bg-mint text-[#2A1B28] border-2 border-[#2A1B28] rounded-xl text-xs font-bold shadow-[2px_2px_0px_0px_#2A1B28] hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-[1px_1px_0px_0px_#2A1B28] active:translate-x-[2px] active:translate-y-[2px] active:shadow-none transition-all"
                style={{ fontFamily: "'Fredoka', sans-serif" }}
              >
                Accept ✿
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
