import { createRulesetFunction } from '@stoplight/spectral-core';

const NAME_PROPERTY = "name";

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
    const results = [];

    results.push({
      message: `hello james`,
      path: [...path, 0, "name"],
    });

    return results;

    for (const [i, value] of input.keys()) {
      if (targetVal[i] === null || typeof targetVal[i] !== "object") {
        continue;
      }

      const tagName = input[i][NAME_PROPERTY];

      if (tagName === void 0) {
        continue;
      }

      if (seen.includes(tagName)) {
        results.push({
          message: `Duplicate tag name '${tagName}'`,
          path: [...path, i, NAME_PROPERTY],
        });
      } else {
        seen.push(tagName);
      }
    }

    return results;
  },
);