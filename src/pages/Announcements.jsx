function Announcements() {
    return (
        <div>
            <h2 className="text-2xl mb-4 text-orange-500">Announcements</h2>
            <p className="mb-4">In the live site, staff can upload weekly newsletters and add updates here.</p>
            <div className="mb-4">
                <h3 className="text-lg font-bold">Weekly Newsletter</h3>
                <a href="/img/newsletter.pdf" download className="inline-block bg-orange-500 text-white py-2 px-4 rounded hover:bg-orange-600">Download Newsletter (PDF)</a>
            </div>
            <ul className="list-disc pl-5">
                <li>Parent-Teacher Meeting: June 5, 2025</li>
                <li>New Playground Open!</li>
                <li>Art Day: June 20, 2025</li>
            </ul>
        </div>
    );
}

export default Announcements;