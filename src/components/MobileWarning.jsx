import { useEffect, useState } from "react";
import "../styles/MobileWarning.scss";

const MobileWarning = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Check if the user is on a mobile device
    const handleResize = () => {
      const isMobileDevice =
        window.matchMedia("(max-width: 768px)").matches &&
        /Mobi|Android|iPhone|iPad|iPod|Windows Phone|webOS/i.test(
          navigator.userAgent
        );
      const hasSeenWarning = localStorage.getItem("hasSeenMobileWarning");
      if (isMobileDevice && !hasSeenWarning) {
        setIsMobile(true);
      }
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleClose = () => {
    localStorage.setItem("hasSeenMobileWarning", "true");
    setIsMobile(false);
  };

  return isMobile ? (
    <div className="mobile-warning">
      <p>
        This portfolio is best viewed on a desktop. For the full experience,
        please visit on a larger screen.
      </p>
      <button className="mobile-warning__close" onClick={handleClose}>
        Got it
      </button>
    </div>
  ) : null;
};

export default MobileWarning;
