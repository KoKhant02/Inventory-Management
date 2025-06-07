// src/pages/Dashboard/Dashboard.jsx
import {
  CartesianGrid,
  Cell,
  Legend,
  Line,
  LineChart,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import "./Dashboard.css";

const Dashboard = () => {
  const summaryCards = [
    { title: "Total Items", value: "45,678.90" },
    { title: "Items in Stock", value: "2,405", note: "+33 in this month" },
    {
      title: "Items out of Stock",
      value: "10,353",
      note: "-8000 in this month",
    },
    { title: "Weekly Report", value: "4,120", link: "View all Reports" },
    { title: "Monthly Report", value: "22,845", link: "View all Reports" },
    { title: "Total Users", value: "45" },
  ];

  const itemLocationData = [
    { image: "[Img]", name: "Product A", zone: "Zone A", speed: "Fast Moving" },
    { image: "[Img]", name: "Product B", zone: "Zone A", speed: "Fast Moving" },
    { image: "[Img]", name: "Product C", zone: "Zone B", speed: "Medium Moving" },
    { image: "[Img]", name: "Product D", zone: "Zone B", speed: "Medium Moving" },
    { image: "[Img]", name: "Product E", zone: "Zone C", speed: "Slow Moving" },
    { image: "[Img]", name: "Product F", zone: "Zone C", speed: "Slow Moving" },
    { image: "[Img]", name: "Product G", zone: "Zone C", speed: "Slow Moving" },
  ];

  const lowStockItems = [
    { name: "Product A", units: 10 },
    { name: "Product B", units: 5 },
    { name: "Product C", units: 5 },
    { name: "Product D", units: 2 },
    { name: "Product E", units: 1 },
  ];

  const movingItemsData = [
    { name: "Week 1", FastMoving: 400, MediumMoving: 250, SlowMoving: 100 },
    { name: "Week 2", FastMoving: 700, MediumMoving: 400, SlowMoving: 200 },
    { name: "Week 3", FastMoving: 1000, MediumMoving: 600, SlowMoving: 250 },
    { name: "Week 4", FastMoving: 1200, MediumMoving: 800, SlowMoving: 300 },
  ];

  const wastedItemsData = [
    { name: "Product A", value: 400 },
    { name: "Product B", value: 300 },
    { name: "Product C", value: 200 },
    { name: "Product D", value: 100 },
  ];

  const generateColor = (index) => {
    const palette = ["#8884d8", "#82ca9d", "#ffc658", "#ff8042", "#ffbb28", "#00C49F", "#FFBB28", "#FF8042", "#0088FE", "#FF6384"];
    return palette[index % palette.length];
  };

  return (
    <div className="dashboard-container">
      <div className="dashboard-content">
        <div className="dashboard-grid">
          {summaryCards.map((card, index) => (
            <div className="card" key={index}>
              {card.title}
              <h2>{card.value}</h2>
              {card.note && <span>{card.note}</span>}
              {card.link && <a href="#">{card.link}</a>}
            </div>
          ))}

          <div className="card">
            Item Location & Movement
            <table>
              <thead>
                <tr>
                  <th>Image</th>
                  <th>Item</th>
                  <th>Zone</th>
                  <th>Movement Speed</th>
                </tr>
              </thead>
              <tbody>
                {itemLocationData.map((item, index) => (
                  <tr key={index}>
                    <td>{item.image}</td>
                    <td>{item.name}</td>
                    <td>{item.zone}</td>
                    <td>
                      <span
                        className={
                          item.speed === "Fast Moving"
                            ? "tag-fast"
                            : item.speed === "Medium Moving"
                            ? "tag-medium"
                            : "tag-slow"
                        }
                      >
                        {item.speed}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="card table">
            Low Stock Alert
            <table className="low-stock-table">
              <thead>
                <tr>
                  <th>Item</th>
                  <th>Units Left</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {lowStockItems.map((item, index) => (
                  <tr key={index}>
                    <td>{item.name}</td>
                    <td className={item.units <= 3 ? "critical" : ""}>
                      {item.units}
                    </td>
                    <td>
                      <a href="#" className="restock-btn">
                        Restock Now
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="card chart">
            Moving Items Analysis
            <ResponsiveContainer width="100%" height={250}>
              <LineChart data={movingItemsData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" tick={{ fontSize: 12 }} />
                <YAxis tick={{ fontSize: 12 }} />
                <Tooltip contentStyle={{ fontSize: 12 }} />
                <Legend wrapperStyle={{ fontSize: 12 }} />
                <Line
                  type="monotone"
                  dataKey="FastMoving"
                  stroke="#28a745"
                  name="Fast Moving (Zone A)"
                />
                <Line
                  type="monotone"
                  dataKey="MediumMoving"
                  stroke="#ffc107"
                  name="Medium Moving (Zone B)"
                />
                <Line
                  type="monotone"
                  dataKey="SlowMoving"
                  stroke="#dc3545"
                  name="Slow Moving (Zone C)"
                />
              </LineChart>
            </ResponsiveContainer>
          </div>

          <div className="card chart">
            Wasted Items Analysis
            <ResponsiveContainer width="100%" height={250}>
              <PieChart>
                <Pie
                  data={wastedItemsData}
                  dataKey="value"
                  nameKey="name"
                  cx="50%"
                  cy="50%"
                  outerRadius={80}
                  label
                >
                  {wastedItemsData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={generateColor(index)} />
                  ))}
                </Pie>

                <Tooltip />
                <Legend />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
