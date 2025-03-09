export const getDeadlineTime = (date: string, hour: string) => {
  const ymd = date.split("-");

  const y = +ymd[0];
  const m = +ymd[1];
  const d = +ymd[2];

  const day =
    new Date(y, m - 1, d).getTime() +
    9 * 1000 * 60 * 60 +
    +hour * 1000 * 60 * 60;

  const newday = new Date(day).toISOString();

  return newday;
};

export const getFormedDate = (date: string) => {
  const d = new Date(date).getTime();
  const krDay = d + 1000 * 3600 * 9;
  const newdate = new Date(krDay).toISOString().slice(0, 19).split("T");

  return newdate[0] + " " + newdate[1];
};

export const initialDate = () => {
  const year = new Date().getFullYear();
  const month = new Date().getMonth() + 1;
  const day = new Date().getDate();

  const tmpArr = [year, month, day];

  return tmpArr.join("-");
};

export const ISOtoY_M_D_Date = (date: string) => {
  const y_m_d = getFormedDate(date).split(" ")[0];

  return y_m_d;
};

type param = {
  createdAt: string;
};

export function compare(a: param, b: param) {
  const firstDate = new Date(a.createdAt).getTime();
  const secondDate = new Date(b.createdAt).getTime();

  return secondDate - firstDate;
}
