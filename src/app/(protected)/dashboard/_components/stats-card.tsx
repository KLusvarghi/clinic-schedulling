import {
  CalendarIcon,
  DollarSignIcon,
  UserIcon,
  UsersIcon,
} from "lucide-react";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { formatCurrencyInCents } from "@/helpers/currency";

interface StatsCardProps {
  totalRevenue: number | null;
  totalAppointments: number | null;
  totalDoctors: number | null;
  totalPatients: number | null;
}

const StatsCard = ({
  totalRevenue,
  totalAppointments,
  totalDoctors,
  totalPatients,
}: StatsCardProps) => {
  const stats = [
    {
      title: "Revenue",
      value: totalRevenue ? formatCurrencyInCents(totalRevenue) : "R$ 0,00",
      icon: DollarSignIcon,
    },
    {
      title: "Appointments",
      value: totalAppointments?.toString() ?? "0",
      icon: CalendarIcon,
    },
    {
      title: "Patients",
      value: totalPatients?.toString() ?? "0",
      icon: UserIcon,
    },
    {
      title: "Doctors",
      value: totalDoctors?.toString() ?? "0",
      icon: UsersIcon,
    },
  ];

  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      {stats.map((stat) => {
        const Icon = stat.icon;
        return (
          <Card key={stat.title} className="gap-2">
            <CardHeader className="flex flex-row items-center gap-2 space-y-0 pb-2">
              <div className="bg-primary/10 flex h-8 w-8 items-center justify-center rounded-full">
                <Icon className="text-primary h-4 w-4" />
              </div>
              <CardTitle className="text-muted-foreground text-sm font-medium">
                {stat.title}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stat.value}</div>
            </CardContent>
          </Card>
        );
      })}
    </div>
  );
};

export default StatsCard;
