/**
 * To suppress the requestAnimationFrame warning on tests,
 * am creating a global function that all tests will use.
 */
const raf = cb => setTimeout(cb, 0);
global.requestAnimationFrame = raf;

export default raf;
