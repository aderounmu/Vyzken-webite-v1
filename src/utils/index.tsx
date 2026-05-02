import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

export const useScrollToSection = ({
  setMobileMenuOpen,
}: {
  setMobileMenuOpen?: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    if (setMobileMenuOpen) setMobileMenuOpen(false);
    // if (location.pathname !== "/") {
    //   navigate("/", { state: { scrollTo: id } });
    //   return;
    // }
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    if (
      location.pathname === "/" &&
      location.state &&
      (location.state as any).scrollTo
    ) {
      const id = (location.state as any).scrollTo;
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
      // Clear state
      window.history.replaceState({}, document.title);
    }
  }, [location]);

  return {
    navigation , 
    location,
    scrollToSection, 
    isScrolled, 
    setIsScrolled
  }
};
