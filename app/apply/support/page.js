"use client";

import GlassPanel from "@/components/GlassPanel";
import SectionWrapper from "@/components/SectionWrapper";

export default function ApplySupport() {
    const handleSubmit = (e) => {
        e.preventDefault();
        // Form submission logic will be handled later
        alert("Application submitted! (This is a placeholder)");
    };

    return (
        <SectionWrapper>
            <GlassPanel>
                <h1 className="page-title">Support Team Application</h1>
                <p className="page-sub mb-8">Fill out the form below to apply for the support team.</p>

                <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                        <label htmlFor="ingameName" className="block text-sm font-medium text-gray-300">In-Game Name</label>
                        <input
                            type="text"
                            id="ingameName"
                            name="ingameName"
                            required
                            className="mt-1 block w-full bg-gray-700 border border-gray-600 rounded-md shadow-sm py-2 px-3 text-white focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                        />
                    </div>

                    <div>
                        <label htmlFor="discordId" className="block text-sm font-medium text-gray-300">Discord ID (e.g., username#0000)</label>
                        <input
                            type="text"
                            id="discordId"
                            name="discordId"
                            required
                            className="mt-1 block w-full bg-gray-700 border border-gray-600 rounded-md shadow-sm py-2 px-3 text-white focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                        />
                    </div>

                    <div>
                        <label htmlFor="age" className="block text-sm font-medium text-gray-300">Age</label>
                        <input
                            type="number"
                            id="age"
                            name="age"
                            required
                            min="16"
                            className="mt-1 block w-full bg-gray-700 border border-gray-600 rounded-md shadow-sm py-2 px-3 text-white focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                        />
                    </div>

                    <div>
                        <label htmlFor="whyJoin" className="block text-sm font-medium text-gray-300">Why do you want to join the support team?</label>
                        <textarea
                            id="whyJoin"
                            name="whyJoin"
                            required
                            rows="4"
                            className="mt-1 block w-full bg-gray-700 border border-gray-600 rounded-md shadow-sm py-2 px-3 text-white focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                        ></textarea>
                    </div>

                    <div>
                        <label htmlFor="experience" className="block text-sm font-medium text-gray-300">Describe your previous experience in a support or staff role.</label>
                        <textarea
                            id="experience"
                            name="experience"
                            rows="4"
                            className="mt-1 block w-full bg-gray-700 border border-gray-600 rounded-md shadow-sm py-2 px-3 text-white focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                        ></textarea>
                    </div>

                    <div className="flex justify-end">
                        <button
                            type="submit"
                            className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-lg transition-colors"
                        >
                            Submit Application
                        </button>
                    </div>
                </form>
            </GlassPanel>
        </SectionWrapper>
    );
}
