"use client";

import GlassPanel from "@/components/GlassPanel";
import SectionWrapper from "@/components/SectionWrapper";

export default function ApplyMedia() {
    const handleSubmit = (e) => {
        e.preventDefault();
        // Form submission logic will be handled later
        alert("Application submitted! (This is a placeholder)");
    };

    return (
        <SectionWrapper>
            <GlassPanel>
                <h1 className="page-title">Media Team Application</h1>
                <p className="page-sub mb-8">Join our media team to create content for the community.</p>

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
                        <label htmlFor="portfolioLink" className="block text-sm font-medium text-gray-300">Link to YouTube, Twitch, or Portfolio</label>
                        <input
                            type="url"
                            id="portfolioLink"
                            name="portfolioLink"
                            required
                            placeholder="https://www.youtube.com/yourchannel"
                            className="mt-1 block w-full bg-gray-700 border border-gray-600 rounded-md shadow-sm py-2 px-3 text-white focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                        />
                    </div>

                    <div>
                        <label htmlFor="contentType" className="block text-sm font-medium text-gray-300">What kind of content do you create?</label>
                        <textarea
                            id="contentType"
                            name="contentType"
                            required
                            rows="4"
                            placeholder="e.g., Let's Plays, tutorials, cinematic roleplay, live streams, etc."
                            className="mt-1 block w-full bg-gray-700 border border-gray-600 rounded-md shadow-sm py-2 px-3 text-white focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                        ></textarea>
                    </div>

                    <div>
                        <label htmlFor="whyJoin" className="block text-sm font-medium text-gray-300">Why do you want to create content for our community?</label>
                        <textarea
                            id="whyJoin"
                            name="whyJoin"
                            required
                            rows="4"
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
                            I have read and agree to all server rules and media guidelines.
                        </label>
                    </div>

                    <div className="flex justify-end">
                        <button
                            type="submit"
                            className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-lg transition-colors"
                        >
                            Submit Media Application
                        </button>
                    </div>
                </form>
            </GlassPanel>
        </SectionWrapper>
    );
}
