"use client";

import { Card } from "@/components/ui/card";

const ServiceCard = ({
  service,
  isServicePage = false,
}: {
  service: any;
  isServicePage?: boolean;
}) => {
  return (
    <Card
      className="group relative p-6 bg-card/50 backdrop-blur-sm border-border/50 
                                     hover:border-primary/50 transition-all duration-500 
                                     hover:shadow-[0_0_60px_rgba(14,165,233,0.4),0_0_100px_rgba(168,85,247,0.3)] 
                                     hover:scale-[1.02] overflow-hidden w-full"
    >
      {/* Hover background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

      {/* Card content */}
      <div className="relative z-10 space-y-4">
        <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary to-secondary p-[1px]">
          <div className="w-full h-full bg-card rounded-lg flex items-center justify-center">
            <service.icon className="h-6 w-6 text-primary" />
          </div>
        </div>
        <h3 className="text-xl font-semibold group-hover:gradient-text transition-all">
          {service.title}
        </h3>
        <p className="text-muted-foreground">{service.description}</p>

        {isServicePage && (
          <ul className="mt-2 space-y-1 text-sm text-muted-foreground">
            {service.features.map((feature: any, i: number) => (
              <li key={i} className="flex items-start gap-2">
                <span className="text-primary mt-0.5">
                  {/* Check icon */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={3}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </span>
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        )}
      </div>
    </Card>
  );
};

export default ServiceCard;
