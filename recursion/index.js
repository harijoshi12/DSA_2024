// ATM Analogy

// 1- what is the leat amount of work I can do.
// 2- When would the process complete

// Ex 1-  find my position
let arr = ["hari", "ram", "krish", "radha", "rani", "priya"];
const recur1 = (arr) => {
  if (arr.length == 1) return 1;
  arr = arr.slice(0, arr.length - 1);
  return 1 + recur1(arr);
};

const recur2 = (arr, len = 1) => {
  if (arr.length == 1) {
    console.log("len  =", len);
    return;
  }
  arr = arr.slice(0, arr.length - 1);
  recur2(arr, len + 1);
};
recur2(arr);

const count = (arr) => {
  let len = 0;
  for (let i = 0; i < arr.length; i++) {
    len++;
  }
  return len;
};

console.log(count(arr));
console.log(recur1(arr));

// pros -
// 1- bridges gap between elgance and complexity
// 2- reduces the need for complex loops and auxiliary data structure
// 3- Can reduce time complexity easily with memoization
// 4- Works really well with recursive structures like trees and graphs

// Cons -
// 1- slowness due to CPU overhead
// 2- Can lead to out of memorr erros/ stack overflow exceptions
// 3- can be unnecessarily complex if poorly constructed

// brain = {html, css, js,}
// Ex 2- Study
// website deploy
// frontend
// next.js
// react
// html
// css
// js
// backend
// node.js
// js
// express.js
// js
// mongodb
// js
// aws
// ec2
// elastic beanstalk
// route53
// codepipeline
// certificate manager
// iam

const buildAndDeployWeb1 = () => {
  // level 1
  const learnJs = () => {
    console.log("js learned");
  };
  const learnCss = () => {
    console.log("css learned");
  };
  const learnHtml = () => {
    console.log("html learned");
  };

  // level 2
  const learnReact = () => {
    learnJs();
    learnHtml();
    learnCss();
    console.log("React also learned");
  };
  const learnNodejs = () => {
    learnJs();
    console.log("nodejs learned");
  };
  const learnExpressjs = () => {
    learnJs();
    console.log("expressjs learned");
  };
  const learnMongoDb = () => {
    learnJs();
    console.log("mognodb learnd");
  };

  const ec2 = () => {
    console.log("ec2 learned");
  };
  const elasticBeanstalk = () => {
    console.log("elasticBeanstalk learned");
  };
  const route53 = () => {
    console.log("route53 learned");
  };
  const codepipeline = () => {
    console.log("codepipeline learned");
  };
  const certificateManager = () => {
    console.log("certificateManager learned");
  };
  const iam = () => {
    console.log("iam learned");
  };

  // level 3
  const learnNextjs = () => {
    learnReact();
    console.log("nextjs learned");
  };
  // level 4
  const learnFrontend = (() => {
    learnNextjs();
  })();
  const learnBackend = (() => {
    learnNodejs();
    learnExpressjs();
    learnMongoDb();
  })();
  const learnAws = (() => {
    ec2();
    elasticBeanstalk();
    certificateManager();
    route53();
    iam();
    codepipeline();
  })();
};

// buildAndDeployWeb1();

// with memo
const brain = {};
const buildAndDeployWeb2 = () => {
  // level 1
  const learnJs = () => {
    if ("js" in brain) {
      console.log("js skipped");
      return;
    }
    console.log("js learned");
    brain.js = true;
  };
  const learnCss = () => {
    if ("css" in brain) {
      console.log("css skipped");
      return;
    }
    console.log("css learned");
    brain.css = true;
  };
  const learnHtml = () => {
    console.log("html learned");
    brain.html = true;
  };

  // level 2
  const learnReact = () => {
    learnJs();
    learnHtml();
    learnCss();
    console.log("React also learned");
    brain.ractjs = true;
  };
  const learnNodejs = () => {
    learnJs();
    console.log("nodejs learned");
    brain.nodejs = true;
  };
  const learnExpressjs = () => {
    if ("express" in brain) {
      console.log("aws skipped");
      return;
    }
    learnJs();
    console.log("expressjs learned");
    brain.express = true;
  };
  const learnMongoDb = () => {
    if ("mongodb" in brain) {
      console.log("mongodb skipped");
      return;
    }
    learnJs();
    console.log("mognodb learnd");
    brain.mongodb = true;
  };

  const ec2 = () => {
    if ("ec2" in brain) {
      console.log("ec2 skipped");
      return;
    }
    console.log("ec2 learned");
    brain.ec2 = true;
  };
  const elasticBeanstalk = () => {
    if ("elb" in brain) {
      console.log("elb skipped");
      return;
    }
    console.log("elasticBeanstalk learned");
    brain.elb = true;
  };
  const route53 = () => {
    if ("route53" in brain) {
      console.log("route53 skipped");
      return;
    }
    console.log("route53 learned");
    brain.route53 = true;
  };
  const codepipeline = () => {
    if ("codepipeline" in brain) {
      console.log("aws skipped");
      return;
    }
    console.log("codepipeline learned");
    brain.codepipeline = true;
  };
  const certificateManager = () => {
    if ("cert" in brain) {
      console.log("cert skipped");
      return;
    }
    console.log("certificateManager learned");
    brain.cert = true;
  };
  const iam = () => {
    if ("iam" in brain) {
      console.log("iam skipped");
      return;
    }
    console.log("iam learned");
    brain.iam = true;
  };

  // level 3
  const learnNextjs = () => {
    if ("nextjs" in brain) {
      console.log("nextjs skipped");
      return;
    }
    learnReact();
    console.log("nextjs learned");
    brain.nextjs = true;
  };
  // level 4
  const learnFrontend = (() => {
    if ("frontend" in brain) {
      console.log("frontend skipped");
      return;
    }
    learnNextjs();
    brain.frontend = true;
  })();
  const learnBackend = (() => {
    if ("backend" in brain) {
      console.log("backend skipped");
      return;
    }
    learnNodejs();
    learnExpressjs();
    learnMongoDb();
    brain.backend = true;
  })();
  const learnAws = (() => {
    if ("aws" in brain) {
      console.log("aws skipped");
      return;
    }
    ec2();
    elasticBeanstalk();
    certificateManager();
    route53();
    iam();
    codepipeline();
    brain.aws = true;
  })();
};

// buildAndDeployWeb2();
let x = 1;
const a = () => {
  console.log(x++);
  a();
};
a();
