declare class CsvReaderColumn {
    label: string | KnockoutObservable<string>;
    column: KnockoutObservable<number>;
    constructor(label: string | KnockoutObservable<string>, column: number | KnockoutObservable<number>);
}
export = CsvReaderColumn;
