export const SelectedFilterPill = ( {filter} ) => {

// Hyper UI
    return(
        <span className="inline-flex items-center justify-center rounded-full bg-teal-200 px-2.5 py-0.5 text-teal-900">
            <p className="text-sm whitespace-nowrap">{filter}</p>

            <button className="ms-1.5 -me-1 inline-block rounded-full bg-teal-300 p-0.5 text-teal-700 transition hover:bg-teal-400">
                <span className="sr-only">Remove badge</span>

                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#000000ff" className="size-3">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12"></path>
                </svg>
            </button>
        </span>
    );

}