import Link from 'next/link'

export default function Header() {
    return (
        <header>
            <nav>
                <Link href="/">
                    Home
                </Link>
                <Link href="/about">
                    Sobre
                </Link>
            </nav>
        </header>
    )
}