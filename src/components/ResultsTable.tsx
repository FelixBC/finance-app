import type { ReactNode } from "react";
import type { userInputProps } from "../types/types";
import "../util/investment";
import { calculateInvestmentResults, formatter } from "../util/investment";
import Header from "./Header";

type ResultsTableProps = {
  input: userInputProps;
};

const ResultsTable: React.FC<ResultsTableProps> = ({ input }) => {
  const results = calculateInvestmentResults(input);
  const tableDataOfResults: Iterable<ReactNode> = results.map(
    (currentResult) => (
      <tr>
        <td>{currentResult.year}</td>
        <td>{formatter.format(currentResult.interest)}</td>
        <td>{formatter.format(currentResult.valueEndOfYear)}</td>
        <td>{formatter.format(currentResult.annualInvestment)}</td>
      </tr>
    ),
  );

  return (
    <section className="card">
      <Header className="card__results-header"> Results Table</Header>
      <table>
        <thead className="table__header">
          <tr>
            <th>Year</th>

            <th>Interest</th>

            <th>Value End Of The Year</th>

            <th>Annual Investment</th>
          </tr>
        </thead>
        {tableDataOfResults}
      </table>
    </section>
  );
};

export default ResultsTable;
