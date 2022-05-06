function resolveTimeout(component, delay) {
  return new Promise((resolve) => setTimeout(() => resolve(component), delay));
}

export {
  resolveTimeout as default, // only for one modele export.
};
