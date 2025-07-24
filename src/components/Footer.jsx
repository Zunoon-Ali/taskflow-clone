import React, { useState } from 'react'

function Footer() {
    const [footer, setFooter] = useState([
        { text: "Privacy Policy", link: "#" },
        { text: "Terms of Use", link: "#" },
        { text: "Support", link: "#" },
        { text: "FAQ's", link: "#" },
        { text: "What's New", link: "#" }
    ]);

    return (
        <section
            id="footer"
            className="mt-3 md:mt-12 min-h-20 w-full overflow-x-hidden bg-gray-100 md:py-12 py-3"
        >
            <footer className="footer flex flex-col items-center gap-6">
                {/* Link Group */}
                <div className="links flex flex-wrap justify-center gap-4">
                    {footer.map((item, index) => (
                        <a
                            href={item.link}
                            className="text-blue-600 underline md:text-lg text-sm"
                            key={index}
                        >
                            {item.text}
                        </a>
                    ))}
                </div>

                {/* Footer Text */}
                <p className="text-gray-600 text-center text-sm">
                    &copy; 2023 Task Flow | Made with ♡ in Canada
                </p>
            </footer>
        </section>
    );
}

export default Footer;
