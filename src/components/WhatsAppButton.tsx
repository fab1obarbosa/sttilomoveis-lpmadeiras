import { MessageCircle } from "lucide-react";

import { Button } from "@/components/ui/button";
import { whatsappPhone } from "@/data/siteContent";

interface WhatsAppButtonProps {
  message?: string;
  variant?: "primary" | "secondary" | "hero" | "final";
  size?: "sm" | "md" | "lg";
  className?: string;
  children?: string;
}

const labels = {
  primary: "Solicitar orçamento",
  secondary: "Falar no WhatsApp",
  hero: "Solicitar Orçamento",
  final: "Solicitar orçamento agora",
};

export const WhatsAppButton = ({
  message = "Olá! Gostaria de solicitar um orçamento para um projeto em madeira da Sttilo Móveis.",
  variant = "primary",
  size = "md",
  className = "",
  children,
}: WhatsAppButtonProps) => {
  const whatsappUrl = `https://api.whatsapp.com/send?phone=${whatsappPhone}&text=${encodeURIComponent(message)}`;

  const buttonSizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
  };

  const buttonVariants = {
    primary:
      "bg-primary text-primary-foreground shadow-[0_18px_45px_-18px_hsl(25_100%_55%_/_0.65)] hover:bg-primary/90",
    secondary:
      "border border-white/15 bg-white/5 text-foreground backdrop-blur-sm hover:border-primary/40 hover:bg-white/10",
    hero: "bg-primary text-slate-950 shadow-[0_18px_45px_-18px_hsl(25_100%_55%_/_0.65)] hover:bg-primary/90",
    final:
      "bg-primary text-slate-950 shadow-[0_18px_45px_-18px_hsl(25_100%_55%_/_0.65)] hover:bg-primary/90",
  };

  return (
    <Button
      onClick={() => window.open(whatsappUrl, "_blank", "noopener,noreferrer")}
      className={`${buttonVariants[variant]} ${buttonSizes[size]} rounded-full font-semibold transition-all duration-300 hover:-translate-y-0.5 ${className}`}
    >
      <MessageCircle className="h-5 w-5" />
      {children ?? labels[variant]}
    </Button>
  );
};
