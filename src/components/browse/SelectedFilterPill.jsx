export const SelectedFilterPill = ( {filter} ) => {

// Hyper UI
    return(
        <span className="inline-flex items-center justify-center rounded-full bg-purple-100 px-2.5 py-0.5 text-purple-700">
            <p className="text-sm whitespace-nowrap">{filter}</p>

            <button className="ms-1.5 -me-1 inline-block rounded-full bg-purple-200 p-0.5 text-purple-700 transition hover:bg-purple-300">
                <span className="sr-only">Remove badge</span>

                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-3">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12"></path>
                </svg>
            </button>
        </span>
    );

}