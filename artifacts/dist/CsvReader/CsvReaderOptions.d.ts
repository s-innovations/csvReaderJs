import CsvReaderDelimiter = require("./CsvReaderDelimiter");
import CsvReaderColumn = require("./CsvReaderColumn");
interface CsvReaderOptions {
    delimiter: CsvReaderDelimiter;
    importAtRow: number | KnockoutObservable<number>;
    columns: Array<CsvReaderColumn> | KnockoutObservableArray<CsvReaderColumn>;
}
export = CsvReaderOptions;
