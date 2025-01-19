import { useState, useEffect } from "react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "../components/ui/card";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { UserCircle, Mail, Phone, MapPin, CircleUserRound } from "lucide-react";

const ColorComponentsShowcase = ({ color1, color2 }) => {
  // Sample data for charts
  const chartData = [
    { name: "Jan", value: 400 },
    { name: "Feb", value: 300 },
    { name: "Mar", value: 600 },
    { name: "Apr", value: 800 },
    { name: "May", value: 500 },
    { name: "Jun", value: 700 },
  ];

  // Sample user data
  const users = [
    { name: "Alice Johnson", email: "alice@example.com", role: "Designer" },
    { name: "Bob Smith", email: "bob@example.com", role: "Developer" },
    { name: "Carol White", email: "carol@example.com", role: "Manager" },
  ];

  // Sample stats data
  const stats = [
    { label: "Total Users", value: "8.8K" },
    { label: "Active Now", value: "921" },
    { label: "Revenue", value: "$45K" },
  ];

  return (
    <div className="w-full p-4 space-y-6">
      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {stats.map((stat, index) => (
          <Card key={index} style={{ backgroundColor: color1, color: color2 }}>
            <CardContent className="p-6">
              <p className="text-3xl font-bold py-2">{stat.value}</p>
              <p className="text-sm ">{stat.label}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Chart and Users Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {/* Chart Card */}
        <Card className="p-4" style={{ backgroundColor: color1 }}>
          <CardHeader>
            <CardTitle style={{ color: color2 }}>Monthly Trends</CardTitle>
          </CardHeader>
          <CardContent className="h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={chartData}>
                <CartesianGrid
                  strokeDasharray="3 3"
                  stroke={color2}
                  opacity={0.2}
                />
                <XAxis dataKey="name" stroke={color2} />
                <YAxis stroke={color2} />
                <Tooltip
                  contentStyle={{ backgroundColor: color1, color: color2 }}
                  labelStyle={{ color: color2 }}
                />
                <Line
                  type="monotone"
                  dataKey="value"
                  stroke={color2}
                  strokeWidth={2}
                />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* Users Card */}
        <Card style={{ backgroundColor: color1 }}>
          <CardHeader>
            <CardTitle style={{ color: color2 }}>Team Members</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {users.map((user, index) => (
                <div
                  key={index}
                  className="flex items-center p-3 rounded-lg"
                  style={{
                    backgroundColor: `${color1}`,
                    border: `1px solid ${color2}`,
                  }}
                >
                  <CircleUserRound size={40} style={{ color: color2 }} />
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
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {[
          { icon: UserCircle, title: "User Management" },
          { icon: Mail, title: "Email Integration" },
          { icon: Phone, title: "Mobile Support" },
          { icon: MapPin, title: "Location Tracking" },
        ].map((feature, index) => (
          <Card
            key={index}
            className="text-center py-4"
            style={{ backgroundColor: index % 2 === 0 ? color1 : color2 }}
          >
            <CardContent className="p-6 py-4">
              <feature.icon
                className="mx-auto mb-4 "
                size={40}
                style={{ color: index % 2 === 0 ? color2 : color1 }}
              />
              <h3
                className="font-semibold"
                style={{ color: index % 2 === 0 ? color2 : color1 }}
              >
                {feature.title}
              </h3>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default ColorComponentsShowcase;
