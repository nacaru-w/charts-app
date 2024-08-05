export type Vote = 'Democrat' | 'Republican' | 'Independent' | 'Other';

export interface XYPoints {
    letter: 'x' | 'y',
    color: 'teal' | 'blue' | 'purple',
    points: number
}

export interface CountryPoints {
    country: 'Spain' | 'France' | 'Germany',
    points: number
}