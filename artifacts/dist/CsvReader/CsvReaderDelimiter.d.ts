import CsvReaderDelimiterType = require("./CsvReaderDelimiterType");
declare class CsvReaderDelimiter {
    type: KnockoutObservable<CsvReaderDelimiterType>;
    value: KnockoutObservable<string>;
    seperator: KnockoutObservable<string>;
    combineConsecutiveDelimiters: KnockoutObservable<boolean>;
    constructor(options?: {
        type: KnockoutObservable<CsvReaderDelimiterType> | CsvReaderDelimiterType;
        value?: KnockoutObservable<string> | string;
    });
}
export = CsvReaderDelimiter;
