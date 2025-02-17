import React from "react";
import EmpImage from "../../assets/images/employee.png";
import Card from "../../components/common/Card";
import Navbar from "../../components/layout/Navbar";
import Sidebar from "../../components/layout/Sidebar";
import "../../styles/pages/Dashboard.css";

const employee = {
    name: "Chandu",
    role: "Software Engineer",
    image: EmpImage,
};

const menuItems = [
    { name: "My Profile", path: "/profile", icon: "👤" },
    { name: "Onboarding", path: "/onboarding", icon: "📋" },
    { name: "Timesheets", path: "/timesheets", icon: "⏳" },
    { name: "Leaves", path: "/leaves", icon: "🌴" },
    { name: "Payroll", path: "/payroll", icon: "💰" },
];

const cardData = [
    { title: "Total Employees", value: "1,250", icon: "👥" },
    { title: "Revenue", value: "$15,000", icon: "💰" },
    { title: "Projects", value: "25", icon: "📊" },
    { title: "Leaves", value: "120", icon: "🌴" },
    { title: "Payrolls Processed", value: "80", icon: "💵" },
    { title: "Pending Approvals", value: "10", icon: "⏳" },
];

const Dashboard = () => {
    return (
        <div className="dashboard-container">
            {/* Sidebar */}
            <Sidebar employee={employee} navLinks={menuItems} onLogout={() => alert("Logged out")} />

            {/* Main Content */}
            <div className="dashboard-main">
                {/* Navbar */}
                <Navbar title="Dashboard" notificationCount={3} />

                {/* Cards Layout */}
                <div className="dashboard-cards">
                    {cardData.map((card, index) => (
                        <Card key={index} title={card.title} value={card.value} icon={card.icon} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
