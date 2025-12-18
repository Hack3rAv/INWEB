import Link from "next/link";

export default function Appeals() {
    // Placeholder data - will be replaced with database data
    const appeals = [
        { id: "APL-001", player: "BannedUser1", type: "Ban Appeal", status: "Pending", date: "2024-07-30" },
        { id: "APL-002", player: "MutedPlayer2", type: "Mute Appeal", status: "Approved", date: "2024-07-29" },
        { id: "APL-003", player: "TroubleMaker3", type: "Ban Appeal", status: "Denied", date: "2024-07-28" },
        { id: "APL-004", player: "RuleBreaker4", type: "Warning Appeal", status: "Pending", date: "2024-07-30" },
    ];

    const getStatusClass = (status) => {
        switch (status) {
            case "Pending":
                return "bg-yellow-500 text-white";
            case "Approved":
                return "bg-green-500 text-white";
            case "Denied":
                return "bg-red-500 text-white";
            default:
                return "bg-gray-500 text-white";
        }
    };

    return (
        <section style={{ padding: "80px" }}>
            <h1 className="page-title">Appeals Panel</h1>
            <p className="page-sub">Player & admin reports will be handled here.</p>

            <div className="mt-8 bg-gray-800 bg-opacity-50 rounded-lg shadow-lg p-6">
                <table className="min-w-full text-left">
                    <thead className="border-b border-gray-600">
                        <tr>
                            <th className="py-3 px-4">Appeal ID</th>
                            <th className="py-3 px-4">Player</th>
                            <th className="py-3 px-4">Appeal Type</th>
                            <th className="py-3 px-4">Status</th>
                            <th className="py-3 px-4">Date Submitted</th>
                            <th className="py-3 px-4">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {appeals.map((appeal) => (
                            <tr key={appeal.id} className="border-b border-gray-700 hover:bg-gray-700 transition-colors">
                                <td className="py-3 px-4">{appeal.id}</td>
                                <td className="py-3 px-4">{appeal.player}</td>
                                <td className="py-3 px-4">{appeal.type}</td>
                                <td className="py-3 px-4">
                                    <span className={`px-2 py-1 rounded-full text-xs ${getStatusClass(appeal.status)}`}>
                                        {appeal.status}
                                    </span>
                                </td>
                                <td className="py-3 px-4">{appeal.date}</td>
                                <td className="py-3 px-4">
                                    <Link href={`/admin/appeals/${appeal.id}`} className="text-blue-400 hover:underline">
                                        Review
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
