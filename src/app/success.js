import Link from 'next/link';

export default function SuccessPage() {
    const handleLogout = () => {
        // Implement your log-out functionality here
        console.log('Logged out');
        window.location.href = '/';
    };

    return (
        <div className="flex min-h-screen flex-col justify-center items-center">
            <h1 className="text-2xl font-bold mb-4">Registration Successful!</h1>
            <button onClick={handleLogout} className="bg-red-500 text-white px-4 py-2 rounded">
                Log Out
            </button>
            <Link href="/" className="mt-4 text-blue-500">Go back to Home</Link>
        </div>
    );
}
