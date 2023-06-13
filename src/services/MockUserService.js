import UserService from './ApiService';

export default class MockerUserService extends UserService {
  static async getInformation(id) {
    return {
      data: {
        id: id,
      },
    };
  }

  static async getActivity(id = 0) {
    console.log(`getPerformance used with id ${id}`);
    return {
      data: {
        data: {
          userId: 18,
          sessions: [
            {
              day: '2020-07-01',
              kilogram: 50,
              calories: 240,
            },
            {
              day: '2020-07-02',
              kilogram: 29,
              calories: 220,
            },
            {
              day: '2020-07-03',
              kilogram: 40,
              calories: 280,
            },
            {
              day: '2020-07-04',
              kilogram: 30,
              calories: 500,
            },
            {
              day: '2020-07-05',
              kilogram: 29,
              calories: 160,
            },
            {
              day: '2020-07-06',
              kilogram: 19,
              calories: 162,
            },
            {
              day: '2020-07-07',
              kilogram: 59,
              calories: 390,
            },
          ],
        },
      },
    };
  }

  static async getSessions(id = 0) {
    console.log(`getPerformance used with id ${id}`);
    return {
      data: {
        data: {
          userId: 12,
          sessions: [
            {
              day: 1,
              sessionLength: 10,
            },
            {
              day: 2,
              sessionLength: 33,
            },
            {
              day: 3,
              sessionLength: 75,
            },
            {
              day: 4,
              sessionLength: 50,
            },
            {
              day: 5,
              sessionLength: 10,
            },
            {
              day: 6,
              sessionLength: 20,
            },
            {
              day: 7,
              sessionLength: 60,
            },
          ],
        },
      },
    };
  }

  static async getPerformance(id = 0) {
    console.log(`getPerformance used with id ${id}`);
    return {
      data: {
        data: {
          userId: 12,
          kind: {
            1: 'cardio',
            2: 'energy',
            3: 'endurance',
            4: 'strength',
            5: 'speed',
            6: 'intensity',
          },
          data: [
            {
              value: 40,
              kind: 1,
            },
            {
              value: 80,
              kind: 2,
            },
            {
              value: 10,
              kind: 3,
            },
            {
              value: 150,
              kind: 4,
            },
            {
              value: 30,
              kind: 5,
            },
            {
              value: 90,
              kind: 6,
            },
          ],
        },
      },
    };
  }
}
