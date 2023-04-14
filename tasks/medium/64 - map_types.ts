/*
  5821 - MapTypes ------- by Krzysztof "Wokay" Łokaj (@wokayme) #medium #map #object #utils
  ### Question
  Implement `MapTypes<T, R>` which will transform types in object T to different types defined by type R which has the following structure

  type StringToNumber = {
    mapFrom: string; // value of key which value is string
    mapTo: number; // will be transformed for number
  }

  ## Examples:


  type StringToNumber = { mapFrom: string; mapTo: number;}
  MapTypes<{iWillBeANumberOneDay: string}, StringToNumber> // gives { iWillBeANumberOneDay: number; }


  Be aware that user can provide a union of types:

  type StringToNumber = { mapFrom: string; mapTo: number;}
  type StringToDate = { mapFrom: string; mapTo: Date;}
  MapTypes<{iWillBeNumberOrDate: string}, StringToDate | StringToNumber> // gives { iWillBeNumberOrDate: number | Date; }

  If the type doesn't exist in our map, leave it as it was:

  type StringToNumber = { mapFrom: string; mapTo: number;}
  MapTypes<{iWillBeANumberOneDay: string, iWillStayTheSame: Function}, StringToNumber> // // gives { iWillBeANumberOneDay: number, iWillStayTheSame: Function }

  > View on GitHub: https://tsch.js.org/5821
*/
// Solution
type MapTypes<
  T extends Record<string, any>,
  R extends { mapFrom: any; mapTo: any },
> = {
  [i in keyof T]: T[i] extends R["mapFrom"]
    ? R extends { mapFrom: T[i] }
      ? R["mapTo"]
      : never
    : T[i];
};
