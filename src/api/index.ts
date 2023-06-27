import convertTime12to24 from "~/utils/convertTime12to24";
import api from "./api";

const API = {
  async getCounter() {
    return api.get("/bookings/counter");
  },
  async getHours(date: Date | Date[]) {
    const [day, month, year] = date
      .toLocaleString("pt-BR", {
        day: "numeric",
        month: "numeric",
        year: "numeric",
      })
      .split("/");

    const paramDate = `${year}-${month}-${day}`;
    return api.get("/bookings/", { params: { date: paramDate } });
  },
  async bookPrayer({
    email,
    phone,
    name,
    date,
    selectedHour,
  }: {
    email: string;
    phone: string;
    name: string;
    date: Date | Date[];
    selectedHour: string;
  }) {
    let response;
    const [day, month, year] = date
      .toLocaleString("pt-BR", {
        day: "numeric",
        month: "numeric",
        year: "numeric",
      })
      .split("/");
    const formattedHour = convertTime12to24(selectedHour);
    try {
      response = await api.post("/bookings/", {
        email,
        phone,
        name,
        datetime: `${year}-${month}-${day}T${formattedHour}:00.000Z`,
      });
    } catch (error) {
      console.error(error);
    }
    return response;
  },
};

export default API;
