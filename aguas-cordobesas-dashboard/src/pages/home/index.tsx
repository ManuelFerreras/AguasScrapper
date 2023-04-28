import Link from 'next/link';

export default function FirstPost() {
    return (
        <main>
            <h1>Users</h1>

            <div className="users-table">

                <div className="user">
                    <div className="user-name">Manuel Ferreras</div>
                    <div className="user-debt">$ 0</div>
                </div>

            </div>

            <h2>
                <Link href='/'>Go Back</Link>
            </h2>
        </main>
    );
}