const report = require('./report.json');

const printreport = () => {
  const results = report.reportCategories;
  for (const result of results) {
    console.log(result.name + ' ' + Math.floor(result.score));
    if (Math.floor(result.score) < 80) {
      throw Error(result.name + ' score is to low in lighthouse audit. Score: ' + Math.floor(result.score));
    }
  }
};

printreport();

