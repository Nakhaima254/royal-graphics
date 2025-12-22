import { useState, useMemo, useEffect, useRef } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Calculator, TrendingDown, Sparkles, Check } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";
import confetti from "canvas-confetti";
import { useToast } from "@/hooks/use-toast";
import type { LucideIcon } from "lucide-react";
import Icon from "@/components/ui/icon";

interface Service {
  name: string;
  price: string;
  description: string;
  icon: LucideIcon;
  popular?: boolean;
}

interface SavingsCalculatorProps {
  services: Service[];
  categoryName?: string;
}

const getDiscountTier = (total: number, itemCount: number) => {
  if (itemCount >= 6) return { percentage: 20, label: "Premium Bundle" };
  if (itemCount >= 4) return { percentage: 15, label: "Business Bundle" };
  if (itemCount >= 2) return { percentage: 10, label: "Starter Bundle" };
  return { percentage: 0, label: "No discount" };
};

const parsePrice = (price: string): number => {
  return parseInt(price.replace(/,/g, ""), 10);
};

const formatPrice = (price: number): string => {
  return price.toLocaleString();
};

export const SavingsCalculator = ({ services, categoryName = "services" }: SavingsCalculatorProps) => {
  const [selectedServices, setSelectedServices] = useState<string[]>([]);
  const navigate = useNavigate();
  const { toast } = useToast();
  const hasTriggeredConfetti = useRef(false);

  const toggleService = (serviceName: string) => {
    setSelectedServices((prev) =>
      prev.includes(serviceName)
        ? prev.filter((s) => s !== serviceName)
        : [...prev, serviceName]
    );
  };

  const selectAll = () => {
    setSelectedServices(services.map((s) => s.name));
  };

  const clearAll = () => {
    setSelectedServices([]);
    hasTriggeredConfetti.current = false;
  };

  const fireConfetti = () => {
    const count = 200;
    const defaults = {
      origin: { y: 0.7 },
      zIndex: 9999,
    };

    function fire(particleRatio: number, opts: confetti.Options) {
      confetti({
        ...defaults,
        ...opts,
        particleCount: Math.floor(count * particleRatio),
      });
    }

    fire(0.25, { spread: 26, startVelocity: 55 });
    fire(0.2, { spread: 60 });
    fire(0.35, { spread: 100, decay: 0.91, scalar: 0.8 });
    fire(0.1, { spread: 120, startVelocity: 25, decay: 0.92, scalar: 1.2 });
    fire(0.1, { spread: 120, startVelocity: 45 });
  };

  const calculations = useMemo(() => {
    const selectedItems = services.filter((s) =>
      selectedServices.includes(s.name)
    );
    const subtotal = selectedItems.reduce(
      (sum, s) => sum + parsePrice(s.price),
      0
    );
    const discountTier = getDiscountTier(subtotal, selectedItems.length);
    const discountAmount = Math.round(
      (subtotal * discountTier.percentage) / 100
    );
    const total = subtotal - discountAmount;

    // Calculate progress to next tier
    let nextTierInfo = { needed: 0, nextPercentage: 0, label: "" };
    if (selectedItems.length === 0) {
      nextTierInfo = { needed: 2, nextPercentage: 10, label: "Starter Bundle" };
    } else if (selectedItems.length === 1) {
      nextTierInfo = { needed: 1, nextPercentage: 10, label: "Starter Bundle" };
    } else if (selectedItems.length < 4) {
      nextTierInfo = { needed: 4 - selectedItems.length, nextPercentage: 15, label: "Business Bundle" };
    } else if (selectedItems.length < 6) {
      nextTierInfo = { needed: 6 - selectedItems.length, nextPercentage: 20, label: "Premium Bundle" };
    }

    return {
      itemCount: selectedItems.length,
      subtotal,
      discountTier,
      discountAmount,
      total,
      nextTierInfo,
    };
  }, [selectedServices, services]);

  // Fire confetti when reaching 20% tier
  useEffect(() => {
    if (calculations.discountTier.percentage === 20 && !hasTriggeredConfetti.current) {
      hasTriggeredConfetti.current = true;
      fireConfetti();
      toast({
        title: "Maximum Savings Unlocked!",
        description: "You've reached the 20% Premium Bundle discount tier!",
      });
    } else if (calculations.discountTier.percentage < 20) {
      hasTriggeredConfetti.current = false;
    }
  }, [calculations.discountTier.percentage, toast]);

  const handleGetQuote = () => {
    const params = new URLSearchParams();
    params.set("services", selectedServices.join(","));
    params.set("total", calculations.total.toString());
    params.set("category", categoryName);
    params.set("discount", calculations.discountTier.percentage.toString());
    navigate(`/contact?${params.toString()}`);
  };

  return (
    <Card className="p-6 lg:p-8 bg-gradient-to-br from-primary/5 via-background to-accent/5 border-primary/20">
      <div className="flex items-center gap-3 mb-6">
        <div className="p-3 rounded-xl bg-primary text-primary-foreground">
          <Icon icon={Calculator} variant="foreground" size="lg" className="text-primary-foreground" />
        </div>
        <div>
          <h3 className="text-xl font-bold">Savings Calculator</h3>
          <p className="text-sm text-muted-foreground">
            Select services to see your custom bundle price
          </p>
        </div>
      </div>

      {/* Discount Tiers Info */}
      <div className="mb-6 p-4 rounded-lg bg-secondary/50 border border-border">
        <p className="text-sm font-semibold mb-2 flex items-center gap-2">
          <Icon icon={Sparkles} variant="primary" size="sm" />
          Bundle Discount Tiers
        </p>
        
        {/* Visual Progress Bar */}
        <div className="mb-4">
          <div className="relative h-3 bg-muted rounded-full overflow-hidden">
            <motion.div
              className="absolute inset-y-0 left-0 bg-gradient-to-r from-primary/70 via-primary to-green-500 rounded-full"
              initial={{ width: 0 }}
              animate={{ 
                width: `${Math.min((calculations.itemCount / 6) * 100, 100)}%` 
              }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            />
            {/* Tier markers */}
            <div className="absolute inset-0 flex">
              <div className="w-1/3 border-r border-background/50" />
              <div className="w-1/3 border-r border-background/50" />
              <div className="w-1/3" />
            </div>
          </div>
          <div className="flex justify-between mt-1">
            <span className={`text-[10px] ${calculations.itemCount >= 2 ? "text-primary font-semibold" : "text-muted-foreground"}`}>
              2 services
            </span>
            <span className={`text-[10px] ${calculations.itemCount >= 4 ? "text-primary font-semibold" : "text-muted-foreground"}`}>
              4 services
            </span>
            <span className={`text-[10px] ${calculations.itemCount >= 6 ? "text-green-600 font-semibold" : "text-muted-foreground"}`}>
              6+ services
            </span>
          </div>
        </div>
        
        <div className="grid grid-cols-3 gap-2 text-xs">
          <div
            className={`p-2 rounded text-center transition-all ${
              calculations.itemCount >= 2 && calculations.itemCount < 4
                ? "bg-primary text-primary-foreground"
                : "bg-muted"
            }`}
          >
            <div className="font-bold">10% OFF</div>
            <div className="opacity-80">2-3 services</div>
          </div>
          <div
            className={`p-2 rounded text-center transition-all ${
              calculations.itemCount >= 4 && calculations.itemCount < 6
                ? "bg-primary text-primary-foreground"
                : "bg-muted"
            }`}
          >
            <div className="font-bold">15% OFF</div>
            <div className="opacity-80">4-5 services</div>
          </div>
          <div
            className={`p-2 rounded text-center transition-all ${
              calculations.itemCount >= 6
                ? "bg-primary text-primary-foreground"
                : "bg-muted"
            }`}
          >
            <div className="font-bold">20% OFF</div>
            <div className="opacity-80">6+ services</div>
          </div>
        </div>
        
        {/* Progress to Next Tier */}
        {calculations.nextTierInfo.needed > 0 && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            className="mt-3 pt-3 border-t border-border/50"
          >
            <p className="text-xs text-center text-muted-foreground">
              Add <span className="font-bold text-primary">{calculations.nextTierInfo.needed} more service{calculations.nextTierInfo.needed > 1 ? "s" : ""}</span> to unlock{" "}
              <span className="font-bold text-green-600">{calculations.nextTierInfo.nextPercentage}% off</span> ({calculations.nextTierInfo.label})
            </p>
          </motion.div>
        )}
        
        {calculations.itemCount >= 6 && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="mt-3 pt-3 border-t border-border/50"
          >
            <p className="text-xs text-center font-semibold text-green-600 flex items-center justify-center gap-1">
              <Icon icon={Sparkles} variant="primary" size="xs" className="text-green-600" />
              Maximum discount unlocked!
              <Icon icon={Sparkles} variant="primary" size="xs" className="text-green-600" />
            </p>
          </motion.div>
        )}
      </div>

      {/* Quick Actions */}
      <div className="flex gap-2 mb-4">
        <Button variant="outline" size="sm" onClick={selectAll}>
          Select All
        </Button>
        <Button variant="ghost" size="sm" onClick={clearAll}>
          Clear
        </Button>
      </div>

      {/* Service Selection Grid */}
      <div className="grid sm:grid-cols-2 gap-2 mb-6 max-h-[300px] overflow-y-auto pr-2">
        {services.map((service) => {
          const isSelected = selectedServices.includes(service.name);
          const Icon = service.icon;
          return (
            <motion.div
              key={service.name}
              whileTap={{ scale: 0.98 }}
              className={`p-3 rounded-lg border cursor-pointer transition-all ${
                isSelected
                  ? "bg-primary/10 border-primary"
                  : "bg-card hover:bg-muted/50 border-border"
              }`}
              onClick={() => toggleService(service.name)}
            >
              <div className="flex items-center gap-3">
                <Checkbox
                  checked={isSelected}
                  onCheckedChange={() => toggleService(service.name)}
                  className="pointer-events-none"
                />
                <Icon
                  className={`w-4 h-4 ${
                    isSelected ? "text-primary" : "text-muted-foreground"
                  }`}
                />
                <div className="flex-1 min-w-0">
                  <p
                    className={`text-sm font-medium truncate ${
                      isSelected ? "text-primary" : ""
                    }`}
                  >
                    {service.name}
                  </p>
                </div>
                <span className="text-sm font-semibold whitespace-nowrap">
                  KES {service.price}
                </span>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Calculation Summary */}
      <AnimatePresence mode="wait">
        {calculations.itemCount > 0 ? (
          <motion.div
            key="summary"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="space-y-3 pt-4 border-t border-border"
          >
            <div className="flex justify-between text-sm">
              <span className="text-muted-foreground">
                {calculations.itemCount} service
                {calculations.itemCount > 1 ? "s" : ""} selected
              </span>
              <span>KES {formatPrice(calculations.subtotal)}</span>
            </div>

            {calculations.discountTier.percentage > 0 && (
              <motion.div
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                className="flex justify-between text-sm text-green-600"
              >
                <span className="flex items-center gap-1">
                  <Icon icon={TrendingDown} variant="primary" size="sm" className="text-green-600" />
                  {calculations.discountTier.label} (-
                  {calculations.discountTier.percentage}%)
                </span>
                <span>- KES {formatPrice(calculations.discountAmount)}</span>
              </motion.div>
            )}

            <div className="flex justify-between text-lg font-bold pt-2 border-t border-dashed border-border">
              <span>Your Total</span>
              <div className="text-right">
                <span className="text-primary">
                  KES {formatPrice(calculations.total)}
                </span>
                {calculations.discountAmount > 0 && (
                  <div className="text-xs font-normal text-green-600">
                    You save KES {formatPrice(calculations.discountAmount)}!
                  </div>
                )}
              </div>
            </div>

            {/* Selected Services Summary */}
            <div className="pt-3">
              <p className="text-xs text-muted-foreground mb-2">
                Your bundle includes:
              </p>
              <div className="flex flex-wrap gap-1">
                {selectedServices.map((name) => (
                  <span
                    key={name}
                    className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full"
                  >
                    {name}
                  </span>
                ))}
              </div>
            </div>

            <Button className="w-full mt-2" size="lg" onClick={handleGetQuote}>
              <Icon icon={Check} variant="foreground" size="sm" className="mr-2 text-primary-foreground" />
              Get This Bundle
            </Button>
          </motion.div>
        ) : (
          <motion.div
            key="empty"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="text-center py-6 text-muted-foreground"
          >
            <Icon icon={Calculator} variant="muted" size="xl" className="w-10 h-10 mx-auto mb-2 opacity-30" />
            <p className="text-sm">
              Select services above to calculate your savings
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </Card>
  );
};
