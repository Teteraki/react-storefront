export const DashBoardCard = ({ title, children }) => (
  <section className="rounded-lg border bg-white p-4 shadow-sm">
    <h2 className="mb-4 text-sm font-semibold text-gray-700 uppercase">
      {title}
    </h2>
    {children}
  </section>
);
