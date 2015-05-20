
import ko = require("knockout");

export function GetObservable<T>(value:T|KnockoutObservable<T>) {
    return<KnockoutObservable<T>>(typeof (value) === "function" ? value : ko.observable(value));
   
}
export function GetObservableArray<T>(value:Array<T>|KnockoutObservableArray<T>) {
    return <KnockoutObservableArray<T>>(typeof (value) === "function" ? value : ko.observableArray(<Array<T>>value));

}  