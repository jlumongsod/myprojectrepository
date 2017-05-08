import { RegisterService } from './register.service';

let testService = null;
let testArray = [];
 
describe('isEmptyList', () => {

    beforeEach(() => {
        testService = new RegisterService();
        localStorage.removeItem("allProjects");
    });

    it('should return true if project list is empty', () => {
        const result = testService.isEmptyList();
        expect(result).toBeTruthy();
    });
    it('should return false if project list is not empty', () => {
        localStorage.setItem("allProjects", '["Project01","Project02"]');
        const result = testService.isEmptyList();
        expect(result).toBeFalsy();
    });
});

describe('setProjList', () => {

    beforeEach(() => {
        testService = new RegisterService();
        localStorage.removeItem("allProjects");
    });

    it('should include project name from array to list', () => {
        testArray = ["Project01", "Project02"];
        testService.setProjList(testArray);
        const result = localStorage.getItem("allProjects");
        expect(result).toContain('Project01');
        expect(result).toContain('Project02');
    });
});

describe('getProjList', () => {

    beforeEach(() => {
        testService = new RegisterService();
        localStorage.removeItem("allProjects");
    });

    it('should return empty array if list is empty', () => {
        const result = testService.getProjList();
        expect(result.length).toBe(0);
    });

    it('should return array of values from the list', () => {
        localStorage.setItem("allProjects", '["Project01","Project02"]');
        const result = testService.getProjList();
        expect(result.length).toBe(2);
        expect(result[0]).toBe("Project01");
        expect(result[1]).toBe("Project02");
    });
});

describe('checkDuplicate', () => {

    beforeEach(() => {
        testService = new RegisterService();
        localStorage.removeItem("allProjects");
    });

    it('should return false if list is empty', () => {
        const result = testService.checkDuplicate("Project03");
        expect(result).toBeFalsy();
    });

    it('should return false if value has no duplicate in the list', () => {
        localStorage.setItem("allProjects", '["Project01","Project02"]');
        const result = testService.checkDuplicate("Project03");
        expect(result).toBeFalsy();
    });

    it('should return true if value has a duplicate in the list', () => {
        localStorage.setItem("allProjects", '["Project01","Project02"]');
        const result = testService.checkDuplicate("Project02");
        expect(result).toBeTruthy();
    });
});

/*
describe('', () => {
    it('', () => {

    });
});
*/