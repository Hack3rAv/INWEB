import Link from "next/link";

export default function Tickets() {
    // Placeholder data - will be replaced with database data
    const tickets = [
        { id: "TKT-001", subject: "Website login issue", user: "Player123", status: "Open", lastUpdated: "2024-07-30" },
        { id: "TKT-002", subject: "Donation not processed", user: "DonorX", status: "Open", lastUpdated: "2024-07-29" },
        { id: "TKT-003", subject: "Bug with in-game item", user: "GamerPro", status: "Closed", lastUpdated: "2024-07-28" },
        { id: "TKT-004", subject: "Question about rules", user: "Newbie", status: "Closed", lastUpdated: "2024-07-27" },
    ];

    return (
        <section style={{ padding: "80px" }}>
            <h1 className="page-title">Technical Tickets</h1>
            <p className="page-sub">All technical tickets will be visible to authorized admins.</p>

            <div className="mt-8 bg-gray-800 bg-opacity-50 rounded-lg shadow-lg p-6">
                <table className="min-w-full text-left">
                    <thead className="border-b border-gray-600">
                        <tr>
                            <th className="py-3 px-4">Ticket ID</th>
                            <th className="py-3 px-4">Subject</th>
                            <th className="py-3 px-4">User</th>
                            <th className="py-3 px-4">Status</th>
                            <th className="py-3 px-4">Last Updated</th>
                            <th className="py-3 px-4">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {tickets.map((ticket) => (
                            <tr key={ticket.id} className="border-b border-gray-700 hover:bg-gray-700 transition-colors">
                                <td className="py-3 px-4">{ticket.id}</td>
                                <td className="py-3 px-4">{ticket.subject}</td>
                                <td className="py-3 px-4">{ticket.user}</td>
                                <td className="py-3 px-4">
                                    <span className={`px-2 py-1 rounded-full text-xs ${
                                        ticket.status === "Open" ? "bg-green-500 text-white" : "bg-red-500 text-white"
                                    }`}>
                                        {ticket.status}
                                    </span>
                                </td>
                                <td className="py-3 px-4">{ticket.lastUpdated}</td>
                                <td className="py-3 px-4">
                                    <Link href={`/admin/tickets/${ticket.id}`} className="text-blue-400 hover:underline">
                                        View
                                    </Link>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </section>
    );
}
