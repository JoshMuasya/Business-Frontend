import Footer from "./footer";
import Header from "./header";

export default function HomeLayout ({ children }) {
    return (
        <html lang="en">
            <body className="">
                <Header />
                    { children }                                
                <Footer />
            </body>
        </html>
    )
}