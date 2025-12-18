"use client";

import FormCard from "@/components/FormCard";
import SectionWrapper from "@/components/SectionWrapper";

export default function Apply() {
    const applications = [
        {
            title: "Apply for Support",
            description: "Join the support team to help players with their issues.",
            href: "/apply/support",
        },
        {
            title: "Apply for Admin",
            description: "Apply for an administrative position to help manage the server.",
            href: "/apply/admin",
        },
        {
            title: "Apply for Gang Leader",
            description: "Submit an application to become a leader of a gang.",
            href: "/apply/gang-leader",
        },
        {
            title: "Apply for Media",
            description: "Join the media team to create content for the community.",
            href: "/apply/media",
        },
    ];

    return (
        <SectionWrapper>
            <h1 className="page-title">Apply for Positions</h1>
            <p className="page-sub">Select a category below to open an application.</p>

            <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {applications.map((app) => (
                    <FormCard
                        key={app.title}
                        title={app.title}
                        description={app.description}
                        href={app.href}
                    />
                ))}
            </div>
        </SectionWrapper>
    );
}

