import {FullConfig, FullResult, Reporter, Suite, TestCase, TestResult} from "@playwright/test/reporter";
import * as fs from "fs";

class MyReporter implements Reporter {
     onBegin(config: FullConfig, suite: Suite) {
        console.log(`Execution of ${suite.allTests().length} tests`);
    }

    onEnd(result: FullResult): void | Promise<void> {
        console.log(`Execution finished with status of ${result.status}`);
    }

    onTestBegin(test: TestCase, result: TestResult) {
         console.log(`Execution of ${test.title} started`);
    }

    onTestEnd(test: TestCase, result: TestResult) {
         const execTime = result.duration;
         const data = {
             test: test.title,
             status: result.status,
             executionTime: execTime,
             errors: result.errors
         }

         const dataToString = JSON.stringify(data, null, 2);
         console.log(dataToString);

         fs.writeFileSync("test-result.json", `${dataToString},`, {flag: 'a'});
    }

}

export default MyReporter;
