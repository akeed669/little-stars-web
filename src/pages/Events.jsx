function Events() {
    return (
        <div>
            <h2 className="text-2xl mb-4 text-orange-500">Events</h2>
            <p className="mb-4">In the live site, this table will update dynamically from a database.</p>
            <table className="w-full border-collapse mb-4">
                <thead>
                    <tr className="bg-orange-100">
                        <th className="border p-2">Event</th>
                        <th className="border p-2">Date</th>
                        <th className="border p-2">Time</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className="border p-2">Open Day</td>
                        <td className="border p-2">June 10, 2025</td>
                        <td className="border p-2">9:00 AM</td>
                    </tr>
                    <tr>
                        <td className="border p-2">Sports Day</td>
                        <td className="border p-2">July 15, 2025</td>
                        <td className="border p-2">10:00 AM</td>
                    </tr>
                    <tr>
                        <td className="border p-2">Parent Workshop</td>
                        <td className="border p-2">August 20, 2025</td>
                        <td className="border p-2">6:00 PM</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}

export default Events;