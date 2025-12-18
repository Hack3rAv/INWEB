import Image from "next/image";
import Link from "next/link";

export default function Footer() {
    return (
        <footer className="footer">

            {/* TOP MAIN FOOTER */}
            <div className="footer-inner">

                {/* LEFT SIDE - SMALL LOGO */}
                <div className="footer-section footer-brand">
                    <Image 
                        src="/logos/slogo.png"
                        alt="IN Logo"
                        width={42}
                        height={42}
                        className="footer-logo"
                    />
                    

                    <p>Your story begins here.</p>
                </div>

                {/* CENTER - QUICK LINKS */}
                <div className="footer-section footer-links">
                    <h3>Quick Links</h3>
                    <Link href="/features">Features</Link>
                    <Link href="/wiki">Wiki</Link>
                    <Link href="/rules">Rules</Link>
                    <Link href="/community">Community</Link>
                    <Link href="/apply">Apply</Link>
                </div>

                {/* RIGHT SIDE - SUPPORT / SOCIALS */}
                <div className="footer-section footer-socials">
                    <h3>Connect</h3>
                    <a href="https://discord.gg/SAKKJys5jN" target="_blank">Discord</a>
                </div>

            </div>

            {/* BOTTOM COPYRIGHT BAR */}
            <div className="footer-bottom">
                © IN Roleplay 2025 · Designed & Deployed by 
                <a href="https://neopix.in" target="_blank" className="neopix-link"> Neopix</a>
            </div>

        </footer>
    );
}
