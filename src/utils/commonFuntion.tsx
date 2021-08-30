export function debounce(cb: (word: string) => void, delay: number) {
  let timer;
  return function (param) {
    clearTimeout(timer);
    timer = setTimeout(() => {
      cb.call(null, param);
    }, delay);
  };
}
