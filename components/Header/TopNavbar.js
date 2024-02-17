import LanguageSelector from "./LanguageSelector";
const TopNavbar = () => {
  return (
    <div className="tagline bg-white dark:bg-slate-900 border-b border-gray-100 dark:border-gray-800 w-4/5 mt-4">
      <div className="container">
        <div className="grid grid-cols-1">
          <div className="flex items-center justify-between">
            <ul className="list-none mb-0">
              <li className="inline mb-0">
                <a
                  href="mailto:contact@example.com"
                  className="text-slate-400 hover:text-indigo-600 inline-flex items-center"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    className="feather feather-mail h-4 w-4 me-1 text-indigo-600"
                  >
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                    <polyline points="22,6 12,13 2,6"></polyline>
                  </svg>{" "}
                  contact@example.com
                </a>
              </li>
              <li className="inline mb-0 ms-3">
                <a
                  href="tel:+152534-468-854"
                  className="text-slate-400 hover:text-indigo-600 inline-flex items-center"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    className="feather feather-phone h-4 w-4 me-1 text-indigo-600"
                  >
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                  </svg>{" "}
                  +78789768658675
                </a>
              </li>
            </ul>

            <LanguageSelector />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopNavbar;
