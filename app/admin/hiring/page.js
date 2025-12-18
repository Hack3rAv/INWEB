import Link from "next/link";

export default function Hiring() {
    // Placeholder data
    const applications = [
        { id: "APP-001", applicant: "John Doe", position: "Moderator", status: "Pending Review", date: "2024-07-30" },
        { id: "APP-002", applicant: "Jane Smith", position: "Gang Leader", status: "Interviewing", date: "2024-07-29" },
        { id: "APP-003", applicant: "Peter Jones", position: "Admin", status: "Rejected", date: "2024-07-28" },
        { id: "APP-004", applicant: "Mary Williams", position: "Moderator", status: "Hired", date: "2024-07-27" },
    ];

    const getStatusClass = (status) => {
        switch (status) {
            case "Pending Review":
                return "bg-yellow-500 text-white";
            case "Interviewing":
                return "bg-blue-500 text-white";
            case "Hired":
                return "bg-green-500 text-white";
            case "Rejected":
                return "bg-red-500 text-white";
            default:
                return "bg-gray-500 text-white";
        }
    };

    return (
        <section style={{ padding: "80px" }}>
            <h1 className="page-title">Hiring Applications</h1>
            <p className="page-sub">Review and manage applications for all open positions.</p>

            <div className="mt-8 bg-gray-800 bg-opacity-50 rounded-lg shadow-lg p-6">
                <table className="min-w-full text-left">
                    <thead className="border-b border-gray-600">
                        <tr>
                            <th className="py-3 px-4">Applicant</th>
                            <th className="py-3 px-4">Position</th>
                            <th className="py-3 px-4">Status</th>
                            <th className="py-3 px-4">Application Date</th>
                            <th className="py-3 px-4">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {applications.map((app) => (
                            <tr key={app.id} className="border-b border-gray-700 hover:bg-gray-700 transition-colors">
                                <td className="py-3 px-4">{app.applicant}</td>
                                <td className="py-3 px-4">{app.position}</td>
                                <td className="py-3 px-4">
                                    <span className={`px-2 py-1 rounded-full text-xs ${getStatusClass(app.status)}`}>
                                        {app.status}
                                    </span>
                                </td>
                                <td className="py-3 px-4">{app.date}</td>
                                <td className="py-3 px-4">
                                    <Link href={`/admin/hiring/${app.id}`} className="text-blue-400 hover:underline">
                                        View Application
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
