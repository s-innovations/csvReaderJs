
import ko = require("knockout");
import KnockoutUtil = require("./KnockoutUtils");
import CsvReaderDelimiterType = require("./CsvReaderDelimiterType");

class CsvReaderDelimiter {

    type: KnockoutObservable<CsvReaderDelimiterType>;
    value: KnockoutObservable<string>;
    seperator: KnockoutObservable<string>;
    combineConsecutiveDelimiters: KnockoutObservable<boolean>;

    constructor(options:
        {
            type: KnockoutObservable<CsvReaderDelimiterType>|CsvReaderDelimiterType;
            value?: KnockoutObservable<string>|string
        } = { type: CsvReaderDelimiterType.Tab }) {
        
        this.type = KnockoutUtil.GetObservable<CsvReaderDelimiterType>(options.type);
        this.value = ko.computed(() => {
            switch (this.type()) {
                case CsvReaderDelimiterType.Comma:
                    return ',';
                case CsvReaderDelimiterType.Semicolon:
                    return ':';
                case CsvReaderDelimiterType.Space:
                    return ' ';
                case CsvReaderDelimiterType.Tab:
                    return '\t';
                case CsvReaderDelimiterType.Other:
                    return this.seperator();

            }
        });




    }
}

export = CsvReaderDelimiter;