export const PageBackButton = ({handlePrev}) => {
    return(
        <button
              type="button"
              onClick={handlePrev}
              className="rounded-full bg-teal-600 text-white px-3  text-lg  hover:bg-teal-700"
            >
              ‹
        </button>
    );
}