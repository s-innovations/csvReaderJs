

import ko = require("knockout");
import KnockoutUtil = require("./KnockoutUtils");
import CsvReaderOptions = require("./CsvReaderOptions");
import CsvReaderColumn = require("./CsvReaderColumn");




class CsvReader {

    importAtRow: KnockoutObservable<number>;
    columns: KnockoutObservableArray<CsvReaderColumn>;

    constructor(private options: CsvReaderOptions) {
        this.importAtRow = KnockoutUtil.GetObservable<number>(options.importAtRow);
        this.columns = KnockoutUtil.GetObservableArray<CsvReaderColumn>(options.columns);
    }

    columnHeaders = ko.computed(() => {
        var columns = this.columns();

        var headers = [];
        ko.ignoreDependencies(() => {

            var sortedColumns = this.columns().sort((a, b) => a.column() > b.column() ? 1 : -1);

            for (var i = 0; i < sortedColumns.length; ++i) {
                if (i < sortedColumns[i].column()) {
                    headers.push("");
                    continue;
                }
                var j = i;
                while (sortedColumns[i].column() === sortedColumns[j+1].column()) {
                    j++;
                }
                headers.push(ko.unwrap(sortedColumns[j].label));

            }
        });

        return headers;

    });


}
export = CsvReader;
