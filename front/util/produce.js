//internet explorer 에서 실행 하기 위해서 작성
import produce, { enableES5 } from "immer";

export default (...args) => {
  enableES5();
  return produce(...args);
};
