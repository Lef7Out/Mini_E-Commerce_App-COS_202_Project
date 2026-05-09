export function Footer() {
  return (
    <footer className="bg-gray-50 border-t border-gray-200 mt-20">
      <div className="mx-auto max-w-screen-2xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="footer-columns">
           <div className="space-y-4">
                <div className="flex items-center gap-2">
                    <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-red-600">
      
                    </div>
                    <span className="text-xl font-bold text-gray-900 tracking-tight">
                    T3ch<span className="text-red-500">World</span>
                    </span>
                </div>
                <p className="text-sm text-gray-500 leading-relaxed">
                    Your premium destination for the latest tech devices. Curated selection, expert advice, and fast delivery.
                </p>
                <div className="social-links"></div>
            </div>
        </div>
      </div>
    </footer>
  );
}