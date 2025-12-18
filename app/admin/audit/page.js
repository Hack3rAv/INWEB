export default function AuditLogs() {
    // Placeholder data
    const logs = [
        { id: 1, date: "2024-07-30 10:00 AM", user: "Admin1", action: "Approved Appeal", details: "Appeal ID: APL-002" },
        { id: 2, date: "2024-07-30 09:45 AM", user: "Admin2", action: "Closed Ticket", details: "Ticket ID: TKT-003" },
        { id: 3, date: "2024-07-29 05:20 PM", user: "Admin1", action: "Hired Applicant", details: "Applicant: Mary Williams" },
        { id: 4, date: "2024-07-29 03:15 PM", user: "System", action: "User Registered", details: "User: NewPlayer456" },
        { id: 5, date: "2024-07-28 11:00 AM", user: "Admin2", action: "Denied Appeal", details: "Appeal ID: APL-003" },
    ];

    return (
        <section style={{ padding: "80px" }}>
            <h1 className="page-title">Audit Logs</h1>
            <p className="page-sub">Chronological record of all administrative and system actions.</p>

            <div className="mt-8 bg-gray-800 bg-opacity-50 rounded-lg shadow-lg p-6">
                <table className="min-w-full text-left">
                    <thead className="border-b border-gray-600">
                        <tr>
                            <th className="py-3 px-4">Date</th>
                            <th className="py-3 px-4">User</th>
                            <th className="py-3 px-4">Action</th>
                            <th className="py-3 px-4">Details</th>
                        </tr>
                    </thead>
                    <tbody>
                        {logs.map((log) => (
                            <tr key={log.id} className="border-b border-gray-700 hover:bg-gray-700 transition-colors">
                                <td className="py-3 px-4">{log.date}</td>
                                <td className="py-3 px-4">{log.user}</td>
                                <td className="py-3 px-4">{log.action}</td>
                                <td className="py-3 px-4">{log.details}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </section>
    );
}
