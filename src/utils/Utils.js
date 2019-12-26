import _round from "lodash/round";

export default {
  roundNumber(value) {
    return _round(value, 2);
  }
};
