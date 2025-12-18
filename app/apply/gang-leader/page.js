"use client";

import GlassPanel from "@/components/GlassPanel";
import SectionWrapper from "@/components/SectionWrapper";

export default function ApplyGangLeader() {
    const handleSubmit = (e) => {
        e.preventDefault();
        // Form submission logic will be handled later
        alert("Application submitted! (This is a placeholder)");
    };

    return (
        <SectionWrapper>
            <GlassPanel>
                <h1 className="page-title">Gang Leader Application</h1>
                <p className="page-sub mb-8">Apply to lead an official gang on the server.</p>

                <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                        <label htmlFor="ingameName" className="block text-sm font-medium text-gray-300">Your In-Game Name</label>
                        <input
                            type="text"
                            id="ingameName"
                            name="ingameName"
                            required
                            className="mt-1 block w-full bg-gray-700 border border-gray-600 rounded-md shadow-sm py-2 px-3 text-white focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                        />
                    </div>

                    <div>
                        <label htmlFor="gangName" className="block text-sm font-medium text-gray-300">Proposed Gang Name</label>
                        <input
                            type="text"
                            id="gangName"
                            name="gangName"
                            required
                            className="mt-1 block w-full bg-gray-700 border border-gray-600 rounded-md shadow-sm py-2 px-3 text-white focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                        />
                    </div>

                    <div>
                        <label htmlFor="gangConcept" className="block text-sm font-medium text-gray-300">Gang Concept & Backstory</label>
                        <textarea
                            id="gangConcept"
                            name="gangConcept"
                            required
                            rows="6"
                            placeholder="Describe your gang's theme, goals, and history."
                            className="mt-1 block w-full bg-gray-700 border border-gray-600 rounded-md shadow-sm py-2 px-3 text-white focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                        ></textarea>
                    </div>
                    
                    <div>
                        <label htmlFor="gangActivities" className="block text-sm font-medium text-gray-300">Planned Gang Activities</label>
                        <textarea
                            id="gangActivities"
                            name="gangActivities"
                            required
                            rows="4"
                            placeholder="What kind of roleplay and activities will your gang focus on? (e.g., businesses, events, territory)"
                            className="mt-1 block w-full bg-gray-700 border border-gray-600 rounded-md shadow-sm py-2 px-3 text-white focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                        ></textarea>
                    </div>

                    <div className="flex items-center">
                        <input
                            id="rules"
                            name="rules"
                            type="checkbox"
                            required
                            className="h-4 w-4 text-blue-600 bg-gray-700 border-gray-600 rounded focus:ring-blue-500"
                        />
                        <label htmlFor="rules" className="ml-2 block text-sm text-gray-300">
                            I have read and agree to all server rules regarding official gangs.
                        </label>
                    </div>

                    <div className="flex justify-end">
                        <button
                            type="submit"
                            className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-lg transition-colors"
                        >
                            Submit Gang Application
                        </button>
                    </div>
                </form>
            </GlassPanel>
        </SectionWrapper>
    );
}
