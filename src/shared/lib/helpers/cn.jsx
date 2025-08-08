function cn(...args) {
  return args
    .flatMap((arg) => {
      if (!arg) return [];
      if (typeof arg === "string") return [arg];
      if (Array.isArray(arg)) return cn(...arg);
      if (typeof arg === "object") {
        return Object.keys(arg).filter((key) => Boolean(arg[key]));
      }
      return [];
    })
    .join(" ");
}

export default cn;
