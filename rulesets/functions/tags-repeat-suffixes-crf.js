import { createRulesetFunction } from '@stoplight/spectral-core';

const NAME_PROPERTY = "name";

// Enter any other common suffixes that we want to catch
const SUFFIXES = ["API", "APIs", "Endpoint", "Endpoints"];

// Goal is to error when all tags have the same suffix
export default createRulesetFunction(
  {
    input: {
      type: "array",
      items: {
        type: "object",
        properties: {
          name: {
            type: "string",
          },
        },
      },
    },
    options: null,
  },

  (input, options, { path }) => {

    const seen = [];
    const dups = 0;
    const results = [];


    // iterate through all the input keys
    for (const [i, value] of input.keys()) {
      // skip if null or not an object (I think we also will want the strings here...but later)
      if (targetVal[i] === null || typeof targetVal[i] !== "object") {
        continue;
      }

      // get the value of the name property
      const tagName = input[i][NAME_PROPERTY];

      // skip if void
      if (tagName === void 0) {
        continue;
      }

      // if any of the suffixes are in the tag name, record it
      //SUFFIXES.forEach(function (item,index) {
      //  if( tagName.includes(item) ) {
      //    seen.push(tagName);
      //    dups++;
      //  }
      //});

      // if we've seen this before add it to the result
      //if (seen.includes(tagName)) {
      //  results.push({
       //   message: `Duplicate tag name '${tagName}'`,
       //   path: [...path, i, NAME_PROPERTY],
      //  });
      //}
      // else add it to seen
      //else {
        //seen.push(tagName);
      //}
    }

    // see how many duplicates there were
    // if dup count is greater than 1 then error
    if ( dups > 0 )
    {
      results.push({
        message: `Duplicates detected.`,
        path: `pathvalue`,
      });
    }

    return results;
  },
);