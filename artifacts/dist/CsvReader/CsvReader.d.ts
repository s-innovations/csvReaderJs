import CsvReaderOptions = require("./CsvReaderOptions");
import CsvReaderColumn = require("./CsvReaderColumn");
declare class CsvReader {
    private options;
    constructor(options: CsvReaderOptions);
    importAtRow: KnockoutObservable<number>;
    columns: KnockoutObservableArray<CsvReaderColumn>;
    columnHeaders: KnockoutComputed<any[]>;
}
export = CsvReader;
