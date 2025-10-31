
import "../section4.css";

"use client";

import { TrendingUp } from "lucide-react";
import { Area, AreaChart, CartesianGrid, XAxis } from "recharts";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../components/ui/card";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "../components/ui/chart";

// Datos reales aproximados: pérdida de biodiversidad global (índice Planeta Vivo)
const chartData = [
  { year: 1970, biodiversityIndex: 100 },
  { year: 1980, biodiversityIndex: 83 },
  { year: 1990, biodiversityIndex: 68 },
  { year: 2000, biodiversityIndex: 55 },
  { year: 2010, biodiversityIndex: 44 },
  { year: 2020, biodiversityIndex: 31 },
  { year: 2023, biodiversityIndex: 28 },
];

const chartConfig = {
  biodiversityIndex: {
    label: "Índice de biodiversidad",
    color: "var(--chart-stroke)",
  },
};

// Componente del gráfico
export function ChartAreaLinear() {
  return (
      <Card className="section4-card">
      <CardHeader>
        <CardTitle>Caída global de los ecosistemas</CardTitle>
        <CardDescription>Índice Planeta Vivo (1970–2023)</CardDescription>
      </CardHeader>

      <CardContent className="section4-card-content">
        <ChartContainer className="section4-chart" config={chartConfig}>
          <AreaChart
            data={chartData}
            width={650}
            height={400}
            margin={{ left: 12, right: 12 }}
          >
            <CartesianGrid vertical={false} />
            <XAxis dataKey="year" tickLine={false} axisLine={false} tickMargin={8} />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent indicator="dot" hideLabel />}
            />
            <Area
              dataKey="biodiversityIndex"
              type="monotone"
              fill="var(--chart-fill)"
              stroke="var(--chart-stroke)"
              strokeWidth={2}
              fillOpacity={0.4}
            />
          </AreaChart>
        </ChartContainer>
      </CardContent>

      <CardFooter className="section4-card-footer">
        <div>
          Pérdida del 75% promedio desde 1970{" "}
          <TrendingUp className="h-4 w-4 rotate-180 text-red-500" />
        </div>
      </CardFooter>
    </Card>
  );
}

// Sección completa
export default function Section4() {
  return (
    <section id="graficos" className="section4">
      <div className="container-section4">
        <h2 className="titulo_section4">Evolución de los Ecosistemas</h2>
        <ChartAreaLinear />
      </div>
    </section>
  );
}
