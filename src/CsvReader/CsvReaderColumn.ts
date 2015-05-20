

import ko = require("knockout");
import KnockoutUtil = require("./KnockoutUtils");


class CsvReaderColumn {
    column: KnockoutObservable<number>;
    constructor(public label: string|KnockoutObservable<string>,column: number|KnockoutObservable<number>) {
        
        this.column = KnockoutUtil.GetObservable(column);

    }
} 
export = CsvReaderColumn;