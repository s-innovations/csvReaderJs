import CsvReaderOptions = require("./CsvReaderOptions");
import CsvReaderColumn = require("./CsvReaderColumn");
declare class CsvReader {
    private options;
    importAtRow: KnockoutObservable<number>;
    columns: KnockoutObservableArray<CsvReaderColumn>;
    constructor(options: CsvReaderOptions);
    columnHeaders: KnockoutComputed<any[]>;
}
export = CsvReader;
