import { Court }           from '../models/Court'
import { CourtListItem }   from '../models/CourtListItem'
import { CourtListByDate } from '../models/CourtListByDate'

class AvailableCourtListMock {
  constructor () {

  }

  public getList (): Array<CourtListByDate> {
    return
    [
      new CourtListByDate('2018/11/11', [ new CourtListItem('青葉台コート', [
          {
            court: new Court('8:30', '10:30', 'C')
          },
          {
            court: new Court('8:30', '10:30', 'B')
          },
          {
            court: new Court('10:30', '12:30', 'A')
          }
        ]),
          new CourtListItem('青葉台コート', [
            {
              court: new Court('8:30', '10:30', 'C')
            },
            {
              court: new Court('8:30', '10:30', 'B')
            },
            {
              court: new Court('10:30', '12:30', 'A')
            }
          ])
        ]
      ),
      new CourtListByDate('2018/11/25', [ new CourtListItem('滝の根コート', [
        {
          court: new Court('8:30', '10:30', 'C')
        }
      ]),
      ])
    ]
  }
}
