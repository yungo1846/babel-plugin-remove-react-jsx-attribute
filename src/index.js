module.exports = function () {
  return {
    visitor: {
      Program(path, state) {
        const attributes = state.opts.attributes;

        if (!Array.isArray(attributes)) {
          throw new Error("babel-plugin-remove-react-jsx-attribute\n: The attributes must be Array!");
        }

        const Visitor = {
          JSXIdentifier(path) {
            attributes.forEach((attribute) => {
              const isRegExpMatched = attribute instanceof RegExp && attribute.test(path.node.name);
              const isExactMatch = attribute === path.node.name;
              if (isRegExpMatched || isExactMatch) path.parentPath.remove();
            });
          },
        };

        path.traverse(Visitor);
      },
    },
  };
};
