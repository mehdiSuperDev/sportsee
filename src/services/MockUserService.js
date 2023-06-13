import UserService from './ApiService';

export default class MockerUserService extends UserService {
  static async getInformation(id) {
    return {
      data: {
        id: id,
      },
    };
  }

  static async getActivity(id) {
    return {
      data: {
        id: id,
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
