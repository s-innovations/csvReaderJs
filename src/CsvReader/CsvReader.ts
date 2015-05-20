

import ko = require("knockout");
import KnockoutUtil = require("./KnockoutUtils");
import CsvReaderOptions = require("./CsvReaderOptions");
import CsvReaderColumn = require("./CsvReaderColumn");




class CsvReader {

    constructor(private options: CsvReaderOptions) {
    }


    importAtRow: KnockoutObservable<number> = KnockoutUtil.GetObservable<number>(this.options.importAtRow);
    columns: KnockoutObservableArray<CsvReaderColumn> = KnockoutUtil.GetObservableArray<CsvReaderColumn>(this.options.columns);
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
