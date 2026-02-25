import type { ReactNode } from "react";
import type { userInputProps } from "../types/types";
import "../util/investment";
import { calculateInvestmentResults } from "../util/investment";

type ResultsTableProps = {
  input: userInputProps;
};

const ResultsTable: React.FC<ResultsTableProps> = ({ input }) => {
  const results = calculateInvestmentResults(input);
  const tableOfResults:Iterable<ReactNode> = results.map((currentResult) => {
    <table>
      <th>
        <p>Year</p>
      </th>
      <th>
        <p>Interest</p>
      </th>
      <th>
        <p>Value of the Year</p>
      </th>
      <th>
        <p>Annual Investment</p>
      </th>
      <tr>
        <p>{currentResult.year}</p>
      </tr>

      <tr>
        <p>{currentResult.interest}</p>
      </tr>
      <tr>
        <p>{currentResult.valueEndOfYear}</p>
      </tr>
      <tr>
        <p>{currentResult.annualInvestment}</p>
      </tr>
    </table>;
  });

  return <div></div>;
};

export default ResultsTable;
