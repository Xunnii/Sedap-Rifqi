export default function PageHeader({ title, breadcrumb = [] }) {
    return (
        <div className="mb-6">
            {/* penambahan FOnt */}
            <h1 className="text-2xl font-extrabold text-gray-900 select-none font-nunito ">{title}</h1>
            {breadcrumb.length > 0 && (
                <nav className="mt-2 text-sm text-gray-500" aria-label="Breadcrumb">
                    <ol className="list-none p-0 inline-flex space-x-1">
                        {breadcrumb.map((item, index) => (
                            <li key={index} className="flex items-center">
                                {index !== 0 && <span className="mx-1">/</span>}
                                {item.href ? (
                                    <a href={item.href} className="hover:text-blue-600 transition-colors">
                                        {item.label}
                                    </a>
                                ) : (
                                    <span className="text-gray-400">{item.label}</span>
                                )}
                            </li>
                        ))}
                    </ol>
                </nav>
            )}
        </div>
    );
}
