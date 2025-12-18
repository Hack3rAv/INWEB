"use client";

import AdminCard from "@/components/AdminCard";

export default function AdminDashboard() {
    // Placeholder data - we will connect this to the database later
    const stats = [
        { title: "Open Tickets", value: "12", href: "/admin/tickets" },
        { title: "Pending Appeals", value: "5", href: "/admin/appeals" },
        { title: "Hiring Applicants", value: "3", href: "/admin/hiring" },
        { title: "Audit Logs", value: "View Logs", href: "/admin/audit" },
    ];

    return (
        <section style={{ padding: "80px" }}>
            <h1 className="page-title">Admin Dashboard</h1>
            <p className="page-sub">Overview of website activity and statistics.</p>
            
            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {stats.map((stat) => (
                    <AdminCard key={stat.title} title={stat.title} value={stat.value} href={stat.href} />
                ))}
            </div>
        </section>
    );
}

