import type { Metadata } from 'next';
import { Inter, Montserrat } from 'next/font/google';
import Image from 'next/image';
import Link from 'next/link';
import './globals.css';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const montserrat = Montserrat({
    subsets: ['latin'],
    variable: '--font-montserrat',
});

export const metadata: Metadata = {
    title: 'My Diary',
    description: 'Generated by create next app',
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body
                className={`${montserrat.variable} ${inter.variable} flex flex-col items-center mt-10 bg-neutral-900`}
            >
                <Link href="/">
                    <Image
                        src="/logo.png"
                        width={200}
                        height={200}
                        alt="My Diary Logo"
                    />
                </Link>
                {children}
            </body>
        </html>
    );
}
