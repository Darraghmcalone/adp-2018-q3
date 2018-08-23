jest.setMock(
    './process-data',
    require('../__mocks__/process-data')
);
const StudentStats = require('./student-stats');

const processedData = {
    demographics: {
        averageAge: 32,
        averageExperience: 3.2,
    },
    projects: {
        project1: {
            passPercentage: 0.56,
            passSatisfaction: 5.6,
            failSatisfaction: 3.1,
        }
    }
}

let testStudentStats;

describe('StudentStats', () => {
    beforeEach(() => {
        testStudentStats = new StudentStats(processedData);
    });

    describe('queryCohort()', () => {
        describe('when a students range of experience does not exist', () => {
            it('should throw an error', () => {
                const testStudentExp = 'does not exist';

                expect(() => testStudentStats.queryCohort(testStudentExp)).toThrowError('Invalid range of experience');
            })
        })
    })

    describe('queryProject()', () => {
        describe('when project name specified does not exist', () => {
            it('should throw an error', () => {
                const testProjectName = 'does not exist';

                expect(() => testStudentStats.queryProject(testProjectName)).toThrowError('Invalid project name');
            });
        });


        describe('when project name specified exists', () => {
            let testProjectData;

            beforeEach(() => {
                testProjectData = testStudentStats.queryProject('project1');
            });

            it('should provide percentage of students that passed the project', () => {
                expect(testProjectData.passPercentage).toEqual(0.56);
            });
            it('should provide the satisfaction level of students that passed the project', () => {
                expect(testProjectData.passSatisfaction).toEqual(5.6);
            });
            it('should provide the satisfaction level of students that failed the project', () => {
                expect(testProjectData.failSatisfaction).toEqual(3.1);
            });
        });
    });
});