class CourtItem {

  constructor (private readonly courtNo: string
               , private readonly from: string
               , private readonly to: string) {
  }

  getCourtNo(): string {
    return this.courtNo;
  }

  getFrom(): string {
    return this.from;
  }

  getTo(): string {
    return this.to;
  }
}
export default CourtItem
