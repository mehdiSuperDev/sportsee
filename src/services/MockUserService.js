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

  static async getSessions(id) {
    return {
      data: {
        id: id,
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
