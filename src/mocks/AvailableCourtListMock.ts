import { CourtItem }       from '../models/CourtItem'
import { CourtListItem }   from '../models/CourtListItem'
import { CourtListByDate } from '../models/CourtListByDate'

/**
 *
 {
          date: '2018/11/25',
          court: {
            name: '青葉台コート',
            courts: [
              {
                from: '8:30',
                 to:  '10:30',
                courtNo: 'C'
              },
              {
                from: '8:30',
                 to:  '10:30',
                courtNo: 'B'
              },
              {
                from: '8:30',
                 to:  '10:30',
                courtNo: 'A'
              }
            ]
          }
        }
 */
class AvailableCourtListMock {
  constructor () {

  }

  public getList (): Array<CourtListByDate> {
    return
    [
      new CourtListByDate('2018/11/11', [ new CourtListItem('青葉台コート', [
          new CourtItem('8:30', '10:30', 'C'),
          new CourtItem('8:30', '10:30', 'B'),
          new CourtItem('10:30', '12:30', 'A')
        ]),
          new CourtListItem('青葉台コート', [
            new CourtItem('8:30', '10:30', 'C'),
            new CourtItem('8:30', '10:30', 'B'),
            new CourtItem('10:30', '12:30', 'A')

          ])
        ]
      ),
      new CourtListByDate('2018/11/25', [ new CourtListItem('滝の根コート', [
        new CourtItem('8:30', '10:30', 'C')

      ]),
      ])
    ]
  }
}
