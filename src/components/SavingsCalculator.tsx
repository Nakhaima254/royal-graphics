import { useState, useMemo } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Calculator, Check } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";
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

const parsePrice = (price: string): number => {
  return parseInt(price.replace(/,/g, ""), 10);
};

const formatPrice = (price: number): string => {
  return price.toLocaleString();
};

export const SavingsCalculator = ({ services, categoryName = "services" }: SavingsCalculatorProps) => {
  const [selectedServices, setSelectedServices] = useState<string[]>([]);
  const navigate = useNavigate();

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
  };

  const calculations = useMemo(() => {
    const selectedItems = services.filter((s) =>
      selectedServices.includes(s.name)
    );
    const total = selectedItems.reduce(
      (sum, s) => sum + parsePrice(s.price),
      0
    );

    return {
      itemCount: selectedItems.length,
      total,
    };
  }, [selectedServices, services]);

  const handleGetQuote = () => {
    const params = new URLSearchParams();
    params.set("services", selectedServices.join(","));
    params.set("total", calculations.total.toString());
    params.set("category", categoryName);
    navigate(`/contact?${params.toString()}`);
  };

  return (
    <Card className="p-6 lg:p-8 bg-gradient-to-br from-primary/5 via-background to-accent/5 border-primary/20">
      <div className="flex items-center gap-3 mb-6">
        <div className="p-3 rounded-xl bg-primary text-primary-foreground">
          <Icon icon={Calculator} variant="foreground" size="lg" className="text-primary-foreground" />
        </div>
        <div>
          <h3 className="text-xl font-bold">Service Calculator</h3>
          <p className="text-sm text-muted-foreground">
            Select services to build your custom package
          </p>
        </div>
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
            </div>

            <div className="flex justify-between text-lg font-bold pt-2 border-t border-dashed border-border">
              <span>Your Total</span>
              <span className="text-primary">
                KES {formatPrice(calculations.total)}
              </span>
            </div>

            {/* Selected Services Summary */}
            <div className="pt-3">
              <p className="text-xs text-muted-foreground mb-2">
                Your package includes:
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
              Get This Package
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
              Select services above to calculate your total
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </Card>
  );
};
