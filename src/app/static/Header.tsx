"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-regular-svg-icons/faUser";
import { usePathname } from "next/navigation";
import Image from "next/image";

export default function Header() {
    const pathname = usePathname();

    const isActive = (path: string) => pathname === path;

    const activeBarRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const updateActiveBar = () => {
            const activeLink = document.querySelector(".active-link");
            if (activeLink && activeBarRef.current) {
                const { left, width } = activeLink.getBoundingClientRect();
                activeBarRef.current.style.left = `${left}px`;
                activeBarRef.current.style.width = `${width}px`;
            }
        };

        updateActiveBar();
        window.addEventListener("resize", updateActiveBar);

        return () => window.removeEventListener("resize", updateActiveBar);
    }, [pathname]);

    return (
        <>
            <header>
                <div ref={activeBarRef} className="active-bar" />
                <div className="container">
                    <div className="menu">
                        <div>
                            <Link href="/" className="menu-link">
                                <Image
                                    width={30}
                                    height={30}
                                    src="/logo.png"
                                    alt="Logo"
                                />
                            </Link>
                            <Link
                                href="/analyse"
                                className={
                                    isActive("/analyse")
                                        ? "active-link"
                                        : "menu-link"
                                }
                            >
                                Diagnostic
                            </Link>
                            <Link
                                href="/about"
                                className={
                                    isActive("/about")
                                        ? "active-link"
                                        : "menu-link"
                                }
                            >
                                A propos
                            </Link>
                        </div>
                        <div>
                            <Link className="iconLogin" href="/">
                                <FontAwesomeIcon color="#000" icon={faUser} />
                            </Link>
                        </div>
                    </div>
                </div>
            </header>
        </>
    );
}
