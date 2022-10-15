# Custom Reporter

1. importing **Reporter** from ***@playwright/test/reporter***;
2. importing everything from **fs**;
3. Declaring our class, which implements Reporter and then reimplement methods inside;
4. Doing as in Example;
5. In the end, specifying this file in --reporter flag: ``npx playwright test --reporter=reporter.ts``;
#### Example:
```
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

         fs.writeFileSync("test-result.json", dataToString + ",", {flag: 'a'});
    }

}

export default MyReporter;
```
