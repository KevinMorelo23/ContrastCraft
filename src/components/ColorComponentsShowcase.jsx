
import { BarChart, Briefcase, Database } from "lucide-react";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "../components/ui/card";
import {
  LineChart,
  AreaChart,
  Area,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import {
 
  Users,
  DollarSign,
  Activity,
  ShoppingCart,
} from "lucide-react";

const data = [
  { name: "Jan", value: 500 },
  { name: "Feb", value: 650 },
  { name: "Mar", value: 780 },
  { name: "Apr", value: 600 },
];
const ColorComponentsShowcase = ({ color1, color2 }) => {
  
  const chartData = [
    { name: "Jan", value: 400 },
    { name: "Feb", value: 300 },
    { name: "Mar", value: 600 },
    { name: "Apr", value: 800 },
    { name: "May", value: 500 },
    { name: "Jun", value: 700 },
  ];

 
  const users = [
    { name: "Andres Martinez", email: "alice@example.com", role: "Designer" },
    { name: "Bob Smith", email: "bob@example.com", role: "Developer" },
    { name: "Carol White", email: "carol@example.com", role: "Manager" },
  ];

  // Sample stats data
  const stats = [
    { label: "Total Users", value: "8.8K", icon: <Users size={24} /> },
    { label: "Active Now", value: "921", icon: <Activity size={24} /> },
    { label: "Revenue", value: "$45K", icon: <DollarSign size={24} /> },
    { label: "Visits", value: "1.2M", icon: <ShoppingCart size={24} /> },
  ];

  return (
    <div className="w-full p-4 space-y-6">
      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {stats.map((stat, index) => (
          <Card key={index} style={{ backgroundColor: color1, color: color2 }}>
            <CardContent className="p-4 justify-between flex">
              <div>
                <p className="text-3xl font-bold mt-4">{stat.value}</p>
                <p className="text-sm font-light mt-2">{stat.label}</p>
              </div>
              <div className="py-4">
                <div
                  className="p-4 rounded-full "
                  style={{
                    backgroundColor: `${color2}20`, 
                  }}
                >
                  {stat.icon}
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Chart and Users Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {/* Chart Card */}
        <Card
          className="p-4 shadow-lg rounded-xl"
          style={{ backgroundColor: color1 }}
        >
          <CardHeader>
            <CardTitle style={{ color: color2 }} className="text-2xl font-bold">
              Monthly Trends
            </CardTitle>
          </CardHeader>
          <CardContent className="h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={chartData}>
                {/* Malla de fondo con menor opacidad */}
                <CartesianGrid
                  strokeDasharray="3 3"
                  stroke={color2}
                  opacity={0.1}
                />

                {/* Ejes con mejor visibilidad */}
                <XAxis dataKey="name" stroke={color2} tick={{ fill: color2 }} />
                <YAxis stroke={color2} tick={{ fill: color2 }} />

                {/* Tooltip mejorado */}
                <Tooltip
                  contentStyle={{
                    backgroundColor: color1,
                    color: color2,
                    borderRadius: "8px",
                    padding: "8px",
                    border: `1px solid ${color2}`,
                  }}
                  labelStyle={{ color: color2, fontWeight: "bold" }}
                  itemStyle={{ color: color2 }}
                />

                {/* Definición del gradiente para la línea y el área */}
                <defs>
                  <linearGradient id="areaGradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor={color2} stopOpacity={0.6} />
                    <stop offset="100%" stopColor={color2} stopOpacity={0.1} />
                  </linearGradient>
                </defs>

                {/* Área con gradiente */}
                <Area
                  type="monotone"
                  dataKey="value"
                  stroke={color2}
                  strokeWidth={3}
                  fill="url(#areaGradient)"
                  animationDuration={500}
                />

                {/* Línea con gradiente y puntos animados */}
                <Line
                  type="monotone"
                  dataKey="value"
                  stroke={color2}
                  strokeWidth={3}
                  dot={{ r: 4, fill: color2 }}
                  activeDot={{ r: 6, stroke: color1, strokeWidth: 2 }}
                  animationDuration={500}
                />
              </AreaChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* Users Card */}
        <Card
          className="shadow-lg rounded-xl"
          style={{ backgroundColor: color1 }}
        >
          <CardHeader>
            <CardTitle
              style={{ color: color2 }}
              className="text-xl font-semibold"
            >
              Team Members
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {users.map((user, index) => (
                <div
                  key={index}
                  className="flex items-center p-3 rounded-lg"
                  style={{
                    backgroundColor: color1,
                    border: `1px solid ${color2}`,
                  }}
                >
                  <img
                    src={`https://robohash.org/${user.name}.png?size=50x50`}
                    alt={user.name}
                    className="w-12 h-12 rounded-full border"
                    style={{ borderColor: color2 }}
                  />
                  <div className="ml-4" style={{ color: color2 }}>
                    <p className="font-semibold">{user.name}</p>
                    <p className="text-sm opacity-80">{user.role}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Feature Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 ">
        {/* Earnings Card */}
        <div
          className="p-6 rounded-2xl shadow-lg relative"
          style={{ backgroundColor: color1, color: color2 }}
        >
          <div className="absolute top-4 right-4 p-2 rounded-full bg-white/20">
            <BarChart size={24} style={{ color: color2 }} />
          </div>
          <p className="opacity-80">Earnings for this month</p>
          <h2 className="text-3xl font-bold mt-2">$780.5</h2>
          <span
            className="px-3 py-1 rounded-lg text-sm mt-2 inline-block"
            style={{ backgroundColor: color2, color: color1 }}
          >
            +2.45%
          </span>
          <div className="mt-4">
            <ResponsiveContainer width="100%" height={80}>
              <LineChart data={data}>
                <CartesianGrid
                  strokeDasharray="3 3"
                  stroke={color2}
                  opacity={0.2}
                />
                <XAxis dataKey="name" stroke={color2} />
                <YAxis hide />
                <Tooltip
                  contentStyle={{ backgroundColor: color1, color: color2 }}
                />
                <Line
                  type="monotone"
                  dataKey="value"
                  stroke={color2}
                  strokeWidth={2}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Server Resources */}
        <div
          className="p-6 rounded-2xl shadow-lg"
          style={{ backgroundColor: color1, color: color2 }}
        >
          <p className="opacity-80">Server Resources</p>
          <h2 className="text-3xl font-bold mt-2">$30,227.00</h2>
          <p className="text-sm opacity-80">Estimated savings</p>
          <div
            className="w-full rounded-full h-2 mt-3"
            style={{ backgroundColor: color2 }}
          >
            <div
              className="h-2 rounded-full"
              style={{ width: "65%", backgroundColor: color2 }}
            ></div>
          </div>
          <div className="flex justify-between text-sm opacity-80 mt-2">
            <span>$20,124/mo Total saved</span>
            <span>$10,124/mo Saving in progress</span>
          </div>
        </div>

        {/* Project Progress */}
        <div
          className="p-6 rounded-2xl shadow-lg h-fit"
          style={{ backgroundColor: color1, color: color2 }}
        >
          <p className="opacity-80">Project Progress</p>
          <div
            className="w-full rounded-full h-2 mt-3"
            style={{ backgroundColor: color2 }}
          >
            <div
              className="h-2 rounded-full"
              style={{ width: "80%", backgroundColor: color2 }}
            ></div>
          </div>
          <p className="text-right text-sm opacity-80 mt-2">100%</p>
        </div>

        {/* Community Message */}
        <div
          className="p-6 rounded-2xl shadow-lg flex items-center"
          style={{ backgroundColor: color1, color: color2 }}
        >
          <div
            className="p-3 rounded-full"
            style={{ backgroundColor: `${color2}40` }}
          >
            <Briefcase size={24} style={{ color: color2 }} />
          </div>
          <div className="ml-4">
            <p className="font-semibold">Dear Client</p>
            <p className="text-sm opacity-80">
              Join our online community. It helps in managing your projects.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ColorComponentsShowcase;
