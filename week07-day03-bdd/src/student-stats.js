const processData = require('./process-data');

class StudentStats {
    constructor(rawData) {
        this.data = processData(rawData);
    }

    queryProject(projectName) {
        if (!this.data.projects[projectName]) {
            throw new Error('Invalid project name');
        }

        return this.data.projects[projectName];
    }
    
    queryCohort(testExperience) {
        if (!this.data.demographics[testExperience]){
            throw new Error('Invalid range of experience');
        }
        return this.data.demographics[testExperience];
    }
}

module.exports = StudentStats;
