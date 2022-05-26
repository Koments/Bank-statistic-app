export type Options={
    scales: {
        xAxes: {
            gridLines: {
                display: boolean;
            };
        }[];
        yAxes: {
            gridLines: {
                display: boolean;
            };
        }[];
    }
}

export interface OptionsProp {
  options: Options[];
}
