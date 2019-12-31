import _round from "lodash/round";
import _format from "date-fns/format";

export default {
  roundNumber(value) {
    return _round(value, 2);
  },

  formatDate(date, format) {
    return _format(new Date(date), "PP");
  }
};
