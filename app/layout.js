import "./globals.css";
import "../styles/theme.css";
import "../styles/navbar.css";
import "../styles/footer.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export const metadata = {
    title: "IN Roleplay",
    description: "Official IN Roleplay Website",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body>
                <Navbar />
                <main className="main-content">{children}</main>
                <Footer />
            </body>
        </html>
    );
}
