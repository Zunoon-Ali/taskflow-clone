import React, { useState } from 'react';

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
            className="min-h-35 w-full overflow-x-hidden bg-gray-100 md:py-12 py-3"
            data-aos="fade-up"
            data-aos-delay="200"
            data-aos-duration="800"
        >
            <footer className="footer flex flex-col items-center gap-4 md:px-12">
                {/* Link Group */}
                <div
                    className="links flex flex-wrap items-center justify-center gap-8 mt-2 md:w-full w-auto px-12"
                    data-aos="zoom-in-up"
                    data-aos-delay="200"
                    data-aos-duration="1000"
                >
                    {footer.map((item, index) => (
                        <a
                            href={item.link}
                            className="text-blue-600 md:text-xl text-md font-medium hover:underline transition-all duration-200"
                            key={index}
                        >
                            {item.text}
                        </a>
                    ))}
                </div>

                {/* Footer Text */}
                <p
                    className="text-gray-600 text-center text-sm md:text-xl mt-2 font-medium"

                >
                    &copy; 2023 Task Flow | Made with ♡ in Canada
                </p>
            </footer>
        </section>
    );
}

export default Footer;
