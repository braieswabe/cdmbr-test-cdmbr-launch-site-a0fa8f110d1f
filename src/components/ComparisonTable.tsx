type ComparisonTableProps = {
  headers: string[];
  rows: { label: string; values: string[] }[];
};

export function ComparisonTable({ headers, rows }: ComparisonTableProps) {
  return (
    <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
      <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
        <table className="w-full border-collapse text-left">
          <thead className="bg-slate-50">
            <tr>
              {headers.map((header) => (
                <th key={header} className="px-6 py-4 text-sm font-semibold text-slate-950">
                  {header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((row) => (
              <tr key={row.label} className="border-t border-slate-200">
                <td className="px-6 py-4 text-sm font-medium text-slate-950">{row.label}</td>
                {row.values.map((value, index) => (
                  <td key={`${row.label}-${index}`} className="px-6 py-4 text-sm text-slate-600">
                    {value}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}

export default ComparisonTable;
