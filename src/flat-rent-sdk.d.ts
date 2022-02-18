
declare module 'flat-rent-sdk' {

    export function cloneDate(date: Date): Date
    export function addDays(date: Date, day: number): Date
    export class FlatRentSdk {
        get(id: number): number
        search(parameter: {
            city: string;
            checkInDate: Date;
            checkOutDate: Date;
            priceLimit?: number;
        }): Object[]
        book(flatId: number,
            chekInDate: Date,
            checkOutDate: Date): number
        _assertDatesAreCorrect(checkInDate: Date,
            checkOutDate: Date): void
        _resetTime(date: Date): void
        _calculateDifferenceInDays(startDate: Date,
            endDate: Date): number
        _generateDateRange(from: Date,
            to: Date): Date[]
        _areAllDatesAvailable(flat: number,
            dateRange: Date): boolean
        _formatFlatObject(flat: number,
            nightNumber: number): number
        _writeDatabase(database: Date): void
        _syncDatabase(database: Date): void
    }
}