import { useState } from "react";

export const useMenuOpen = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  const handleMenuOpen = () => {
    setIsMenuOpen(prev => !prev);
  };
  return {
    isMenuOpen,
    handleMenuOpen,
  };
};
